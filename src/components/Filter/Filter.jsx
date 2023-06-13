import { Link } from "react-router-dom";
import "./Filter.css";

export const Filter = () => {
  return (
    <>
      <div className="filterOffers">
        <nav>
          <Link to="/allOffer">Todas las ofertas</Link>
          <Link to="/daylioffer">Ofertas del dia</Link>
          <Link to="/offersByVotes">Ofertas votadas</Link>
          <Link to="/favorites">Ofertas favoritas</Link>
        </nav>
      </div>
    </>
  );
};
