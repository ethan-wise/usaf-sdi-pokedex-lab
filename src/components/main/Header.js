//contains links to pages, contains header, will contain search
import { Link } from "react-router-dom";
import PokeDexLogo from "../../resources/Pokédex_logo.png";
import "../../styles/Header.css";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <div className="pokedex-logo">
          <img src={PokeDexLogo} alt="Pokédex Logo" />
        </div>
      </Link>
      <Link to="/about">
        <div className="about-link">
          <span>About</span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
