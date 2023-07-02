import "./UserInfoCard.css";

import {FormattedMessage} from 'react-intl';

export const UserInfoCard = ({ userInfo }) => {
  // Date Logic
  const created_at = new Date(userInfo.created_at);
  const dateCreated = created_at.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <section className="user">
      <section className="header">
        <img
          className="user-image"
          src={
            userInfo.avatar
              ? `${import.meta.env.VITE_BACKEND}uploads/${userInfo.avatar}`
              : "/default-user.webp"
          }
          alt={userInfo.user}
        />

        <p className="user-name">{userInfo.user}</p>
      </section>

      <p><FormattedMessage id="member-since"/> {dateCreated}</p>
    </section>
  );
};
