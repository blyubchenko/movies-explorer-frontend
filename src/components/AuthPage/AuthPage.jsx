import "./AuthPage.css";
import { Link } from "react-router-dom";

function AuthPage({ children, link, isValid }) {
  return (
    <div className="main main_page_forms page__container_position_center page__container_page_forms section_size_mini">
      <div className="header header_page_forms">
        <Link to="/" className="logo" />
      </div>
      <form className="form register" action="">
        <fieldset className="form__wrapper">
          <legend className="form__title form__title_page_forms">
            {link === "/signup" ? "Добро пожаловать!" : "Рады видеть!"}
          </legend>
          {children}
        </fieldset>
        <button type="submit" disabled={!isValid} className={`form__button ${!isValid && "form__button_inactive"}`}>
          {link === "/signup" ? "Зарегистрироваться" : "Войти"}
        </button>
      </form>
      <p className="form__text">
        {link === "/signup"
          ? "Уже зарегистрированы?"
          : "Ещё не зарегистрированы?"}
        <Link to={link} className="link form__link">
          {link === "/signup" ? "Войти" : "Регистрация"}
        </Link>
      </p>
    </div>
  );
}

export default AuthPage;