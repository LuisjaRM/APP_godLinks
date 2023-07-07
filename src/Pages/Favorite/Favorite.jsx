import "./Favorite.css";

// Components

import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";
import { OfferCard } from "../../components/OfferCard/OfferCard";
import { PostOffer } from "../../components/PostOffer/PostOffer";
import { Loading } from "../../components/Loading/Loading";
import { Filter } from "../../components/Filter/Filter";
import { PlataformFilter } from "../../components/PlataformFilter/PlataformFilter";

// Contexts

import { useAuth } from "../../contexts/AuthContext";
import { useLanguage } from "../../contexts/LanguageContext";

// Fetchs

import { useGetMyFavoriteOffers } from "../../services/api";

export const Favorite = () => {
  // Document Title
  const [language] = useLanguage();

  language === "es"
    ? (document.title = "Tus ofertas favoritas")
    : (document.title = "Your favorites offers");

  const { token } = useAuth();
  const { offers, loading, error, refresh } = useGetMyFavoriteOffers(token);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage />;

  return (
    <>
      <aside className="filters">
        <Filter />
        <PlataformFilter />
      </aside>

      {offers.offers?.length === 0 ? (
        <section className="no-offers">
          <p className="no-offers-message">
            No hay ofertas añadidas a tus favoritas
          </p>
        </section>
      ) : (
        <ul className="offers">
          {offers.offers?.map((offer) => (
            <li key={offer.id}>
              <OfferCard offer={offer} refresh={refresh} />
            </li>
          ))}
        </ul>
      )}

      <PostOffer />
    </>
  );
};
