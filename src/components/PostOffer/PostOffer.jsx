import "./PostOffer.css";

// react

import { useState } from "react";

// Contexts

import { useShow } from "../../contexts/ShowContext";
import { useAuth } from "../../contexts/AuthContext";

// Fetchs

import { postOfferService } from "../../services/api";
import { PostOfferImage } from "../PostOfferImage/PostOfferImage";

export const PostOffer = () => {
  const [open, setOpen] = useState();
  const [openImage, setOpenImage] = useState();
  const [offerId, setOfferId] = useState();
  const { user, token } = useAuth();
  const [show, setShow] = useShow();

  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [descrip, setDescrip] = useState("");
  const [price, setPrice] = useState("");
  const [offer_price, setOffer_price] = useState("");
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

      setOpen(false);
      setOpenImage(!openImage);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section
      onClick={() => setOpen(false)}
      className={`postOffer-body ${open ? "show" : ""}`}
    >
      <section
        onClick={(e) => e.stopPropagation()}
        className={`postOffer ${open ? "show" : ""}`}
      >
        <form className="post-form" onSubmit={handleForm}>
          <fieldset className="fieldset">
            <label className="label">Enlace:</label>
            <input
              placeholder="https://www.tupagina.com/"
              className="url"
              type="url"
              name="url"
              id="url"
              value={url}
              required
              onChange={(e) => setUrl(e.target.value)}
            />
          </fieldset>

          <fieldset className="fieldset">
            <label className="label">Title:</label>
            <input
              placeholder="Title"
              className="title"
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
              className="descrip"
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
              className="price"
              type="number"
              name="price"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </fieldset>

          <fieldset className="fieldset">
            <label className="label">Precio sin descuento:</label>
            <input
              className="price"
              type="number"
              name="offer_price"
              id="offer_price"
              value={offer_price}
              onChange={(e) => setOffer_price(e.target.value)}
            />
          </fieldset>

          <fieldset className="fieldset">
            <label className="label">Plataforma:</label>
            <input
              className="plataform"
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
              className="offer_expiry"
              type="date"
              name="offer_expiry"
              id="offer_expiry"
              value={offer_expiry}
              required
              onChange={(e) => setOffer_expiry(e.target.value)}
            />
          </fieldset>

          <button className="button">Continuar</button>
          {error ? <p className="error">{error}</p> : null}
        </form>
      </section>

      <button
        onClick={(e) => {
          e.stopPropagation();
          user ? setOpen(!open) : setShow(!show);
        }}
        className={`postOffer-button ${open ? "show" : ""}`}
      >
        ➕
      </button>

      <PostOfferImage
        offerId={offerId}
        openImage={openImage}
        setOpenImage={setOpenImage}
      />
    </section>
  );
};
