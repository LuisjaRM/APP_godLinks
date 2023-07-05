import "./PostOfferImage.css";

// Intl

import { FormattedMessage } from "react-intl";

// Material

import { SvgIcon } from "@mui/material";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";

// React

import { useState } from "react";
import { useNavigate } from "react-router";

// Contexts

import { useAuth } from "../../contexts/AuthContext";
import { useNightMode } from "../../contexts/NightModeContext";

// Fetchs

import { postOfferImageService } from "../../services/api";

export const PostOfferImage = ({
  offerId,
  openPostImage,
  setOpenPostImage,
}) => {
  // Theme Context
  const [nightMode] = useNightMode();

  // Destructuring useAuth

  const { token } = useAuth();

  // State upload offer

  const [showUploadOfferModal, setShowUploadOfferModal] = useState();

  // Navigate

  const navigate = useNavigate();

  const [image, setImage] = useState("");
  const [error, setError] = useState("");

  // Get patch of window location

  const windowLocation = window.location.href.slice(21);

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      // Fetch
      await postOfferImageService(token, offerId, image);

      setOpenPostImage(!openPostImage);
      setShowUploadOfferModal(!showUploadOfferModal);

      setTimeout(() => {
        setShowUploadOfferModal(!showUploadOfferModal);
        windowLocation === "/allOffers"
          ? navigate("/")
          : navigate("/allOffers");
      }, 2000);
    } catch (error) {
      setError(error.message);
    }
  };

  // PreviweImage

  const [filepreview, setFilepreview] = useState();

  // Error messages

  error === "No has seleccionado ninguna imagen" && setError();

  return (
    <section className={`post-offer-image-body ${openPostImage ? "show" : ""}`}>
      <section
        onClick={(e) => e.stopPropagation()}
        className={`post-offer-image ${openPostImage ? "show" : ""} ${
          nightMode === "day" ? "light" : ""
        }`}
      >
        <h2 className="title">
          <FormattedMessage id="upload-image" />
        </h2>

        <section className="post-offer-image-main">
          <form className="form" onSubmit={handleForm}>
            <fieldset>
              <label className="image-label">
                <input
                  className="image-input"
                  type="file"
                  name="input-image"
                  id="input-image"
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                    setFilepreview(URL.createObjectURL(e.target.files[0]));
                  }}
                />
                {filepreview ? (
                  <img
                    className="image-preview"
                    src={filepreview}
                    alt="image-preview"
                  />
                ) : (
                  <SvgIcon
                    className="post-image-icon"
                    component={ImageSearchIcon}
                    inheritViewBox
                  />
                )}
              </label>
            </fieldset>

            {error ? <p className="error">{error}</p> : null}

            <button className="post-offer-button">
              <SvgIcon
                className="post-offer-icon"
                component={AddToPhotosIcon}
                inheritViewBox
              />
            </button>
          </form>

          <section className="post-offer-noImage">
            <p
              className="button-main without-image"
              onClick={() => {
                setOpenPostImage(!openPostImage);
                setShowUploadOfferModal(!showUploadOfferModal);

                setTimeout(() => {
                  setShowUploadOfferModal(!showUploadOfferModal);
                  windowLocation === "/allOffers"
                    ? navigate("/")
                    : navigate("/allOffers");
                }, 2000);
              }}
            >
              <FormattedMessage id="upload-without-image" />
            </p>
          </section>
        </section>
      </section>

      {showUploadOfferModal && (
        <section className="modal-back">
          <section className="modal-body little">
            <h3>
              <FormattedMessage id="offeruploaded" />
            </h3>

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
                stroke="black"
                strokeLinecap="round"
                strokeWidth="4.3"
                fill="none"
              />
              <circle
                className="circle"
                strokeLinejoin="round"
                cx="59.219"
                strokeLinecap="round"
                stroke="black"
                cy="59.219"
                r="57.069"
                strokeWidth="4.3"
                fill="none"
              />
            </svg>
          </section>
        </section>
      )}
    </section>
  );
};
