import { OfferCard } from "../../components/OfferCard/OfferCard";
import { useGetDailyOffers } from "../../services/api";
import "./Home.css";

export const Home = () => {
  const { offers, loading, error } = useGetDailyOffers();
  const offersWithVotes = offers.offersWithVotes;
  const offerWithoutVotes = offers.offers;

  if (loading) return <p>cargando ofertas...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
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
