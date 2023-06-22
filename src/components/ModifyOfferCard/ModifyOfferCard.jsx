import "./ModifyOfferCard.css";

// React

import { useState } from "react";

// Contexts

import { useAuth } from "../../contexts/AuthContext";

// Fetchs

import { postOfferImageService } from "../../services/api";

export const ModifyOfferCard = ({ refresh, offer }) => {
  // Date Logic

  const offer_expiry = new Date(offer.offer_expiry);
  const dateOffer_expiry = offer_expiry.toLocaleDateString("en-GB");

  const { token } = useAuth();

  // States of Forms

  const [image, setImage] = useState("");
  const [, setError] = useState("");

  // States to hide

  const [hideFormImage, setHideFormImage] = useState(true);

  // handle edit avatar

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

  return (
    <ul className="modifyOffer-list">
      <li className="list-image">
        <img
          className={`image ${hideFormImage ? "" : "hide"}`}
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
          <p className="input-element">{offer.url}</p>
          <button className="edit-button">✏️</button>
        </section>
      </li>
      <li className="list-element">
        <h2 className="element">Título:</h2>
        <section className="input-wrap">
          <p className="input-element">{offer.title}</p>
          <button className="edit-button">✏️</button>
        </section>
      </li>
      <li className="list-element">
        <h2 className="element">Descripción de la oferta:</h2>
        <section className="input-wrap">
          <p className="input-element">{offer.descrip}</p>
          <button className="edit-button">✏️</button>
        </section>
      </li>
      <li className="list-element">
        <h2 className="element">Precio con descuento:</h2>
        <section className="input-wrap">
          <p className="input-element">{offer.offer_price} €</p>
          <button className="edit-button">✏️</button>
        </section>
      </li>
      <li className="list-element">
        <h2 className="element">Precio sin descuento:</h2>
        <section className="input-wrap">
          <p className="input-element">{offer.price} €</p>
          <button className="edit-button">✏️</button>
        </section>
      </li>
      <li className="list-element">
        <h2 className="element">Plataforma:</h2>
        <section className="input-wrap">
          <p className="input-element">{offer.plataform}</p>
          <button className="edit-button">✏️</button>
        </section>
      </li>
      <li className="list-element">
        <h2 className="element">Caducidad de la oferta:</h2>
        <section className="input-wrap">
          <p className="input-element">{dateOffer_expiry}</p>
          <button className="edit-button">✏️</button>
        </section>
      </li>

      <li className="list-delete">
        <button className="delete-button">Borrar oferta</button>
      </li>
    </ul>
  );
};
