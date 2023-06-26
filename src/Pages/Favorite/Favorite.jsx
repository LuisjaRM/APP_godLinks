import "./Favorite.css";

// Components

import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";
import { OfferCard } from "../../components/OfferCard/OfferCard";
import { PostOffer } from "../../components/PostOffer/PostOffer";

// Contexts

import { useAuth } from "../../contexts/AuthContext";

// Fetchs

import { useGetMyFavoriteOffers } from "../../services/api";

export const Favorite = () => {
  // Document Title
  document.title = "";

  const { token } = useAuth();
  const { offers, loading, error } = useGetMyFavoriteOffers(token);

  if (loading) return <p>cargando ofertas...</p>;
  if (error) return <ErrorMessage/>;

  return (
    <>
      <section className="body">
        <ul className="offers-list">
          {offers.offers?.map((offer) => (
            <li key={offer.id}>
              <OfferCard offer={offer} />
            </li>
          ))}
        </ul>
      </section>

      <PostOffer />
    </>
  );
};
