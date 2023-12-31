import "./OffersSearched.css";

// Intl

import { FormattedMessage } from "react-intl";

// React

import { useParams } from "react-router";

// Components

import { Loading } from "../../components/Loading/Loading";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";
import { OfferCard } from "../../components/OfferCard/OfferCard";
import { PostOffer } from "../../components/PostOffer/PostOffer";
import { Filter } from "../../components/Filter/Filter";
import { PlataformFilter } from "../../components/PlataformFilter/PlataformFilter";

// Contexts

import { useAuth } from "../../contexts/AuthContext";
import { useLanguage } from "../../contexts/LanguageContext";
import { useNightMode } from "../../contexts/NightModeContext";

// Fetch

import { useGetOffersSearched } from "../../services/api";

export const OffersSearched = () => {
  const { search } = useParams();

  // Document Title
  const [language] = useLanguage();

  language === "es"
    ? (document.title = `Tu búsqueda: ${search}`)
    : (document.title = `Your search: ${search}`);

  const { token } = useAuth();
  const { offers, loading, error, refresh } = useGetOffersSearched(
    token,
    search
  );

  // Theme Context
  const [nightMode] = useNightMode();

  if (loading) return <Loading />;
  if (error) return <ErrorMessage />;

  return (
    <>
      <aside className="filters">
        <Filter />
        <PlataformFilter />
      </aside>

      {offers.offers?.length === 0 ? (
        <section className={`no-offers ${nightMode === "day" ? "light" : ""}`}>
          <p className="no-offers-message">
            <FormattedMessage id="no-offers-searched" />
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
