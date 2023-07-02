import "./Favorite.css";

// Components

import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";
import { OfferCard } from "../../components/OfferCard/OfferCard";
import { PostOffer } from "../../components/PostOffer/PostOffer";
import { Loading } from "../../components/Loading/Loading";

// Contexts

import { useAuth } from "../../contexts/AuthContext";

// Fetchs

import { useGetMyFavoriteOffers } from "../../services/api";

export const Favorite = () => {
  // Document Title
  document.title = "Tus ofertas favoritas";
  //document.title = "Your favorite offers";

  const { token } = useAuth();
  const { offers, loading, error } = useGetMyFavoriteOffers(token);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage />;

  return (
    <>
      <ul className="offers">
        {offers.offers?.map((offer) => (
          <li key={offer.id}>
            <OfferCard offer={offer} />
          </li>
        ))}
      </ul>

      <PostOffer />
    </>
  );
};
