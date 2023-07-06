import "./OffersFiltered.css";

// React

import { useParams } from "react-router";

// Contexts

import { useAuth } from "../../contexts/AuthContext";
import { useLanguage } from "../../contexts/LanguageContext";

// Components

import { Loading } from "../../components/Loading/Loading";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";
import { OfferCard } from "../../components/OfferCard/OfferCard";
import { PostOffer } from "../../components/PostOffer/PostOffer";
import { Filter } from "../../components/Filter/Filter";
import { PlataformFilter } from "../../components/PlataformFilter/PlataformFilter";

// Fetch

import { useGetOffersFiltered } from "../../services/api";

export const OffersFiltered = () => {
  const { plataform } = useParams();

  // Document Title
  const [language] = useLanguage();

  language === "es"
    ? (document.title = `${plataform}: las mejores ofertas`)
    : (document.title = `${plataform}: best offers`);

  const { token } = useAuth();
  const { offers, loading, error, refresh } = useGetOffersFiltered(
    token,
    plataform
  );

  if (loading) return <Loading />;
  if (error) return <ErrorMessage />;

  return (
    <>
      <aside className="filters">
        <Filter />
        <PlataformFilter />
      </aside>

      <ul className="offers">
        {offers.offers?.map((offer) => (
          <li key={offer.id}>
            <OfferCard offer={offer} refresh={refresh} />
          </li>
        ))}
      </ul>

      <PostOffer />
    </>
  );
};
