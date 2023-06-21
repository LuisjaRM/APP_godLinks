import "./AllOffers.css";

// Components

import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";
import { OfferCard } from "../../components/OfferCard/OfferCard";

// Fetchs

import { useGetAllOffers } from "../../services/api";

export const AllOffers = () => {
  const { offers, loading, error, refresh } = useGetAllOffers();

  if (loading) return <p>cargando ofertas...</p>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section className="body">
      <ul className="offers-list">
        {offers.offers?.map((offer) => (
          <li key={offer.id}>
            <OfferCard refresh={refresh} offer={offer} />
          </li>
        ))}
      </ul>
    </section>
  );
};
