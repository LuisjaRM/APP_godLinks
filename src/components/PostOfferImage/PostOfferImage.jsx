import "./PostOfferImage.css";

// react

import { useState } from "react";
import { useNavigate } from "react-router";

// Contexts

import { useAuth } from "../../contexts/AuthContext";

// Fetchs

import { postOfferImageService } from "../../services/api";

export const PostOfferImage = ({ offerId, openImage, setOpenImage }) => {
  const { token } = useAuth();

  const navigate = useNavigate();

  const [image, setImage] = useState("");
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      await postOfferImageService(token, offerId, image);

      setOpenImage(!openImage);
      navigate("/allOffers");
    } catch (error) {
      setError(error.message);
    }
  };

  // Get patch of window location

  const windowLocation = window.location.href.slice(21);

  return (
    <section className={`postOffer-body ${openImage ? "show" : ""}`}>
      <section
        onClick={(e) => e.stopPropagation()}
        className={`postOffer ${openImage ? "show" : ""}`}
      >
        <form className="post-form" onSubmit={handleForm}>
          <fieldset className="fieldset">
            <label className="label">📷</label>
            <input
              className="input-image"
              type="file"
              name="input-image"
              id="input-image"
              value={image}
              required
              onChange={(e) => setImage(e.target.files[0])}
            />
          </fieldset>

          <button className="button">Continuar</button>
          {error ? <p className="error">{error}</p> : null}
        </form>

        <button
          className="button"
          onClick={() => {
            setOpenImage(!openImage);
            windowLocation === "/allOffers"
              ? navigate("/")
              : navigate("/allOffers");
          }}
        >
          Subir la oferta sin imagen
        </button>
      </section>
    </section>
  );
};
