import "./OffersFiltered.css";

// React

import { useParams } from "react-router";

// Contexts

import { useShowFilter } from "../../contexts/ShowFilter";
import { useAuth } from "../../contexts/AuthContext";

// Components

import { Loading } from "../../components/Loading/Loading";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";
import { OfferCard } from "../../components/OfferCard/OfferCard";
import { PostOffer } from "../../components/PostOffer/PostOffer";

// Fetch

import { useGetOffersFiltered } from "../../services/api";

export const OffersFiltered = () => {
  const { plataform } = useParams();

  // Document Title
  document.title = `${plataform}: las mejores ofertas `;

  // ShowFilter

  const [, setShowFilter] = useShowFilter();
  setShowFilter(true);

  const { token } = useAuth();
  const { offers, loading, error } = useGetOffersFiltered(token, plataform);

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
