import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css"

function SavedMovies() {
    return(
        <main className="main main_page_films main_page_saved">
        <SearchForm/>
        <div className="line-decor line-decor_page_films"></div>
        <MoviesCardList savedMoviesPage={true}/>
      </main>
    )
}

export default SavedMovies;