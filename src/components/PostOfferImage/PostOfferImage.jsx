import "./PostOfferImage.css";

// react

import { useState } from "react";
import { useNavigate } from "react-router";

// Contexts

import { useAuth } from "../../contexts/AuthContext";

// Fetchs

import { postOfferImageService } from "../../services/api";

export const PostOfferImage = ({
  offerId,
  openPostImage,
  setOpenPostImage,
}) => {
  const { token } = useAuth();

  const navigate = useNavigate();

  const [image, setImage] = useState("");
  const [error, setError] = useState("");

  // Get patch of window location

  const windowLocation = window.location.href.slice(21);

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      await postOfferImageService(token, offerId, image);

      setOpenPostImage(!openPostImage);

      windowLocation === "/allOffers" ? navigate("/") : navigate("/allOffers");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section className={`postOfferImage-body ${openPostImage ? "show" : ""}`}>
      <section
        onClick={(e) => e.stopPropagation()}
        className={`postOfferImage ${openPostImage ? "show" : ""}`}
      >
        <form className="post-form" onSubmit={handleForm}>
          <fieldset className="fieldset">
            <label className="label">📷</label>
            <input
              className="input-image"
              type="file"
              name="input-image"
              id="input-image"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </fieldset>

          <button className="button">Continuar</button>
          {error ? <p className="error">{error}</p> : null}
        </form>

        <section className="button-wrap">
          <button
            className="button"
            onClick={() => {
              setOpenPostImage(!openPostImage);
              windowLocation === "/allOffers"
                ? navigate("/")
                : navigate("/allOffers");
            }}
          >
            Subir la oferta sin imagen
          </button>
        </section>
      </section>
    </section>
  );
};
