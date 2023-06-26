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

  // HandleForm

  const handleForm = async (e) => {
    e.preventDefault();
    setShowConfirmModal(!showConfirmModal);
  };

  // Confirm Modal

  const [showConfirmModal, setShowConfirmModal] = useState();

  const handleClickConfirm = (e) => {
    e.stopPropagation();
    setShowConfirmModal(!showConfirmModal);
    image ? changeImage() : "";
    url ? changeUrl() : "";
    title ? changeTitle() : "";
    descrip ? changeDescrip() : "";
    offer_price ? changeOfferPrice() : "";
    price ? changePrice() : "";
    plataform ? changePlataform() : "";
    offer_expiry ? changeOfferExpiry() : "";
    clickDelete ? deleteOffer() : "";
  };

  const handleClickCancel = (e) => {
    e.stopPropagation();
    setShowConfirmModal(!showConfirmModal);
    setHideFormImage(true);
    setHideFormUrl(true);
    setHideFormTitle(true);
    setHideFormDescrip(true);
    setHideFormOfferPrice(true);
    setHideFormPrice(true);
    setHideFormPlataform(true);
    setHideFormOfferExpiry(true);
    setImage("");
    setUrl("");
    setTitle("");
    setDescrip("");
    setOffer_price("");
    setPrice("");
    setPlataform("");
    setOffer_expiry("");
    setClickDelete(false);
  };

  const handleClickAway = () => {
    setShowConfirmModal(!showConfirmModal);
    setHideFormImage(true);
    setHideFormUrl(true);
    setHideFormTitle(true);
    setHideFormDescrip(true);
    setHideFormOfferPrice(true);
    setHideFormPrice(true);
    setHideFormPlataform(true);
    setHideFormOfferExpiry(true);
    setImage("");
    setUrl("");
    setTitle("");
    setDescrip("");
    setOffer_price("");
    setPrice("");
    setPlataform("");
    setOffer_expiry("");
    setClickDelete(false);
  };

  // Patcs Functions

  const changeImage = async () => {
    try {
      await postOfferImageService(token, offer.id, image);
      setHideFormImage(!hideFormImage);
      refresh();
    } catch (error) {
      setError(error.message);
    }
    setImage("");
  };

  const changeUrl = async () => {
    try {
      await patchOfferService(token, offer.id, { url });
      setHideFormUrl(!hideFormUrl);
      refresh();
    } catch (error) {
      setError(error.message);
    }
    setUrl("");
  };
  const changeTitle = async () => {
    try {
      await patchOfferService(token, offer.id, { title });
      setHideFormTitle(!hideFormTitle);
      refresh();
    } catch (error) {
      setError(error.message);
    }
    setTitle("");
  };
  const changeDescrip = async () => {
    try {
      await patchOfferService(token, offer.id, { descrip });
      setHideFormDescrip(!hideFormDescrip);
      refresh();
    } catch (error) {
      setError(error.message);
    }
    setDescrip("");
  };
  const changeOfferPrice = async () => {
    try {
      await patchOfferService(token, offer.id, { offer_price });
      setHideFormOfferPrice(!hideFormOfferPrice);
      refresh();
    } catch (error) {
      setError(error.message);
    }
    setOffer_price("");
  };
  const changePrice = async () => {
    try {
      await patchOfferService(token, offer.id, { price });
      setHideFormPrice(!hideFormPrice);
      refresh();
    } catch (error) {
      setError(error.message);
    }
    setPrice("");
  };
  const changePlataform = async () => {
    try {
      await patchOfferService(token, offer.id, { plataform });
      setHideFormPlataform(!hideFormPlataform);
      refresh();
    } catch (error) {
      setError(error.message);
    }
    setPlataform("");
  };
  const changeOfferExpiry = async () => {
    try {
      await patchOfferService(token, offer.id, { offer_expiry });
      setHideFormOfferExpiry(!hideFormOfferExpiry);
      refresh();
    } catch (error) {
      setError(error.message);
    }
    setOffer_expiry("");
  };

  // Delete Offer

  const [clickDelete, setClickDelete] = useState(false);

  const navigate = useNavigate();

  const handleClickDelete = (e) => {
    e.preventDefault();
    setClickDelete(!clickDelete);
    setShowConfirmModal(!showConfirmModal);
  };

  const deleteOffer = async () => {
    try {
      await deleteOfferService(token, offer.id);

      navigate(`/userInfo/${user.id}`);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
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
            onSubmit={handleForm}
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
            <p
              className={`input-element offer-url ${hideFormUrl ? "" : "hide"}`}
            >
              {offer.url}
            </p>

            <form
              className={`modifyOffer-url ${hideFormUrl ? "hide" : ""}`}
              onSubmit={handleForm}
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
              onSubmit={handleForm}
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
              onSubmit={handleForm}
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
              onSubmit={handleForm}
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
              onSubmit={handleForm}
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
              onSubmit={handleForm}
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
              onSubmit={handleForm}
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
              <button>✅</button>handleClickCancel
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
          <button onClick={handleClickDelete} className="delete-button">
            Borrar oferta
          </button>
        </li>
      </ul>

      {showConfirmModal ? (
        <section className="confirmModal" onClick={handleClickAway}>
          <section className="confirmModal-body">
            <h2>
              ¿Estás seguro de que quieres
              {clickDelete ? " borrar" : " modificar"} esta oferta?
            </h2>
            <section className="buttons">
              <button className="confirm-button" onClick={handleClickConfirm}>
                Sí
              </button>
              <button className="confirm-button" onClick={handleClickCancel}>
                No
              </button>
            </section>
          </section>
        </section>
      ) : (
        ""
      )}
    </>
  );
};
