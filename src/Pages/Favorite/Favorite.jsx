import "./Favorite.css";

// Components

import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";
import { OfferCard } from "../../components/OfferCard/OfferCard";

// Contexts

import { useAuth } from "../../contexts/AuthContext";

// Fetchs

import { useGetMyFavoriteOffers } from "../../services/api";

export const Favorite = () => {
  const { token } = useAuth();
  const { offers, loading, error, refresh } = useGetMyFavoriteOffers(token);

  if (loading) return <p>cargando ofertas...</p>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <>
      <section className="body">
        <ul className="offers-list">
          {offers.offers?.map((offer) => (
            <li key={offer.id}>
              <OfferCard refresh={refresh} offer={offer} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
