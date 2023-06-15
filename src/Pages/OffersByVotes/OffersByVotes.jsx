import { OfferCard } from "../../components/OfferCard/OfferCard";
import { useGetOffersByVotes } from "../../services/api";
import "./OffersByVotes.css";

export const OffersByVotes = () => {
  const { offers, loading, error } = useGetOffersByVotes();
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
