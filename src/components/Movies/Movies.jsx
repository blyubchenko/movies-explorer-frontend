import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import apiMovies from "../../utils/MoviesApi";
import { useEffect, useState } from "react";
import { filterMovies, convertMovie } from "../../utils/utils";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Movies({
  isLoadingResults,
  setLoadingResults,
  handleSeveMovie,
  handleSeveMovieDelete,
  saveMovies,
  loggedIn,
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
    let searchQuery = localStorage.getItem("searchQuery");
    let chekedShort = localStorage.getItem("chekedShort") === "true";
    if (chekedShort) {
      setChekedShort(chekedShort);
    }
    if (searchQuery) {
      filteringMovies(searchQuery, chekedShort);
    }
  }, []);

  function handelChekedShort() {
    filteringMovies(localStorage.getItem("searchQuery"), !isChekedShort);
    setChekedShort(!isChekedShort);
    localStorage.setItem("chekedShort", !isChekedShort);
  }

  return (
    <div className="page__container">
      <Header loggedIn={loggedIn} />
      <main className="main main_page_films">
        <SearchForm
          onSubmit={handleSubmit}
          onChekedShort={isChekedShort}
          handelChekedShort={handelChekedShort}
        />
        <div className="line-decor line-decor_page_films"></div>
        {isLoadingResults ? (
          <Preloader />
        ) : isMovies.length === 0 && localStorage.getItem("searchQuery") ? (
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
      <Footer />
    </div>
  );
}

export default Movies;
