import { useEffect, useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import { checkingMovieSaving } from "../../utils/utils";

function MoviesCardList({ savedMoviesPage, movies, handleSeveMovie, handleSeveMovieDelete, saveMovies }) {
  const [isMovieList, setMovieList] = useState([]);
  const [isLoadMovies, setLoadMovies] = useState(12);
  const [isLoadMoviesMoreButton, setLoadMoviesMoreButton] = useState(3);

  function handleResize() {
    const windowWidth = document.documentElement.clientWidth;
    if (windowWidth > 768) {
      setLoadMovies(12);
      setLoadMoviesMoreButton(3);
    }
    if (windowWidth <= 768) {
      setLoadMovies(8);
      setLoadMoviesMoreButton(2);
    }
    if (windowWidth <= 480) {
      setLoadMovies(5);
      setLoadMoviesMoreButton(2);
    }
  }
  useEffect(() => {
    handleResize();
    setMovieList(movies.slice(0, isLoadMovies))
    window.addEventListener("resize", () => {
      setTimeout(handleResize, 1000);
    });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [movies]);

  function clickMoreButton() {
    const newLoadMovies = isLoadMovies + isLoadMoviesMoreButton;
    setLoadMovies(newLoadMovies);
    setMovieList([...isMovieList, ...movies.slice(isLoadMovies, newLoadMovies)]);
  }

  return (
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
      {!savedMoviesPage && isMovieList.length !== movies.length
      ? 
      <button type="button" className="button-more" onClick={clickMoreButton}>
        Ещё
      </button>
      :
      <div className={!savedMoviesPage ? "button-none" : ''}/>
}
    </section>
  );
}

export default MoviesCardList;
