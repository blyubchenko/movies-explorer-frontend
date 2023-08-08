import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

function Movies({onSaveFilm, isSavedMode}) {
    return(
        <main className="main main_page_films">
        <SearchForm/>
        <div className="line-decor line-decor_page_films"></div>
        <MoviesCardList
        isSavedMode={isSavedMode}
        onSaveFilm={onSaveFilm}
        />
        <button type="button" className="button-more">Ещё</button>
      </main>
    )
}

export default Movies;