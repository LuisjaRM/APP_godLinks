import { OfferCard } from "../../components/OfferCard/OfferCard";
import { useGetAllOffers } from "../../services/api";
import "./AllOffers.css";
export const AllOffers = () => {
  const { offers, loading, error } = useGetAllOffers();
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
