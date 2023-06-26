import "./PostOffer.css";

// react

import { useState } from "react";

// Contexts

import { useAuth } from "../../contexts/AuthContext";
import { useShowLogin } from "../../contexts/ShowLoginContext";

// Fetchs

import { postOfferService } from "../../services/api";
import { PostOfferImage } from "../PostOfferImage/PostOfferImage";

export const PostOffer = () => {
  const { user, token } = useAuth();
  const [showLogin, setShowLogin] = useShowLogin();

  const [openPostOffer, setOpenPostOffer] = useState();
  const [openPostImage, setOpenPostImage] = useState();
  const [offerId, setOfferId] = useState();

  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [descrip, setDescrip] = useState("");
  const [offer_price, setOffer_price] = useState("");
  const [price, setPrice] = useState("");
  const [plataform, setPlataform] = useState("");
  const [offer_expiry, setOffer_expiry] = useState("");
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();

    try {
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

  return (
    <section className={`postOffer-body ${openPostOffer ? "show" : ""}`}>
      <section
        onClick={(e) => e.stopPropagation()}
        className={`postOffer ${openPostOffer ? "show" : ""}`}
      >
        <button
          onClick={() => setOpenPostOffer(false)}
          className="closed-button"
        >
          X
        </button>
        <form className="post-form" onSubmit={handleForm}>
          <fieldset className="fieldset">
            <label className="label">Enlace:</label>
            <input
              placeholder="https://www.tupagina.com/"
              className="input"
              type="url"
              name="url"
              id="url"
              value={url}
              required
              onChange={(e) => setUrl(e.target.value)}
            />
          </fieldset>

          <fieldset className="fieldset">
            <label className="label">Título:</label>
            <input
              placeholder="Título"
              className="input"
              type="text"
              name="title"
              id="title"
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
            />
          </fieldset>

          <fieldset className="fieldset">
            <label className="label">Descripción de la oferta:</label>
            <textarea
              placeholder="Escribe una breve descripción de la oferta..."
              className="input"
              type="text"
              name="descrip"
              id="descrip"
              value={descrip}
              onChange={(e) => setDescrip(e.target.value)}
            />
          </fieldset>

          <fieldset className="fieldset">
            <label className="label">Precio con descuento:</label>
            <input
              placeholder="00.00 €"
              className="input"
              type="number"
              name="price"
              id="offer_price"
              value={offer_price}
              onChange={(e) => setOffer_price(e.target.value)}
            />
          </fieldset>

          <fieldset className="fieldset">
            <label className="label">Precio sin descuento:</label>
            <input
              placeholder="00.00 €"
              className="input"
              type="number"
              name="offer_price"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </fieldset>

          <fieldset className="fieldset">
            <label className="label">Plataforma:</label>
            <input
              placeholder="Plataforma"
              className="input"
              type="text"
              name="plataform"
              id="plataform"
              value={plataform}
              onChange={(e) => setPlataform(e.target.value)}
            />
          </fieldset>

          <fieldset className="fieldset">
            <label className="label">Caducidad de la oferta:</label>
            <input
              className="input"
              type="date"
              name="offer_expiry"
              id="offer_expiry"
              value={offer_expiry}
              required
              onChange={(e) => setOffer_expiry(e.target.value)}
            />
          </fieldset>

          {error ? <p className="error">⚠️ {error}</p> : null}
          <section className="button-wrap">
            <button className="button">Continuar</button>
          </section>
        </form>
      </section>

      <button
        onClick={(e) => {
          e.stopPropagation();
          user ? setOpenPostOffer(!openPostOffer) : setShowLogin(!showLogin);
        }}
        className={`postOffer-button ${openPostOffer ? "show" : ""}`}
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
