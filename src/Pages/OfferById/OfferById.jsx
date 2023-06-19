import { useParams } from "react-router";
import { OfferCard } from "../../components/OfferCard/OfferCard";
import { useGetOffer } from "../../hooks/useGetOffer";
import { Comments } from "../../components/Comments/Comments";
import { useAuth } from "../../contexts/AuthContext";
import "./OfferById.css";

export const OfferById = () => {
  const { id } = useParams();
  const { token } = useAuth();
  const { offer, loading, error } = useGetOffer(id, token);

  if (loading) return <p>cargando ofertas...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="body">
      <OfferCard offer={offer.offerInfo} />
      <Comments comments={offer.comments} />
    </section>
  );
};
