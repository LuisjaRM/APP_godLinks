import { Link, useLocation } from "react-router-dom";
import "./Filter.css";

export const Filter = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      <section className="filterOffers">
        <nav className="filter-list">
          {currentPath !== "/alloffer" ? (
            <Link className="link" to="/alloffer">
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
            <Link className="link" to="/favorites">
              Ofertas favoritas
            </Link>
          ) : null}
        </nav>
      </section>
    </>
  );
};
