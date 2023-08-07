import "./Navigation.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Navigation({ loggedIn }) {
  const location = useLocation();
  const activePath = location.pathname;

  return (
    <>
      {loggedIn ? (
        <div className="burger">
          <input
            className="burger__input"
            id="burger-check"
            type="checkbox"
          />
          <label for="burger-check" className="burger__label">
            <span className="burger__line"></span>
          </label>
          <div className="overlay"></div>
          <nav className="navbar">
            <ul className="header__list list">
              <li>
                <Link
                  to="/"
                  className={`header__link header__link_main link ${
                    activePath === "/" ? "header__link_active" : ""
                  }`}
                >
                  Главная
                </Link>
              </li>
              <li>
                <Link
                  to="/movies"
                  className={`header__link link ${
                    activePath === "/movies" ? "header__link_active" : ""
                  }`}
                >
                  Фильмы
                </Link>
              </li>
              <li>
                <Link
                  to="/saved-movies"
                  className={`header__link link ${
                    activePath === "/saved-movies" ? "header__link_active" : ""
                  }`}
                >
                  Сохранённые фильмы
                </Link>
              </li>
            </ul>
            <Link to="/profile" className="button-profile">
              Аккаунт
            </Link>
          </nav>
        </div>
      ) : (
        <div className="header__links">
          <Link to="/signin" className="header__link-registration link">
            Регистрация
          </Link>
          <Link to="/signup" className="header__link-enter link">
            Войти
          </Link>
        </div>
      )}
    </>
  );
}

export default Navigation;
