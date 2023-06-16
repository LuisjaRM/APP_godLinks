import { OfferCard } from "../../components/OfferCard/OfferCard";
import { useGetAllOffers } from "../../services/api";
import "./AllOffers.css";
export const AllOffers = () => {
  const { offers, loading, error } = useGetAllOffers();

  if (loading) return <p>cargando ofertas...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="body">
      <ul className="offers-list">
        {offers.offers?.map((offer) => (
          <li key={offer.id}>
            <OfferCard offer={offer} />
          </li>
        ))}
      </ul>
    </section>
  );
};
