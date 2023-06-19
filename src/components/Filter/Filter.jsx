import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Filter.css";
import { useAuth } from "../../contexts/AuthContext";
import { useShow } from "../../contexts/ShowContext";
import { useNavigateTo } from "../../contexts/NavigateTo";

export const Filter = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const { user } = useAuth();
  const [show, setShow] = useShow();
  const [, setNavigateTo] = useNavigateTo();

  const navigate = useNavigate();

  const handleClickFavorites = () => {
    setNavigateTo("/favorites");
    user ? navigate("/favorites") : setShow(!show);
  };

  return (
    <>
      <section className="filterOffers">
        <nav className="filter-list">
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
      </section>
    </>
  );
};
