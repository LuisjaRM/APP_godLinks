import "./OfferById.css";

// React

import { useParams } from "react-router";

// Components

import { OfferCard } from "../../components/OfferCard/OfferCard";
import { Loading } from "../../components/Loading/Loading";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";
import { PostComment } from "../../components/PostComment/PostComment";
import { CommentsCard } from "../../components/CommentCard/CommentCard";
import { Filter } from "../../components/Filter/Filter";
import { PlataformFilter } from "../../components/PlataformFilter/PlataformFilter";

// Contexts

import { useAuth } from "../../contexts/AuthContext";

// Fetchs

import { useGetOfferById } from "../../services/api";

export const OfferById = () => {
  // Document Title

  document.title = "GodLinks: Oferta ";
  //document.title = "GodLinks: Offer ";

  const { id } = useParams();
  const { token } = useAuth();
  const { offers, loading, error, refresh } = useGetOfferById(id, token);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage />;

  return (
    <>
      <aside className="filters">
        <Filter />
        <PlataformFilter />
      </aside>

      <section className="offers">
        {offers.offerInfo?.map((offerInfo, index) => (
          <OfferCard key={index} offer={offerInfo} />
        ))}

        {offers.offerInfo?.map((offerInfo, i) => (
          <PostComment key={i} id={id} refresh={refresh} offer={offerInfo} />
        ))}

        <ul className="comments-body">
          {offers.comments?.map((comment) => (
            <li key={comment.id}>
              <CommentsCard comment={comment} refresh={refresh} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
