import { useParams } from "react-router";
import { useAuth } from "../../contexts/AuthContext";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";
import { OfferCard } from "../../components/OfferCard/OfferCard";
import "./UserInfo.css";

export const UserInfo = () => {
  const { token } = useAuth();
  const { id } = useParams();

  const { dataUser, loading, error } = useGetUserInfo(token, id);

  if (loading) return <p>cargando ofertas...</p>;
  if (error) return <p>{error}</p>;

  const created_at = new Date(dataUser.userInfo[0].created_at);
  const dateCreated = created_at.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <>
      <section className="userInfo">
        <section className="header">
          <img
            className="user-image"
            src={
              dataUser.userInfo[0].avatar
                ? `${import.meta.env.VITE_BACKEND}uploads/${
                    dataUser.userInfo[0].avatar
                  }`
                : "/android-icon-36x36.png"
            }
            alt={dataUser.userInfo[0].user}
          />

          <p className="user-name">{dataUser.userInfo[0].user}</p>
        </section>

        <p>Miembro desde {dateCreated}</p>
      </section>

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
