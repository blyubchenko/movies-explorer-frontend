import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import apiMovies from "../../utils/MoviesApi";
import { useEffect, useState } from "react";
import { filterMovies, convertMovie } from "../../utils/utils";

function Movies({
  isLoadingResults,
  setLoadingResults,
  handleSeveMovie,
  handleSeveMovieDelete,
  saveMovies,
}) {
  const [isMovies, setMovies] = useState([]);
  const [isChekedShort, setChekedShort] = useState(false);

  function filteringMovies(value, cheked = isChekedShort) {
    const researchMovie = localStorage.getItem("allFilms");
    const filteredMovies = filterMovies(
      JSON.parse(researchMovie),
      value,
      cheked
    );
    setMovies(filteredMovies);
  }

  function handleSubmit(value) {
    localStorage.setItem("searchQuery", value);
    localStorage.setItem("chekedShort", isChekedShort);
    if (localStorage.getItem("allFilms")) {
      filteringMovies(value);
    } else {
      setLoadingResults(true);
      apiMovies
        .getMovies()
        .then((res) => {
          localStorage.setItem("allFilms", JSON.stringify(convertMovie(res)));
          filteringMovies(value);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoadingResults(false);
        });
    }
  }

  useEffect(() => {
    const searchQuery = localStorage.getItem("searchQuery");
    const chekedShort = localStorage.getItem("chekedShort") === "true";
    if (chekedShort) {
      setChekedShort(chekedShort);
    }
    if (searchQuery) {
      filteringMovies(searchQuery, chekedShort);
    }
  }, []);

  function handelChekedShort() {
    setChekedShort(!isChekedShort)
    if (isMovies.length > 0) {
      filteringMovies(localStorage.getItem("searchQuery"), !isChekedShort);
    }
  }

  return (
    <main className="main main_page_films">
      <SearchForm
        onSubmit={handleSubmit}
        onChekedShort={isChekedShort}
        handelChekedShort={handelChekedShort}
      />
      <div className="line-decor line-decor_page_films"></div>
      {isLoadingResults ? (
        <Preloader />
        ) : isMovies.length === 0 ? (
          <span className="notification">Ничего не найдено</span>
        ) : (
          <MoviesCardList
            saveMovies={saveMovies}
            handleSeveMovieDelete={handleSeveMovieDelete}
            handleSeveMovie={handleSeveMovie}
            movies={isMovies}
            savedMoviesPage={false}
          />
        )}
    </main>
  );
}

export default Movies;
