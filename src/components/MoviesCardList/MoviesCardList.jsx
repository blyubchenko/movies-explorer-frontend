import { useEffect, useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import { checkingMovieSaving } from "../../utils/utils";
import {
  LOAD_MOVIES_INITIAL,
  LOAD_MOVIES_MORE,
  WINDOW_WIDTH_BREAKPOINTS,
} from "../../utils/constants";

function MoviesCardList({
  savedMoviesPage,
  movies,
  handleSeveMovie,
  handleSeveMovieDelete,
  saveMovies,
}) {
  const [isMovieList, setMovieList] = useState([]);
  const [isLoadMovies, setLoadMovies] = useState(LOAD_MOVIES_INITIAL.desktop);
  const [isLoadMoviesMoreButton, setLoadMoviesMoreButton] = useState(
    LOAD_MOVIES_MORE.desktop
  );
  const [isWindowWidth, setWindowWidth] = useState(
    WINDOW_WIDTH_BREAKPOINTS.desktop
  );
  const [currentMovies, setCurrentMovies] = useState([]);
  let resizeTimeout;

  function handleResize() {
    const windowWidth = document.documentElement.clientWidth;
    setWindowWidth(windowWidth);
    if (windowWidth > WINDOW_WIDTH_BREAKPOINTS.desktop) {
      setLoadMovies(LOAD_MOVIES_INITIAL.desktop);
      setLoadMoviesMoreButton(LOAD_MOVIES_MORE.desktop);
    }
    if (windowWidth <= WINDOW_WIDTH_BREAKPOINTS.desktop) {
      setLoadMovies(LOAD_MOVIES_INITIAL.tablet);
      setLoadMoviesMoreButton(LOAD_MOVIES_MORE.tablet);
    }
    if (windowWidth <= WINDOW_WIDTH_BREAKPOINTS.tablet) {
      setLoadMovies(LOAD_MOVIES_INITIAL.mobile);
      setLoadMoviesMoreButton(LOAD_MOVIES_MORE.tablet);
    }
  }

  function delayedResize() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      handleResize();
    }, 1000);
  }

  useEffect(() => {
    setCurrentMovies(movies);
    handleResize();
    savedMoviesPage
      ? setMovieList(movies)
      : setMovieList(currentMovies.slice(0, isLoadMovies));
    window.addEventListener("resize", delayedResize);

    return () => {
      window.removeEventListener("resize", delayedResize);
    };
  }, [movies, isWindowWidth, currentMovies]);

  function clickMoreButton() {
    const newLoadMovies = isLoadMovies + isLoadMoviesMoreButton;
    setLoadMovies(newLoadMovies);
    setMovieList([
      ...isMovieList,
      ...currentMovies.slice(isLoadMovies, newLoadMovies),
    ]);
  }

  return (
    <>
      <section className="cards">
        {isMovieList.map((movie) => {
          return (
            <MoviesCard
              movie={movie}
              handleSeveMovieDelete={handleSeveMovieDelete}
              handleSeveMovie={handleSeveMovie}
              key={movie.movieId}
              savedMoviesPage={savedMoviesPage}
              movieIsSaved={checkingMovieSaving(saveMovies, movie)}
            />
          );
        })}
      </section>
      {!savedMoviesPage && isMovieList.length !== movies.length ? (
        <button type="button" className="button-more" onClick={clickMoreButton}>
          Ещё
        </button>
      ) : (
        <div className={!savedMoviesPage ? "button-none" : ""} />
      )}
    </>
  );
}

export default MoviesCardList;
