import Navigation from "../Navigation/Navigation";
import "./Header.css";
import { Link } from "react-router-dom";

function Header({ loggedIn }) {
  return (
    <header
      className={`header ${
        loggedIn ? "header_page_films" : ""
      }`}
    >
      <Link to="/" className="logo" />
      <Navigation loggedIn={loggedIn} />
    </header>
  );
}

export default Header;
