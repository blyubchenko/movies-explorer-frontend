import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

function SearchForm({ onSubmit, handelChekedShort, onChekedShort }) {
  const { values, handleChange } =
    useFormAndValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(values.moviesSearch)
  }

  return (
    <form
      className="search content-center section"
      onSubmit={handleSubmit}
      action="#"
    >
      <fieldset className="search__fieldset">
        <div className="search__wrapper">
          <input
            className="search__input"
            type="text"
            placeholder="Фильм"
            onChange={handleChange}
            name="moviesSearch"
            value={values.moviesSearch || ''}
            required
          />
          <button className="search__button" type="submit">
            Найти
          </button>
        </div>
        <FilterCheckbox
          handelChekedShort={handelChekedShort}
          onChekedShort={onChekedShort}
        />
      </fieldset>
    </form>
  );
}

export default SearchForm;
