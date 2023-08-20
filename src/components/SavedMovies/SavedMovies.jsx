import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css";
import { filterMovies } from "../../utils/utils";
import { useEffect, useState } from "react";
import Preloader from "../Preloader/Preloader";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function SavedMovies({
  saveMovies,
  setFilteredSaveMovies,
  filteredSaveMovies,
  handleSeveMovieDelete,
  isSavedMode,
  isLoadingResults,
  loggedIn,
}) {
  const [isChekedShort, setChekedShort] = useState(false);
  const [isNotFound, setNotFound] = useState(false);

  useEffect(() => {
    setFilteredSaveMovies(saveMovies);
  }, []);

  function filteringMovies(value = "", cheked = isChekedShort) {
    const filteredMovies = filterMovies(saveMovies, value, cheked);
    setFilteredSaveMovies(filteredMovies);
    if (filteredMovies.length === 0) {
      setNotFound(true);
    } else {
      setNotFound(false);
    }
  }

  function handleSubmit(value) {
    localStorage.setItem("searchQuerySavedMovies", value);
    filteringMovies(value);
  }

  function handelChekedShort(value) {
    setChekedShort(!isChekedShort);
    if (saveMovies.length > 0) {
      filteringMovies(value, !isChekedShort);
    }
  }

  return (
    <div className="page__container">
      <Header loggedIn={loggedIn} />
      <main className="main main_page_films main_page_saved">
        <SearchForm
          savedMoviesPage={true}
          onSubmit={handleSubmit}
          onChekedShort={isChekedShort}
          handelChekedShort={handelChekedShort}
        />
        <div className="line-decor line-decor_page_films"></div>
        {isLoadingResults ? (
          <Preloader />
        ) : isNotFound ? (
          <span className="notification">Ничего не найдено</span>
        ) : (
          <MoviesCardList
            savedMoviesPage={true}
            movies={
              filteredSaveMovies.length > 0 ? filteredSaveMovies : saveMovies
            }
            handleSeveMovieDelete={handleSeveMovieDelete}
            isSavedMode={isSavedMode}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default SavedMovies;
