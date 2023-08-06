import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm() {
    return(
        <form className="search page__container_position_center section" action="">
          <fieldset className="search__fieldset">
            <div className="search__wrapper">
              <input className="search__input" type="text" placeholder="Фильм" />
              <button className="search__button" type="submit">Найти</button>
            </div>
            <FilterCheckbox/>
          </fieldset>
        </form>
    )
}

export default SearchForm;