import { useAuth } from "../../contexts/AuthContext";
import { useGetMyData } from "../../services/api";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";
import "./UserProfile.css";

export const UserProfile = () => {
  const { token } = useAuth();

  const { dataUser, loading, error } = useGetMyData(token);

  if (loading) return <p>Cargando perfil de usuario </p>;
  if (error) return <ErrorMessage message={error} />;

  const created_at = new Date(dataUser.created_at);
  const dateCreated = created_at.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <section className="userProfile">
      <section className="header.profile">
        <img
          className="user-image-profile"
          src={
            dataUser.avatar
              ? `${import.meta.env.VITE_BACKEND}uploads/${
                  dataUser.userInfo[0].avatar
                }`
              : "/android-icon-36x36.png"
          }
          alt={dataUser.user}
        />

        <p className="user-name-profile">{dataUser.user}</p>

        <p className="user-email-profile">{dataUser.email}</p>

        <button>Cambiar contraseña</button>

        <button>Eliminar cuenta</button>
      </section>

      <p>Miembro desde {dateCreated}</p>
    </section>
  );
};

// import { useContext } from "react";
// import { AuthContext } from "../../contexts/AuthContext";
// import "./UserProfile.css";

// export const UserProfile = () => {
//   const { user } = useContext(AuthContext);

//   return (
//     <section>
//       <h1>Tu perfil</h1>
//       <p>{user.user}</p>
//     </section>
//   );
// };
