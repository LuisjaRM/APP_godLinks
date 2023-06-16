import { OfferCard } from "../../components/OfferCard/OfferCard";
import { useGetDailyOffers } from "../../services/api";

import "./Home.css";

export const Home = () => {
  const { offers, loading, error } = useGetDailyOffers();

  if (loading) return <p>cargando ofertas...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="body">
      <ul className="offers-list">
        {offers.offers?.map((offer) => (
          <li key={offer.id}>
            <OfferCard offer={offer} />
          </li>
        ))}
      </ul>
    </section>
  );
};
