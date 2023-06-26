import "./ModifyOffer.css";

// react-router-dom

import { useParams } from "react-router";

// Components

import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";
import { ModifyOfferCard } from "../../components/ModifyOfferCard/ModifyOfferCard";

// Contexts

import { useAuth } from "../../contexts/AuthContext";

// Fetchs

import { useGetOfferById } from "../../services/api";

export const ModifyOffer = () => {
  // Document Title
  document.title = "Modifica tu oferta";

  const { id } = useParams();
  const { token } = useAuth();
  const { offers, loading, error, refresh } = useGetOfferById(id, token);

  if (loading) return <p>cargando ofertas...</p>;
  if (error) return <ErrorMessage/>;

  return (
    <section className="modifyOffer">
      {offers.offerInfo?.map((offerInfo, index) => (
        <ModifyOfferCard key={index} refresh={refresh} offer={offerInfo} />
      ))}
    </section>
  );
};
