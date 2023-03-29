import "./Header.scss";
import { NavLink, useNavigate } from "react-router-dom";
import pokemonLogo from "../../assets/pokemon-logo.png";
import { FaArrowLeft } from "react-icons/fa";
import { LanguageSelector } from "../../App";
import { useContext } from "react";

const Header = () => {
  const navigate = useNavigate();
  const { setLanguage } = useContext(LanguageSelector);

  return (
    <header className="header">
      <button className="header__go-back" onClick={() => navigate(-1)}>
        <FaArrowLeft></FaArrowLeft>
      </button>

      <NavLink to="/" className="header__link">
        <img className="header__logo-image" src={pokemonLogo}></img>
      </NavLink>

      <div className="header__lang">
        <button onClick={() => setLanguage("es-ES")} className="header__lang-btn">
          ES
        </button>
        <button onClick={() => setLanguage("en-EN")} className="header__lang-btn">
          EN
        </button>
      </div>
    </header>
  );
};
export default Header;
