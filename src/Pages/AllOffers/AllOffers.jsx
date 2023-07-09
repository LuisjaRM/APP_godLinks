import "./AllOffers.css";

// Intl

import { FormattedMessage } from "react-intl";

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

import { useGetAllOffers } from "../../services/api";

export const AllOffers = () => {
  // Document Title
  const [language] = useLanguage();

  language === "es"
    ? (document.title = "Las mejores ofertas del mercado")
    : (document.title = "Best offers of the market");

  const { token } = useAuth();
  const { offers, loading, error, refresh } = useGetAllOffers(token);

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
          <FormattedMessage id="no-offer" />
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
      <PostOffer refresh={refresh} />
    </>
  );
};
