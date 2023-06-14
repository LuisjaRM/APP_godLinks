import { Link } from "react-router-dom";
import "./Filter.css";

export const Filter = () => {
  return (
    <>
      <section className="filterOffers">
        <nav className="filter-list">
          <Link className="link" to="/allOffer">
            Todas las ofertas
          </Link>
          <Link className="link" to="/daylioffer">
            Ofertas del dia
          </Link>
          <Link className="link" to="/offersByVotes">
            Ofertas más votadas
          </Link>
          <Link className="link" to="/favorites">
            Ofertas favoritas
          </Link>
        </nav>
      </section>
    </>
  );
};
