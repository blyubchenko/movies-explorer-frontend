import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css";
import { filterMovies } from "../../utils/utils";
import { useState } from "react";
import Preloader from "../Preloader/Preloader";

function SavedMovies({
  saveMovies,
  setFilteredSaveMovies,
  filteredSaveMovies,
  handleSeveMovieDelete,
  isSavedMode,
  isLoadingResults
}) {
  const [isChekedShort, setChekedShort] = useState(false);

  function filteringMovies(value, cheked = isChekedShort) {
    const filteredMovies = filterMovies(
      saveMovies,
      value,
      cheked
    );
    setFilteredSaveMovies(filteredMovies);
  }

  function handleSubmit(value) {
      filteringMovies(value);
  }

  function handelChekedShort() {
    setChekedShort(!isChekedShort);
    if (saveMovies.length > 0) {
      filteringMovies('', !isChekedShort);
    }
  }

  return (
    <main className="main main_page_films main_page_saved">
      <SearchForm
        onSubmit={handleSubmit}
        onChekedShort={isChekedShort}
        handelChekedShort={handelChekedShort}
      />
      <div className="line-decor line-decor_page_films"></div>
      {isLoadingResults ? (
        <Preloader />
        ) : filteredSaveMovies.length === 0 ? (
          <span className="notification">Ничего не найдено</span>
        ) : (
      <MoviesCardList
        savedMoviesPage={true}
        movies={filteredSaveMovies}
        handleSeveMovieDelete={handleSeveMovieDelete}
        isSavedMode={isSavedMode}
      />
        )}
    </main>
  );
}

export default SavedMovies;
