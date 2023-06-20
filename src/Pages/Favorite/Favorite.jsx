import { OfferCard } from "../../components/OfferCard/OfferCard";
import { useAuth } from "../../contexts/AuthContext";
import { useGetMyFavoriteOffers } from "../../services/api";
import "./Favorite.css";

export const Favorite = () => {
  const { token } = useAuth();
  const { offers, loading, error, refresh } = useGetMyFavoriteOffers(token);

  if (loading) return <p>cargando ofertas...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <section className="body">
        <ul className="offers-list">
          {offers.offers?.map((offer) => (
            <li key={offer.id}>
              <OfferCard refresh={refresh} offer={offer} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
