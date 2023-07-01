import "./ModifyOfferCard.css";

// Material

import { SvgIcon } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";

// React

import { useState } from "react";
import { useNavigate } from "react-router";

// Contexts

import { useAuth } from "../../contexts/AuthContext";
import { useError } from "../../contexts/ErrorContext";

// Fetchs

import {
  deleteOfferService,
  patchOfferService,
  postOfferImageService,
} from "../../services/api";

export const ModifyOfferCard = ({ refresh, offer }) => {
  const [error, setError] = useError();

  // Date Logic

  const offerExpiry = new Date(offer.offer_expiry);
  const offerExpiryDefault = offerExpiry.toISOString().slice(0, 10);
  const dateOffer_expiry = offerExpiry.toLocaleDateString("en-GB");

  const { user, token } = useAuth();

  // States of Forms

  const [image, setImage] = useState("");
  const [url, setUrl] = useState(offer.url);
  const [title, setTitle] = useState(offer.title);
  const [descrip, setDescrip] = useState(offer.descrip);
  const [offer_price, setOffer_price] = useState(offer.offer_price);
  const [price, setPrice] = useState(offer.price);
  const [plataform, setPlataform] = useState(offer.plataform);
  const [offer_expiry, setOffer_expiry] = useState("");

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

  const [fieldChanged, setFieldChanged] = useState("");

  const handleFormImage = async (e) => {
    e.preventDefault();
    setShowConfirmModal(!showConfirmModal);
    setFieldChanged("image");
  };

  const handleFormUrl = async (e) => {
    e.preventDefault();
    setShowConfirmModal(!showConfirmModal);
    setFieldChanged("url");
  };

  const handleFormTitle = async (e) => {
    e.preventDefault();
    setShowConfirmModal(!showConfirmModal);
    setFieldChanged("title");
  };

  const handleFormDescrip = async (e) => {
    e.preventDefault();
    setShowConfirmModal(!showConfirmModal);
    setFieldChanged("descrip");
  };

  const handleFormOfferPrice = async (e) => {
    e.preventDefault();
    setShowConfirmModal(!showConfirmModal);
    setFieldChanged("offer_price");
  };

  const handleFormPrice = async (e) => {
    e.preventDefault();
    setShowConfirmModal(!showConfirmModal);
    setFieldChanged("price");
  };

  const handleFormPlataform = async (e) => {
    e.preventDefault();
    setShowConfirmModal(!showConfirmModal);
    setFieldChanged("plataform");
  };

  const handleFormOfferExpiry = async (e) => {
    e.preventDefault();
    setShowConfirmModal(!showConfirmModal);
    setFieldChanged("offer_expiry");
  };

  // Confirm Modal

  const [showConfirmModal, setShowConfirmModal] = useState();

  // Change Made Modal

  const [showChangeMadeModal, setShowChangeMadeModal] = useState();

  // Handles Click

  const handleClickConfirm = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowConfirmModal(!showConfirmModal);

    fieldChanged === "image" && changeImage();
    fieldChanged === "url" && changeUrl();
    fieldChanged === "title" && changeTitle();
    fieldChanged === "descrip" && changeDescrip();
    fieldChanged === "offer_price" && changeOfferPrice();
    fieldChanged === "price" && changePrice();
    fieldChanged === "plataform" && changePlataform();
    fieldChanged === "offer_expiry" && changeOfferExpiry();
    clickDelete && deleteOffer();
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
    setUrl(offer.url);
    setTitle(offer.title);
    setDescrip(offer.descrip);
    setOffer_price(offer.offer_price);
    setPrice(offer.price);
    setPlataform(offer.plataform);
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
    setUrl(offer.url);
    setTitle(offer.title);
    setDescrip(offer.descrip);
    setOffer_price(offer.offer_price);
    setPrice(offer.price);
    setPlataform(offer.plataform);
    setOffer_expiry("");
    setClickDelete(false);
  };

  // Patchs Functions

  // Edit image

  const changeImage = async () => {
    try {
      // Fetch
      await postOfferImageService(token, offer.id, image);
      setImage(image);
      setHideFormImage(!hideFormImage);

      setShowChangeMadeModal(!showChangeMadeModal);
      setTimeout(() => {
        setShowChangeMadeModal(!showChangeMadeModal);
        refresh();
      }, 1500);
    } catch (error) {
      setError(error.message);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  // Edit url

  const changeUrl = async () => {
    try {
      // Fetch
      await patchOfferService(token, offer.id, { url });
      setUrl(url);
      setHideFormUrl(!hideFormUrl);

      setShowChangeMadeModal(!showChangeMadeModal);
      setTimeout(() => {
        setShowChangeMadeModal(!showChangeMadeModal);
        refresh();
      }, 1500);
    } catch (error) {
      setError(error.message);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  // Edit title

  const changeTitle = async () => {
    try {
      // Fetch
      await patchOfferService(token, offer.id, { title });
      setTitle(title);
      setHideFormTitle(!hideFormTitle);

      setShowChangeMadeModal(!showChangeMadeModal);
      setTimeout(() => {
        setShowChangeMadeModal(!showChangeMadeModal);
        refresh();
      }, 1500);
    } catch (error) {
      setError(error.message);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  // Edit description

  const changeDescrip = async () => {
    try {
      // Fetch
      await patchOfferService(token, offer.id, { descrip });
      setDescrip(descrip);
      setHideFormDescrip(!hideFormDescrip);

      setShowChangeMadeModal(!showChangeMadeModal);
      setTimeout(() => {
        setShowChangeMadeModal(!showChangeMadeModal);
        refresh();
      }, 1500);
    } catch (error) {
      setError(error.message);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  // Edit offer price

  const changeOfferPrice = async () => {
    try {
      // Fetch
      await patchOfferService(token, offer.id, { offer_price });
      setOffer_price(offer_price);
      setHideFormOfferPrice(!hideFormOfferPrice);

      setShowChangeMadeModal(!showChangeMadeModal);
      setTimeout(() => {
        setShowChangeMadeModal(!showChangeMadeModal);
        refresh();
      }, 1500);
    } catch (error) {
      setError(error.message);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  // Edit original price

  const changePrice = async () => {
    try {
      // Fetch
      await patchOfferService(token, offer.id, { price });
      setPrice(price);
      setHideFormPrice(!hideFormPrice);

      setShowChangeMadeModal(!showChangeMadeModal);
      setTimeout(() => {
        setShowChangeMadeModal(!showChangeMadeModal);
        refresh();
      }, 1500);
    } catch (error) {
      setError(error.message);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  // Edit plataform

  const changePlataform = async () => {
    try {
      // Fetch
      await patchOfferService(token, offer.id, { plataform });
      setPlataform(plataform);
      setHideFormPlataform(!hideFormPlataform);

      setShowChangeMadeModal(!showChangeMadeModal);
      setTimeout(() => {
        setShowChangeMadeModal(!showChangeMadeModal);
        refresh();
      }, 1500);
    } catch (error) {
      setError(error.message);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  // Edit offer expiry

  const changeOfferExpiry = async () => {
    try {
      // Fetch
      await patchOfferService(token, offer.id, { offer_expiry });
      setOffer_expiry(offerExpiryDefault);
      setHideFormOfferExpiry(!hideFormOfferExpiry);

      setShowChangeMadeModal(!showChangeMadeModal);
      setTimeout(() => {
        setShowChangeMadeModal(!showChangeMadeModal);
        refresh();
      }, 1500);
    } catch (error) {
      setError(error.message);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
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
      // Fetch
      await deleteOfferService(token, offer.id);

      setShowChangeMadeModal(!showChangeMadeModal);
      setTimeout(() => {
        setShowChangeMadeModal(!showChangeMadeModal);
        navigate(`/userInfo/${user.id}`);
      }, 1500);
    } catch (error) {
      setError(error.message);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <>
      <ul className="modify-offer-card">
        <li className="image-li">
          <img
            className={`modify-image ${hideFormImage ? "" : "hide"}`}
            src={
              offer.photo
                ? `${import.meta.env.VITE_BACKEND}uploads/${offer.photo}`
                : "/default-image.webp"
            }
            alt={offer.title}
          />

          <form
            className={`form ${hideFormImage ? "hide" : ""}`}
            onSubmit={handleFormImage}
          >
            <fieldset className="modify-image-fieldset">
              <label className="modify-image-label">
                <input
                  className="modify-image-input"
                  type="file"
                  name="modify-image"
                  id="modify-image"
                  required
                  onChange={(e) => setImage(e.target.files[0])}
                />

                <SvgIcon
                  className="post-image-icon"
                  component={ImageSearchIcon}
                  inheritViewBox
                />
              </label>
            </fieldset>

            <button className="modify-image-button">
              <SvgIcon
                className="post-offer-icon"
                component={AddToPhotosIcon}
                inheritViewBox
              />
            </button>
          </form>

          <button
            onClick={() => setHideFormImage(!hideFormImage)}
            className={`edit-button edit-image`}
          >
            <SvgIcon
              className="edit-icon"
              component={EditIcon}
              inheritViewBox
            />
          </button>
        </li>

        <li>{error ? <p className="error">⚠️ {error}</p> : null}</li>

        <li className="field">
          <section className="field-header">
            <h2 className="field-title">Enlace:</h2>

            <button
              onClick={() => setHideFormUrl(!hideFormUrl)}
              className="edit-button"
            >
              <SvgIcon
                className="edit-icon"
                component={EditIcon}
                inheritViewBox
              />
            </button>
          </section>

          <p className={`input-element offer-url ${hideFormUrl ? "" : "hide"}`}>
            {offer.url}
          </p>

          <form
            className={`form ${hideFormUrl ? "hide" : ""}`}
            onSubmit={handleFormUrl}
          >
            <fieldset className="modify-fieldset">
              <input
                className="modify-input"
                type="url"
                name="modify-url"
                id="modify-url"
                autoComplete="off"
                value={url}
                required
                onChange={(e) => setUrl(e.target.value)}
              />

              <button className="send-modify-button">
                <SvgIcon
                  className="send-modify-icon"
                  component={SendIcon}
                  inheritViewBox
                />
              </button>
            </fieldset>
          </form>
        </li>

        <li className="field">
          <section className="field-header">
            <h2 className="field-title">Título:</h2>

            <button
              onClick={() => setHideFormTitle(!hideFormTitle)}
              className="edit-button"
            >
              <SvgIcon
                className="edit-icon"
                component={EditIcon}
                inheritViewBox
              />
            </button>
          </section>

          <p
            className={`input-element offer-title ${
              hideFormTitle ? "" : "hide"
            }`}
          >
            {offer.title}
          </p>

          <form
            className={`form ${hideFormTitle ? "hide" : ""}`}
            onSubmit={handleFormTitle}
          >
            <fieldset className="modify-fieldset">
              <input
                className="modify-input"
                type="text"
                name="title"
                id="modify-title"
                autoComplete="off"
                value={title}
                required
                onChange={(e) => setTitle(e.target.value)}
              />

              <button className="send-modify-button">
                <SvgIcon
                  className="send-modify-icon"
                  component={SendIcon}
                  inheritViewBox
                />
              </button>
            </fieldset>
          </form>
        </li>

        <li className="field">
          <section className="field-header">
            <h2 className="field-title">Descripción:</h2>

            <button
              onClick={() => setHideFormDescrip(!hideFormDescrip)}
              className="edit-button"
            >
              <SvgIcon
                className="edit-icon"
                component={EditIcon}
                inheritViewBox
              />
            </button>
          </section>

          <p
            className={`input-element offer-descrip ${
              hideFormDescrip ? "" : "hide"
            }`}
          >
            {offer.descrip}
          </p>

          <form
            className={`form ${hideFormDescrip ? "hide" : ""}`}
            onSubmit={handleFormDescrip}
          >
            <fieldset className="modify-fieldset">
              <input
                className="modify-input"
                type="text"
                name="descrip"
                id="modify-descrip"
                autoComplete="off"
                value={descrip}
                onChange={(e) => setDescrip(e.target.value)}
              />

              <button className="send-modify-button">
                <SvgIcon
                  className="send-modify-icon"
                  component={SendIcon}
                  inheritViewBox
                />
              </button>
            </fieldset>
          </form>
        </li>

        <li className="field">
          <section className="field-header">
            <h2 className="field-title">Precio de la oferta:</h2>

            <button
              onClick={() => setHideFormOfferPrice(!hideFormOfferPrice)}
              className="edit-button"
            >
              <SvgIcon
                className="edit-icon"
                component={EditIcon}
                inheritViewBox
              />
            </button>
          </section>

          <p
            className={`input-element offer-offerPrice ${
              hideFormOfferPrice ? "" : "hide"
            }`}
          >
            {offer.offer_price} €
          </p>

          <form
            className={`form ${hideFormOfferPrice ? "hide" : ""}`}
            onSubmit={handleFormOfferPrice}
          >
            <fieldset className="modify-fieldset">
              <input
                className="modify-input"
                type="number"
                name="price"
                id="modify-offer_price"
                autoComplete="off"
                value={offer_price}
                onChange={(e) => setOffer_price(e.target.value)}
              />

              <button className="send-modify-button">
                <SvgIcon
                  className="send-modify-icon"
                  component={SendIcon}
                  inheritViewBox
                />
              </button>
            </fieldset>
          </form>
        </li>

        <li className="field">
          <section className="field-header">
            <h2 className="field-title">Precio original:</h2>

            <button
              onClick={() => setHideFormPrice(!hideFormPrice)}
              className="edit-button"
            >
              <SvgIcon
                className="edit-icon"
                component={EditIcon}
                inheritViewBox
              />
            </button>
          </section>

          <p
            className={`input-element offer-price ${
              hideFormPrice ? "" : "hide"
            }`}
          >
            {offer.price} €
          </p>

          <form
            className={`form ${hideFormPrice ? "hide" : ""}`}
            onSubmit={handleFormPrice}
          >
            <fieldset className="modify-fieldset">
              <input
                className="modify-input"
                type="number"
                name="offer_price"
                id="modify-price"
                autoComplete="off"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />

              <button className="send-modify-button">
                <SvgIcon
                  className="send-modify-icon"
                  component={SendIcon}
                  inheritViewBox
                />
              </button>
            </fieldset>
          </form>
        </li>

        <li className="field">
          <section className="field-header">
            <h2 className="field-title">Plataforma:</h2>

            <button
              onClick={() => setHideFormPlataform(!hideFormPlataform)}
              className="edit-button"
            >
              <SvgIcon
                className="edit-icon"
                component={EditIcon}
                inheritViewBox
              />
            </button>
          </section>

          <p
            className={`input-element offer-plataform ${
              hideFormPlataform ? "" : "hide"
            }`}
          >
            {offer.plataform}
          </p>

          <form
            className={`form ${hideFormPlataform ? "hide" : ""}`}
            onSubmit={handleFormPlataform}
          >
            <fieldset className="modify-fieldset">
              <input
                className="modify-input"
                type="text"
                name="plataform"
                id="modify-plataform"
                autoComplete="off"
                value={plataform}
                onChange={(e) => setPlataform(e.target.value)}
              />

              <button className="send-modify-button">
                <SvgIcon
                  className="send-modify-icon"
                  component={SendIcon}
                  inheritViewBox
                />
              </button>
            </fieldset>
          </form>
        </li>

        <li className="field">
          <section className="field-header">
            <h2 className="element">Caducidad:</h2>

            <button
              onClick={() => setHideFormOfferExpiry(!hideFormOfferExpiry)}
              className="edit-button"
            >
              <SvgIcon
                className="edit-icon"
                component={EditIcon}
                inheritViewBox
              />
            </button>
          </section>

          <p
            className={`input-element offer-offerExpiry ${
              hideFormOfferExpiry ? "" : "hide"
            }`}
          >
            {dateOffer_expiry}
          </p>

          <form
            className={`form ${hideFormOfferExpiry ? "hide" : ""}`}
            onSubmit={handleFormOfferExpiry}
          >
            <fieldset className="modify-fieldset">
              <input
                className="modify-input"
                type="date"
                name="offer_expiry"
                id="modify-offer_expiry"
                autoComplete="off"
                value={offer_expiry}
                required
                onChange={(e) => setOffer_expiry(e.target.value)}
              />

              <button className="send-modify-button date">
                <SvgIcon
                  className="send-modify-icon"
                  component={SendIcon}
                  inheritViewBox
                />
              </button>
            </fieldset>
          </form>
        </li>

        <li>
          <button onClick={handleClickDelete} className="delete-button">
            <p>Borrar oferta</p>

            <SvgIcon
              className="delete-offer-icon"
              component={DeleteIcon}
              inheritViewBox
            />
          </button>
        </li>
      </ul>

      {showConfirmModal ? (
        <section className="modal-back dark" onClick={handleClickAway}>
          <section className="modal-body little">
            <h2>
              ¿Estás seguro de que quieres
              {clickDelete ? " borrar" : " modificar"} esta oferta?
            </h2>
            <section className="buttons">
              <button className="button" onClick={handleClickConfirm}>
                Sí
              </button>
              <button className="button" onClick={handleClickCancel}>
                No
              </button>
            </section>
          </section>
        </section>
      ) : (
        ""
      )}
      {showChangeMadeModal ? (
        <section className="modal-back dark">
          <section className="modal-body little">
            {fieldChanged === "image" && (
              <h3>La imagen se ha modificado con éxito </h3>
            )}
            {fieldChanged === "url" && (
              <h3>El enlace se ha modificado con éxito</h3>
            )}
            {fieldChanged === "title" && (
              <h3>El título se ha modificado con éxito</h3>
            )}
            {fieldChanged === "descrip" && (
              <h3>La descripción se ha modificado con éxito</h3>
            )}
            {fieldChanged === "offer_price" && (
              <h3>El precio de la oferta se ha modificado con éxito</h3>
            )}
            {fieldChanged === "price" && (
              <h3>El precio original se ha modificado con éxito</h3>
            )}
            {fieldChanged === "plataform" && (
              <h3>La plataforma se ha modificado con éxito</h3>
            )}
            {fieldChanged === "offer_expiry" && (
              <h3>La caducidad de la oferta se ha modificado con éxito</h3>
            )}
            {clickDelete && <h3>Tu oferta se ha eliminado con éxito</h3>}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="50"
              width="50"
              viewBox="0 0 118.43873 118.43873"
            >
              <path
                className="check"
                strokeLinejoin="round"
                d="M34.682 60.352l15.61 15.61 33.464-33.464"
                stroke="#08b237"
                strokeLinecap="round"
                strokeWidth="4.3"
                fill="none"
              />
              <circle
                className="circle"
                strokeLinejoin="round"
                cx="59.219"
                strokeLinecap="round"
                stroke="#08b237"
                cy="59.219"
                r="57.069"
                strokeWidth="4.3"
                fill="none"
              />
            </svg>
          </section>
        </section>
      ) : (
        ""
      )}
    </>
  );
};
