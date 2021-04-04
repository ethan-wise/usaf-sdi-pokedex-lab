//contains links to pages, contains header, will contain search
import { Link } from "react-router-dom";
import "../../styles/Header.css";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <h1>Pokedex</h1>
      </Link>
      <Link to="/about">
        <span>About</span>
      </Link>
    </div>
  );
}

export default Header;
