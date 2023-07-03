import "./PostOffer.css";

// Intl

import { FormattedMessage } from "react-intl";

// react

import { useState } from "react";

// Contexts

import { useAuth } from "../../contexts/AuthContext";
import { useShowLogin } from "../../contexts/ShowLoginContext";

// Fetchs

import { postOfferService } from "../../services/api";
import { PostOfferImage } from "../PostOfferImage/PostOfferImage";

export const PostOffer = () => {
  const [openPostOffer, setOpenPostOffer] = useState();
  const [openPostImage, setOpenPostImage] = useState();
  const [offerId, setOfferId] = useState();

  const { user, token } = useAuth();
  const [showLogin, setShowLogin] = useShowLogin();

  // Form states

  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [descrip, setDescrip] = useState("");
  const [offer_price, setOffer_price] = useState("");
  const [price, setPrice] = useState("");
  const [plataform, setPlataform] = useState("Playstation-5");
  const [offer_expiry, setOffer_expiry] = useState("");
  const [error, setError] = useState("");

  // Handle form

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      // Fetch
      const data = await postOfferService(
        { url, title, descrip, price, offer_price, plataform, offer_expiry },
        token
      );

      setOfferId(data.id);

      setOpenPostOffer(false);
      setOpenPostImage(!openPostImage);
    } catch (error) {
      setError(error.message);
    }
  };

  // Error messages

  error === `"url" length must be less than or equal to 280 characters long` &&
    setError();

  error === `"title" length must be less than or equal to 60 characters long` &&
    setError();

  error ===
    `"descrip" length must be less than or equal to 280 characters long` &&
    setError();

  error === `"offer_price" must be a positive number` && setError();

  error === `"price" must be a positive number` && setError();

  error === "La fecha de caducidad no puede ser anterior a hoy" && setError();

  return (
    <section className={`post-offer-body ${openPostOffer ? "show" : ""}`}>
      <section
        onClick={(e) => e.stopPropagation()}
        className={`post-offer ${openPostOffer ? "show" : ""}`}
      >
        <button
          onClick={() => setOpenPostOffer(false)}
          className="closed-button"
        >
          X
        </button>
        <form className="form" onSubmit={handleForm}>
          <fieldset>
            <label>
              <FormattedMessage id="link" />
            </label>
            <input
              placeholder="https://www.tupagina.com/"
              type="url"
              name="url"
              id="url"
              autoComplete="off"
              value={url}
              required
              onChange={(e) => setUrl(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <label>
              <FormattedMessage id="title" />
            </label>
            <input
              placeholder="Título"
              type="text"
              name="title"
              id="title"
              autoComplete="off"
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <label>
              <FormattedMessage id="description" />
            </label>
            <textarea
              placeholder="Escribe una breve descripción de la oferta..."
              type="text"
              name="descrip"
              id="descrip"
              autoComplete="off"
              value={descrip}
              onChange={(e) => setDescrip(e.target.value)}
            />
          </fieldset>

          <fieldset className="price-fieldset">
            <label>
              <FormattedMessage id="offerprice" />
            </label>
            <input
              placeholder="00.00 €"
              type="number"
              name="price"
              id="offer_price"
              autoComplete="off"
              value={offer_price}
              onChange={(e) => setOffer_price(e.target.value)}
            />

            <label>
              <FormattedMessage id="originalprice" />
            </label>
            <input
              placeholder="00.00 €"
              type="number"
              name="offer_price"
              id="price"
              autoComplete="off"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </fieldset>

          <fieldset className="last-fieldset">
            <label>
              <FormattedMessage id="platform" />
            </label>
            <select
              name="plataform"
              id="plataform"
              value={plataform}
              onChange={(e) => setPlataform(e.target.value)}
            >
              <option value="Playstation-5">Playstation 5</option>
              <option value="Playstation-4">Playstation 4</option>
              <option value="Xbox-One">Xbox One</option>
              <option value="Xbox-Series">Xbox Series</option>
              <option value="Nintendo-Switch">Nintendo Switch</option>
              <option value="PC-Gaming">PC Gaming</option>
            </select>

            <label>
              <FormattedMessage id="expiration-date" />
            </label>
            <input
              type="date"
              name="offer_expiry"
              id="offer_expiry"
              value={offer_expiry}
              required
              onChange={(e) => setOffer_expiry(e.target.value)}
            />
          </fieldset>

          {error ? <p className="error">⚠️ {error}</p> : null}

          <button className="button">
            <FormattedMessage id="continue" />
          </button>
        </form>
      </section>

      <button
        onClick={(e) => {
          e.stopPropagation();
          user ? setOpenPostOffer(!openPostOffer) : setShowLogin(!showLogin);
        }}
        className={`post-button ${openPostOffer ? "show" : ""}`}
        title="Subir una oferta"
      >
        ➕
      </button>

      <PostOfferImage
        offerId={offerId}
        openPostImage={openPostImage}
        setOpenPostImage={setOpenPostImage}
      />
    </section>
  );
};
