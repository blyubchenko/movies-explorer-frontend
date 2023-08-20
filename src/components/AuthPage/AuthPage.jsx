import ErrorMessage from "../ErrorMessage/ErrorMessage";
import "./AuthPage.css";
import { Link } from "react-router-dom";

function AuthPage({ children, link, isValid, isError, isErrorMessage, onSubmit }) {
  return (
    <div className="main main_page_forms content-center content-center_page_forms section section_size_mini">
      <div className="header header_page_forms">
        <Link to="/" className="logo" />
      </div>
      <form className="form register" onSubmit={onSubmit}>
        <fieldset className="form__wrapper">
          <legend className="form__title form__title_page_forms">
            {link === "/signup" ? "Рады видеть!" :  "Добро пожаловать!"}
          </legend>
          {children}
        </fieldset>
        <ErrorMessage
        isError={isError}
        isErrorMessage={isErrorMessage}
        />
        <button type="submit" disabled={!isValid} className={`form__button ${!isValid && "form__button_inactive"}`}>
          {link === "/signup" ? "Войти" : "Зарегистрироваться"}
        </button>
      </form>
      <p className="form-text">
        {link === "/signup"
          ? "Ещё не зарегистрированы?"
          : "Уже зарегистрированы?"}
        <Link to={link} className="link link_form">
          {link === "/signup" ? "Регистрация" : "Войти"}
        </Link>
      </p>
    </div>
  );
}

export default AuthPage;
