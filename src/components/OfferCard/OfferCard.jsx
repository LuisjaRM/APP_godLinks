import { useState } from "react";
import "./OfferCard.css";

export const OfferCard = ({ offer }) => {
  // Date Logic
  const timeNow = Date.now();
  const nowDate = new Date(timeNow);

  const created_at = new Date(offer.created_at);
  const timeCreated_at = created_at.getTime() - 1000 * 60 * 60 * 2;
  const dateCreated = new Date(timeCreated_at);

  const dif = nowDate.getTime() - dateCreated.getTime();

  const seconds = Math.floor(dif / 1000);
  const minutes = Math.floor(dif / 1000 / 60);
  const hours = Math.floor(dif / 1000 / 60 / 60);
  const day = Math.floor(dif / 1000 / 60 / 60 / 24);

  let timeSinceCreated_at;
  let text;

  if (minutes < 1) {
    timeSinceCreated_at = seconds;
    text = "s";
  }
  if (minutes < 60) {
    timeSinceCreated_at = minutes;
    text = "m";
  }
  if (minutes > 60) {
    timeSinceCreated_at = hours;
    text = "h";
  }
  if (hours > 24) {
    timeSinceCreated_at = day;
    text = "d";
  }

  const offer_expiry = new Date(offer.created_at);
  const dateOffer_expiry = offer_expiry.toLocaleDateString("en-GB");

  // Favorite Logic

  const [favorite, setFavorite] = useState(false);

  return (
    <section className="offer-card">
      <section className="header">
        <section className="user-info">
          <img
            className="user-image"
            src={
              offer.avatar
                ? `${import.meta.env.VITE_BACKEND}uploads/${offer.avatar}`
                : "/android-icon-36x36.png"
            }
            alt={offer.title}
          />
          <p className="user-name">{offer.user}</p>
        </section>

        <p>
          hace {timeSinceCreated_at} {text}
        </p>
      </section>

      <section className="main">
        <section className="image-box">
          <img
            className="image"
            src={
              offer.photo
                ? `${import.meta.env.VITE_BACKEND}uploads/${offer.photo}`
                : "/android-icon-36x36.png"
            }
            alt={offer.title}
          />
          <button
            className="favorite-button"
            onClick={() => setFavorite(!favorite)}
          >
            {favorite ? "❤️" : "🤍"}
          </button>
        </section>

        <ul className="offer-info">
          <li className="offer-title">
            <h2>{offer.title}</h2>
          </li>
          <li className="offer-price">
            <p className="price">{offer.offer_price} €</p>
            <p className="price-dcto">{offer.price} €</p>
          </li>
          <li className="offer-cad">Cad: {dateOffer_expiry}</li>
          <li>{offer.descrip}</li>
        </ul>
      </section>

      <section className="footer">
        <p>👍 : {offer.avgVotes ? Number(offer.avgVotes).toFixed(1) : 0}</p>

        <button className="link-button">
          <a className="link" href={offer.url}>
            Ir a la oferta 🔗
          </a>
        </button>

        <button className="comments-button">🗨️</button>
      </section>
    </section>
  );
};
