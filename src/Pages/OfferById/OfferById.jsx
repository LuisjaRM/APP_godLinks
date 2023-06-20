import { useParams } from "react-router";
import { useGetOfferById } from "../../services/api";
import { OfferCard } from "../../components/OfferCard/OfferCard";
import { useAuth } from "../../contexts/AuthContext";
import "./OfferById.css";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";
import { CommentsCard } from "../../components/CommentCard/CommentCard";


export const OfferById = () => {
  const { id } = useParams();
  const { token } = useAuth();
  const { offers, loading, error } = useGetOfferById(id, token);

  if (loading) return <p>cargando ofertas...</p>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section className="body">
      {offers.offerInfo?.map((offerInfo, index) => (
        <OfferCard key={index} offer={offerInfo} />
      ))}

      <section className="comments-body">
        <ul className="comments-list">
          {offers.comments?.map((comment) => (
            <li key={comment.id}>
              <CommentsCard comment={comment} />
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};
