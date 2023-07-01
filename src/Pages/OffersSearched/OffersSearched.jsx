import "./OffersSearched.css";

// React

import { useParams } from "react-router";

// Components

import { Loading } from "../../components/Loading/Loading";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";
import { OfferCard } from "../../components/OfferCard/OfferCard";
import { PostOffer } from "../../components/PostOffer/PostOffer";

// Contexts

import { useAuth } from "../../contexts/AuthContext";
import { useShowFilter } from "../../contexts/ShowFilter";

// Fetch

import { useGetOffersSearched } from "../../services/api";

export const OffersSearched = () => {
  const { search } = useParams();

  // Document Title
  document.title = `Tu búsqueda: ${search}`;

  // ShowFilter

  const [, setShowFilter] = useShowFilter();
  setShowFilter(true);

  const { token } = useAuth();
  const { offers, loading, error } = useGetOffersSearched(token, search);

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
