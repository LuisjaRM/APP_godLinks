import "./UserInfo.css";

// Intl

import { FormattedMessage } from "react-intl";

// react-router-dom

import { useParams } from "react-router";

// Components

import { OfferCard } from "../../components/OfferCard/OfferCard";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";
import { UserInfoCard } from "../../components/UserInfoCard/UserInfoCard";
import { Loading } from "../../components/Loading/Loading";

// Contexts

import { useAuth } from "../../contexts/AuthContext";
import { useLanguage } from "../../contexts/LanguageContext";

// Fetchs

import { useGetUserInfo } from "../../services/api";

export const UserInfo = () => {
  // Document Title
  const [language] = useLanguage();

  language === "es"
    ? (document.title = "Mis ofertas")
    : (document.title = "My offers");

  const { token } = useAuth();
  const { id } = useParams();

  const { dataUser, loading, error, refresh } = useGetUserInfo(token, id);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage />;

  return (
    <section className="user-offers">
      {dataUser.userInfo?.map((userInfo, index) => (
        <UserInfoCard key={index} userInfo={userInfo} />
      ))}

      {dataUser.offers?.length === 0 ? (
        <section className="no-offers">
          <FormattedMessage id="no-my-offers" />
        </section>
      ) : (
        <ul className="offers-list">
          {dataUser.offers?.map((offer) => (
            <li key={offer.id}>
              <OfferCard offer={offer} refresh={refresh} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
