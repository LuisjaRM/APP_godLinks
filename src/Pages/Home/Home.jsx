import "./Home.css";

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
import { useNightMode } from "../../contexts/NightModeContext";

// Fetchs

import { useGetDailyOffers } from "../../services/api";

export const Home = () => {
  // Document Title
  document.title = "GodLinks";

  const { token } = useAuth();
  const { offers, loading, error, refresh } = useGetDailyOffers(token);

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
            <FormattedMessage id="no-offers-daily" />
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
