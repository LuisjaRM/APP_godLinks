import "./UserInfo.css";

// react-router-dom

import { useParams } from "react-router";

// Components

import { OfferCard } from "../../components/OfferCard/OfferCard";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";
import { UserInfoCard } from "../../components/UserInfoCard/UserInfoCard";
import { Loading } from "../../components/Loading/Loading";

// Contexts

import { useAuth } from "../../contexts/AuthContext";
// Fetchs

import { useGetUserInfo } from "../../services/api";

export const UserInfo = () => {
  // Document Title
  document.title = "Mis ofertas";

  const { token } = useAuth();
  const { id } = useParams();

  const { dataUser, loading, error, refresh } = useGetUserInfo(token, id);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage />;

  return (
    <>
      {dataUser.userInfo?.map((userInfo, index) => (
        <UserInfoCard key={index} userInfo={userInfo} />
      ))}

      <section className="body">
        <ul className="offers-list">
          {dataUser.offers?.map((offer) => (
            <li key={offer.id}>
              <OfferCard refresh={refresh} offer={offer} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
