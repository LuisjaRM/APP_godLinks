import "./ModifyOfferCard.css";

// React

import { useState } from "react";
import { useNavigate } from "react-router";

// Contexts

import { useAuth } from "../../contexts/AuthContext";

// Fetchs

import {
  deleteOfferService,
  patchOfferService,
  postOfferImageService,
} from "../../services/api";

export const ModifyOfferCard = ({ refresh, offer }) => {
  // Date Logic

  const offerExpiry = new Date(offer.offer_expiry);
  const dateOffer_expiry = offerExpiry.toLocaleDateString("en-GB");

  const { user, token } = useAuth();

  // States of Forms

  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [descrip, setDescrip] = useState("");
  const [offer_price, setOffer_price] = useState("");
  const [price, setPrice] = useState("");
  const [plataform, setPlataform] = useState("");
  const [offer_expiry, setOffer_expiry] = useState("");
  const [, setError] = useState("");

  // States to hide

  const [hideFormImage, setHideFormImage] = useState(true);
  const [hideFormUrl, setHideFormUrl] = useState(true);
  const [hideFormTitle, setHideFormTitle] = useState(true);
  const [hideFormDescrip, setHideFormDescrip] = useState(true);
  const [hideFormOfferPrice, setHideFormOfferPrice] = useState(true);
  const [hideFormPrice, setHideFormPrice] = useState(true);
  const [hideFormPlataform, setHideFormPlataform] = useState(true);
  const [hideFormOfferExpiry, setHideFormOfferExpiry] = useState(true);

  // HandleForms

  const handleFormImage = async (e) => {
    e.preventDefault();
    try {
      await postOfferImageService(token, offer.id, image);
      setHideFormImage(!hideFormImage);
      refresh();
    } catch (error) {
      setError(error.message);
    }
  };

  const handleFormUrl = async (e) => {
    e.preventDefault();
    try {
      await patchOfferService(token, offer.id, { url });
      setHideFormUrl(!hideFormUrl);
      refresh();
    } catch (error) {
      setError(error.message);
    }
  };

  const handleFormTitle = async (e) => {
    e.preventDefault();
    try {
      await patchOfferService(token, offer.id, { title });
      setHideFormTitle(!hideFormTitle);
      refresh();
    } catch (error) {
      setError(error.message);
    }
  };

  const handleFormDescrip = async (e) => {
    e.preventDefault();
    try {
      await patchOfferService(token, offer.id, { descrip });
      setHideFormDescrip(!hideFormDescrip);
      refresh();
    } catch (error) {
      setError(error.message);
    }
  };

  const handleFormOfferPrice = async (e) => {
    e.preventDefault();
    try {
      await patchOfferService(token, offer.id, { offer_price });
      setHideFormOfferPrice(!hideFormOfferPrice);
      refresh();
    } catch (error) {
      setError(error.message);
    }
  };

  const handleFormPrice = async (e) => {
    e.preventDefault();
    try {
      await patchOfferService(token, offer.id, { price });
      setHideFormPrice(!hideFormPrice);
      refresh();
    } catch (error) {
      setError(error.message);
    }
  };

  const handleFormPlataform = async (e) => {
    e.preventDefault();
    try {
      await patchOfferService(token, offer.id, { plataform });
      setHideFormPlataform(!hideFormPlataform);
      refresh();
    } catch (error) {
      setError(error.message);
    }
  };

  const handleFormOfferExpiry = async (e) => {
    e.preventDefault();
    try {
      await patchOfferService(token, offer.id, { offer_expiry });
      setHideFormOfferExpiry(!hideFormOfferExpiry);
      refresh();
    } catch (error) {
      setError(error.message);
    }
  };

  // Delete Offer

  const navigate = useNavigate();

  const deleteOffer = async (e) => {
    e.preventDefault();
    try {
      await deleteOfferService(token, offer.id);

      navigate(`/userInfo/${user.id}`);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <ul className="modifyOffer-list">
      <li className="list-image">
        <img
          className={`offer-image ${hideFormImage ? "" : "hide"}`}
          src={
            offer.photo
              ? `${import.meta.env.VITE_BACKEND}uploads/${offer.photo}`
              : "/android-icon-36x36.png"
          }
          alt={offer.title}
        />

        <form
          className={`modifyOffer-image ${hideFormImage ? "hide" : ""}`}
          onSubmit={handleFormImage}
        >
          <fieldset className="fieldset">
            <input
              className="modify-image"
              type="file"
              name="image"
              id="modify-image"
              required
              onChange={(e) => setImage(e.target.files[0])}
            />
          </fieldset>
          <button>📷</button>
        </form>

        <button
          onClick={() => setHideFormImage(!hideFormImage)}
          className="edit-button"
        >
          ✏️
        </button>
      </li>

      <li className="list-element">
        <h2 className="element">Enlace:</h2>
        <section className="input-wrap">
          <p className={`input-element offer-url ${hideFormUrl ? "" : "hide"}`}>
            {offer.url}
          </p>

          <form
            className={`modifyOffer-url ${hideFormUrl ? "hide" : ""}`}
            onSubmit={handleFormUrl}
          >
            <fieldset className="fieldset">
              <input
                placeholder="https://www.tupagina.com/"
                className="input"
                type="url"
                name="url"
                id="modify-url"
                value={url}
                required
                onChange={(e) => setUrl(e.target.value)}
              />
            </fieldset>
            <button>✅</button>
          </form>

          <button
            onClick={() => setHideFormUrl(!hideFormUrl)}
            className="edit-button"
          >
            ✏️
          </button>
        </section>
      </li>

      <li className="list-element">
        <h2 className="element">Título:</h2>
        <section className="input-wrap">
          <p
            className={`input-element offer-title ${
              hideFormTitle ? "" : "hide"
            }`}
          >
            {offer.title}
          </p>

          <form
            className={`modifyOffer-title ${hideFormTitle ? "hide" : ""}`}
            onSubmit={handleFormTitle}
          >
            <fieldset className="fieldset">
              <input
                placeholder="Título"
                className="input"
                type="text"
                name="title"
                id="modify-title"
                value={title}
                required
                onChange={(e) => setTitle(e.target.value)}
              />
            </fieldset>
            <button>✅</button>
          </form>

          <button
            onClick={() => setHideFormTitle(!hideFormTitle)}
            className="edit-button"
          >
            ✏️
          </button>
        </section>
      </li>

      <li className="list-element">
        <h2 className="element">Descripción de la oferta:</h2>
        <section className="input-wrap">
          <p
            className={`input-element offer-descrip ${
              hideFormDescrip ? "" : "hide"
            }`}
          >
            {offer.descrip}
          </p>

          <form
            className={`modifyOffer-descrip ${hideFormDescrip ? "hide" : ""}`}
            onSubmit={handleFormDescrip}
          >
            <fieldset className="fieldset">
              <textarea
                placeholder="Escribe una breve descripción de la oferta..."
                className="input"
                type="text"
                name="descrip"
                id="modify-descrip"
                value={descrip}
                onChange={(e) => setDescrip(e.target.value)}
              />
            </fieldset>
            <button>✅</button>
          </form>

          <button
            onClick={() => setHideFormDescrip(!hideFormDescrip)}
            className="edit-button"
          >
            ✏️
          </button>
        </section>
      </li>

      <li className="list-element">
        <h2 className="element">Precio con descuento:</h2>
        <section className="input-wrap">
          <p
            className={`input-element offer-offerPrice ${
              hideFormOfferPrice ? "" : "hide"
            }`}
          >
            {offer.offer_price} €
          </p>

          <form
            className={`modifyOffer-offerPrice ${
              hideFormOfferPrice ? "hide" : ""
            }`}
            onSubmit={handleFormOfferPrice}
          >
            <fieldset className="fieldset">
              <input
                placeholder="00.00 €"
                className="input"
                type="number"
                name="price"
                id="modify-offer_price"
                value={offer_price}
                onChange={(e) => setOffer_price(e.target.value)}
              />
            </fieldset>
            <button>✅</button>
          </form>

          <button
            onClick={() => setHideFormOfferPrice(!hideFormOfferPrice)}
            className="edit-button"
          >
            ✏️
          </button>
        </section>
      </li>

      <li className="list-element">
        <h2 className="element">Precio sin descuento:</h2>
        <section className="input-wrap">
          <p
            className={`input-element offer-price ${
              hideFormPrice ? "" : "hide"
            }`}
          >
            {offer.price} €
          </p>

          <form
            className={`modifyOffer-price ${hideFormPrice ? "hide" : ""}`}
            onSubmit={handleFormPrice}
          >
            <fieldset className="fieldset">
              <input
                placeholder="00.00 €"
                className="input"
                type="number"
                name="offer_price"
                id="modify-price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </fieldset>
            <button>✅</button>
          </form>

          <button
            onClick={() => setHideFormPrice(!hideFormPrice)}
            className="edit-button"
          >
            ✏️
          </button>
        </section>
      </li>

      <li className="list-element">
        <h2 className="element">Plataforma:</h2>
        <section className="input-wrap">
          <p
            className={`input-element offer-plataform ${
              hideFormPlataform ? "" : "hide"
            }`}
          >
            {offer.plataform}
          </p>

          <form
            className={`modifyOffer-plataform ${
              hideFormPlataform ? "hide" : ""
            }`}
            onSubmit={handleFormPlataform}
          >
            <fieldset className="fieldset">
              <input
                placeholder="Plataforma"
                className="input"
                type="text"
                name="plataform"
                id="modify-plataform"
                value={plataform}
                onChange={(e) => setPlataform(e.target.value)}
              />
            </fieldset>
            <button>✅</button>
          </form>

          <button
            onClick={() => setHideFormPlataform(!hideFormPlataform)}
            className="edit-button"
          >
            ✏️
          </button>
        </section>
      </li>

      <li className="list-element">
        <h2 className="element">Caducidad de la oferta:</h2>
        <section className="input-wrap">
          <p
            className={`input-element offer-offerExpiry ${
              hideFormOfferExpiry ? "" : "hide"
            }`}
          >
            {dateOffer_expiry}
          </p>

          <form
            className={`modifyOffer-offerExpiry ${
              hideFormOfferExpiry ? "hide" : ""
            }`}
            onSubmit={handleFormOfferExpiry}
          >
            <fieldset className="fieldset">
              <input
                className="input"
                type="date"
                name="offer_expiry"
                id="modify-offer_expiry"
                value={offer_expiry}
                required
                onChange={(e) => setOffer_expiry(e.target.value)}
              />
            </fieldset>
            <button>✅</button>
          </form>

          <button
            onClick={() => setHideFormOfferExpiry(!hideFormOfferExpiry)}
            className="edit-button"
          >
            ✏️
          </button>
        </section>
      </li>

      <li className="list-delete">
        <button onClick={deleteOffer} className="delete-button">
          Borrar oferta
        </button>
      </li>
    </ul>
  );
};
