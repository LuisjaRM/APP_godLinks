import "./Home.css";

// Components

import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";
import { OfferCard } from "../../components/OfferCard/OfferCard";
import { PostOffer } from "../../components/PostOffer/PostOffer";
import { Loading } from "../../components/Loading/Loading";

// Contexts

import { useAuth } from "../../contexts/AuthContext";
import { useShowFilter } from "../../contexts/ShowFilter";

// Fetchs

import { useGetDailyOffers } from "../../services/api";

export const Home = () => {
  // Document Title
  document.title = "GodLinks";

  // ShowFilter

  const [, setShowFilter] = useShowFilter();
  setShowFilter(true);

  const { token } = useAuth();
  const { offers, loading, error } = useGetDailyOffers(token);

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
