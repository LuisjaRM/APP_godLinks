import "./Home.css";

// Components

import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";
import { OfferCard } from "../../components/OfferCard/OfferCard";
import { PostOffer } from "../../components/PostOffer/PostOffer";
import { Loading } from "../../components/Loading/Loading";
import { Filter } from "../../components/Filter/Filter";
import { PlataformFilter } from "../../components/PlataformFilter/PlataformFilter";

// Contexts

import { useAuth } from "../../contexts/AuthContext";

// Fetchs

import { useGetDailyOffers } from "../../services/api";

export const Home = () => {
  // Document Title
  document.title = "GodLinks";

  const { token } = useAuth();
  const { offers, loading, error, refresh } = useGetDailyOffers(token);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage />;

  console.log(offers.offers?.length);
  return (
    <>
      <aside className="filters">
        <Filter />
        <PlataformFilter />
      </aside>
      {offers.offers?.length === 0 ? (
        <section className="no-offers">
          <p className="no-offers-message">
            No hay subida ninguna oferta <br />
            con la fecha de hoy
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
