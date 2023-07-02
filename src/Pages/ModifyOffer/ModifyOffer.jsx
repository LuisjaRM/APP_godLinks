import "./ModifyOffer.css";


// react-router-dom

import { useParams } from "react-router";

// Components

import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";
import { ModifyOfferCard } from "../../components/ModifyOfferCard/ModifyOfferCard";
import { Loading } from "../../components/Loading/Loading";

// Contexts

import { useAuth } from "../../contexts/AuthContext";

// Fetchs

import { useGetOfferById } from "../../services/api";

export const ModifyOffer = () => {
  // Document Title
  document.title = "Modifica tu oferta";
  // document.title = "Modify your offer";

  const { id } = useParams();
  const { token } = useAuth();
  const { offers, loading, error, refresh } = useGetOfferById(id, token);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage />;

  return (
    <section className="modify-offer">
      {offers.offerInfo?.map((offerInfo, index) => (
        <ModifyOfferCard key={index} refresh={refresh} offer={offerInfo} />
      ))}
    </section>
  );
};
