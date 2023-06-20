import { useParams } from "react-router";
import { useAuth } from "../../contexts/AuthContext";
import { useGetUserInfo } from "../../services/api";
import { OfferCard } from "../../components/OfferCard/OfferCard";
import "./UserInfo.css";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";
import { UserInfoCard } from "../../components/UserInfoCard/UserInfoCard";

export const UserInfo = () => {
  const { token } = useAuth();
  const { id } = useParams();

  const { dataUser, loading, error } = useGetUserInfo(token, id);

  if (loading) return <p>cargando ofertas...</p>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <>
      {dataUser.userInfo?.map((userInfo, index) => (
        <UserInfoCard key={index} userInfo={userInfo} />
      ))}

      <section className="body">
        <ul className="offers-list">
          {dataUser.offers?.map((offer) => (
            <li key={offer.id}>
              <OfferCard offer={offer} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
