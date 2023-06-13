import "./OfferCard.css";

export const OfferCard = ({ offer }) => {
  const date = new Date(offer.offer_expiry).toDateString();

  return (
    <section className="offer-card">
      <section className="header">
        <p>{offer.user}</p>

        <p>{date}</p>
      </section>

      <section className="main">
        <img
          className="image"
          src="/android-icon-36x36.png"
          alt={offer.title}
        />

        <ul className="offer-info">
          <li className="offer-title">
            <h2>{offer.title}</h2>
          </li>
          <li className="offer-price">
            <p>{offer.offer_price}</p>
            <p>{offer.price}</p>
          </li>
          <li>{offer.descrip}</li>
        </ul>
      </section>

      <section className="footer">
        <p>👍 : {offer.avgVotes}</p>

        <button className="button">
          <a href={offer.url}>Link oferta</a>
        </button>

        <section className="offer-buttons">
          <button className="button">fav</button>
          <button className="button">comnt</button>
        </section>
      </section>
    </section>
  );
};
