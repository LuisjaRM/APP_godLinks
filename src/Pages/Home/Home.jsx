import { Filter } from "../../components/Filter/Filter";
import { OfferCard } from "../../components/OfferCard/OfferCard";
import { useGetOffers } from "../../hooks/useGetOffers";

import "./Home.css";

export const Home = () => {
  const { offers, loading, error } = useGetOffers();
  const offersWithVotes = offers.offersWithVotes;
  const offerWithoutVotes = offers.offers;

  if (loading) return <p>cargando ofertas...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Filter />

      <section className="body">
        <ul className="offers-list">
          {offersWithVotes?.map((offer) => (
            <li key={offer.id}>
              <OfferCard offer={offer} />
            </li>
          ))}

          {offerWithoutVotes?.map((offer) => (
            <li key={offer.id}>
              <OfferCard offer={offer} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
