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
  const [plataform, setPlataform] = useState("");
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
            <label>Enlace:</label>
            <input
              placeholder="https://www.tupagina.com/"
              type="url"
              name="url"
              id="url"
              value={url}
              required
              onChange={(e) => setUrl(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <label>Título:</label>
            <input
              placeholder="Título"
              type="text"
              name="title"
              id="title"
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <label>Descripción de la oferta:</label>
            <textarea
              placeholder="Escribe una breve descripción de la oferta..."
              type="text"
              name="descrip"
              id="descrip"
              value={descrip}
              onChange={(e) => setDescrip(e.target.value)}
            />
          </fieldset>

          <fieldset className="price-fieldset">
            <label>Precio con descuento:</label>
            <input
              placeholder="00.00 €"
              type="number"
              name="price"
              id="offer_price"
              value={offer_price}
              onChange={(e) => setOffer_price(e.target.value)}
            />
            <label>Precio sin descuento:</label>
            <input
              placeholder="00.00 €"
              type="number"
              name="offer_price"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </fieldset>

          <fieldset className="last-fieldset">
            <label>Plataforma:</label>
            <input
              placeholder="Plataforma"
              type="text"
              name="plataform"
              id="plataform"
              value={plataform}
              onChange={(e) => setPlataform(e.target.value)}
            />

            <label>Caducidad de la oferta:</label>
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

          <button className="button">Continuar</button>
        </form>
      </section>

      <button
        onClick={(e) => {
          e.stopPropagation();
          user ? setOpenPostOffer(!openPostOffer) : setShowLogin(!showLogin);
        }}
        className={`post-button ${openPostOffer ? "show" : ""}`}
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
