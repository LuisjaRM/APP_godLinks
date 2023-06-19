import { OfferCard } from "../../components/OfferCard/OfferCard";
import { useGetOffersByVotes } from "../../services/api";
import "./OffersByVotes.css";

export const OffersByVotes = () => {
  const { offers, loading, error, refresh } = useGetOffersByVotes();

  if (loading) return <p>cargando ofertas...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="body">
      <ul className="offers-list">
        {offers.offers?.map((offer) => (
          <li key={offer.id}>
            <OfferCard refresh={refresh} offer={offer} />
          </li>
        ))}
      </ul>
    </section>
  );
};
