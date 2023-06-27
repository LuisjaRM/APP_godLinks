import "./Filter.css";

// React

import { Link, useLocation, useNavigate } from "react-router-dom";

// Contexts

import { useAuth } from "../../contexts/AuthContext";
import { useShowLogin } from "../../contexts/ShowLoginContext";
import { useNavigateTo } from "../../contexts/NavigateToContext";

export const Filter = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const { user } = useAuth();
  const [showLogin, setShowLogin] = useShowLogin();
  const [, setNavigateTo] = useNavigateTo();

  const handleClickFavorites = () => {
    setNavigateTo("/favorites");
    user ? navigate("/favorites") : setShowLogin(!showLogin);
  };

  return (
    <nav className="filter">
      {currentPath !== "/allOffers" ? (
        <Link className="link" to="/allOffers">
          Todas las ofertas
        </Link>
      ) : null}
      {currentPath !== "/" ? (
        <Link className="link" to="/">
          Ofertas del día
        </Link>
      ) : null}
      {currentPath !== "/offersByVotes" ? (
        <Link className="link" to="/offersByVotes">
          Ofertas más votadas
        </Link>
      ) : null}
      {currentPath !== "/favorites" ? (
        <p onClick={handleClickFavorites} className="link">
          Ofertas favoritas
        </p>
      ) : null}
    </nav>
  );
};
