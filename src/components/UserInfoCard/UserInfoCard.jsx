import "./UserInfoCard.css";

export const UserInfoCard = ({ userInfo }) => {
  const created_at = new Date(userInfo.created_at);
  const dateCreated = created_at.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <section className="userInfo">
      <section className="header">
        <img
          className="user-image"
          src={
            userInfo.avatar
              ? `${import.meta.env.VITE_BACKEND}uploads/${userInfo.avatar}`
              : "/android-icon-36x36.png"
          }
          alt={userInfo.user}
        />

        <p className="user-name">{userInfo.user}</p>
      </section>

      <p>Miembro desde {dateCreated}</p>
    </section>
  );
};
