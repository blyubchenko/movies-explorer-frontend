import { useEffect } from "react";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

function SearchForm({
  onSubmit,
  handelChekedShort,
  onChekedShort,
  savedMoviesPage,
}) {
  const {
    values,
    setValues,
    handleChange,
    errors,
    isValid,
    setErrors,
    setIsValid,
  } = useFormAndValidation();

  function handleSubmit(e) {
    if (!values.moviesSearch || values.moviesSearch.trim() === "") {
      e.preventDefault();
      setIsValid(false);
      setErrors({ moviesSearch: "Нужно ввести ключевое слово" });
      setTimeout(() => {
        setErrors({ moviesSearch: "" });
      }, 2000);
      return;
    }
    e.preventDefault();
    onSubmit(values.moviesSearch);
  }

  useEffect(() => {
    !savedMoviesPage
      ? setValues({
          ...values,
          moviesSearch: localStorage.getItem("searchQuery") || "",
        })
      : setValues({});
  }, []);

  function clickCheckbox() {
    handelChekedShort(values.moviesSearch);
  }

  return (
    <form
      className="search content-center section"
      onSubmit={handleSubmit}
      action="#"
      noValidate
    >
      <fieldset className="search__fieldset">
        <div className="search__wrapper">
          <input
            className="search__input"
            type="text"
            placeholder="Фильм"
            onChange={handleChange}
            name="moviesSearch"
            value={values.moviesSearch || ""}
            onInvalid={() =>
              setErrors({ moviesSearch: "Нужно ввести ключевое слово" })
            }
            onBlur={() => setErrors({ moviesSearch: "" })}
            required
          />
          <button className="search__button" type="submit">
            Найти
          </button>
          <span
            className={`input-error  input-error_movieSearch ${
              !isValid && "input-error_active"
            }`}
            id="moviesSearch-error"
          >
            {errors.moviesSearch}
          </span>
        </div>
        <FilterCheckbox
          handelChekedShort={clickCheckbox}
          onChekedShort={onChekedShort}
        />
      </fieldset>
    </form>
  );
}

export default SearchForm;
