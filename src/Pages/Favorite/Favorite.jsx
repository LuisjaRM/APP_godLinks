import { OfferCard } from "../../components/OfferCard/OfferCard";
import { useAuth } from "../../contexts/AuthContext";
import { useGetMyFavoriteOffersService } from "../../services/api";
import "./Favorite.css";

export const Favorite = () => {
  const { token } = useAuth();
  const { offers, refresh } = useGetMyFavoriteOffersService(token);

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
