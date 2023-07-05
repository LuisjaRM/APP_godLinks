import "./OfferCard.css";

// Intl

import { FormattedMessage } from "react-intl";

// Material

import { SvgIcon } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

// React

import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Components

import { PostVote } from "../PostVote/PostVote";

// Contexts

import { useAuth } from "../../contexts/AuthContext";
import { useShowLogin } from "../../contexts/ShowLoginContext";
import { useNavigateTo } from "../../contexts/NavigateToContext";
import { useLanguage } from "../../contexts/LanguageContext";
import { useNightMode } from "../../contexts/NightModeContext";

// Fetchs

import { addFavoriteService, useGetOfferById } from "../../services/api";

export const OfferCard = ({ offer, refresh }) => {
  // Theme Context
  const [nightMode] = useNightMode();

  const { user, token } = useAuth();
  const [showLogin, setShowLogin] = useShowLogin();
  const [, setNavigateTo] = useNavigateTo();

  // Date Logic
  const timeNow = Date.now();
  const nowDate = new Date(timeNow);

  const created_at = new Date(offer.created_at);
  const timeCreated_at = created_at.getTime() - 1000 * 60 * 60 * 2;
  const dateCreated = new Date(timeCreated_at);

  const dif = nowDate.getTime() - dateCreated.getTime();

  const minutes = Math.floor(dif / 1000 / 60);
  const hours = Math.floor(dif / 1000 / 60 / 60);
  const day = Math.floor(dif / 1000 / 60 / 60 / 24);

  let timeSinceCreated_at;
  let text;

  if (minutes < 60) {
    timeSinceCreated_at = minutes;
    text = "m";
  }
  if (minutes > 60) {
    timeSinceCreated_at = hours;
    text = "h";
  }
  if (hours > 24) {
    timeSinceCreated_at = day;
    text = "d";
  }

  //Language context

  const [language] = useLanguage();

  // Expired Offer Date Logic

  const offer_expiry = new Date(offer.offer_expiry);
  const dateOffer_expiry = offer_expiry.toLocaleDateString("en-GB");
  const timeOffer_Expiry = offer_expiry.getTime() - 1000 * 60 * 60;
  const dateOffer_Expiry = new Date(timeOffer_Expiry);

  // Disabled Caducated offers

  const expired = dateOffer_Expiry.getTime() < nowDate.getTime();

  // Confirm Modal

  const [showConfirmModal, setShowConfirmModal] = useState();

  // Change Made Modal

  const [showChangeMadeModal, setShowChangeMadeModal] = useState();

  // Handle Form Favorite

  const [isLiked, setIsLiked] = useState(offer.favorite);

  const handleLike = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    user
      ? isLiked
        ? setShowConfirmModal(!showConfirmModal)
        : await addFavoriteService(token, offer.id)
      : setShowLogin(!showLogin);
    user ? setIsLiked(!isLiked) : "";
  };

  const handleClickAway = () => {
    setShowConfirmModal(!showConfirmModal);
    refresh();
  };

  const handleClickConfirm = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowConfirmModal(!showConfirmModal);
    await addFavoriteService(token, offer.id);
    setShowChangeMadeModal(!showChangeMadeModal);
    setTimeout(() => {
      setShowChangeMadeModal(!showChangeMadeModal);
      refresh();
    }, 1500);
  };

  const handleClickCancel = (e) => {
    e.stopPropagation();
    setShowConfirmModal(!showConfirmModal);
    refresh();
  };

  // HandleClicks

  const navigate = useNavigate();

  const handleClickOfferCard = () => {
    setNavigateTo(`/offerById/${offer.id}`);
    user ? navigate(`/offerById/${offer.id}`) : setShowLogin(!showLogin);
  };

  const handleClickUserInfo = (e) => {
    e.stopPropagation();
    setNavigateTo(`/userInfo/${offer.user_id}`);
    user ? navigate(`/userInfo/${offer.user_id}`) : setShowLogin(!showLogin);
  };

  // Get patch of window location

  const windowLocation = window.location.href.slice(21, -2);
  const windowOfferLocation = window.location.href.slice(21);

  // CSS state to descrip

  const [expand, setExpand] = useState(false);

  // Comments

  const { offers } = useGetOfferById(offer.id, token);

  return (
    <>
      <section
        className={`offer-card ${expired ? "expired" : ""} ${
          nightMode === "day" ? "light" : ""
        }`}
        onClick={handleClickOfferCard}
      >
        {expired && (
          <p className="expired-offer">
            <FormattedMessage id="expired-offer" />
          </p>
        )}
        {(windowLocation === "/userInfo" ||
          windowOfferLocation === `/offerById/${offer.id}`) &&
          !expired &&
          user.id === offer.user_id && (
            <section className="edit-wrap">
              <button
                className="edit"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  navigate(`/modifyOffer/${offer.id}`);
                }}
              >
                <SvgIcon
                  className={`edit-icon ${expired ? "expired" : ""}`}
                  component={EditIcon}
                  inheritViewBox
                />
              </button>
            </section>
          )}
        <section className="header">
          <section className="user-info" onClick={handleClickUserInfo}>
            <img
              className="user-image"
              src={
                offer.avatar
                  ? `${import.meta.env.VITE_BACKEND}uploads/${offer.avatar}`
                  : "/default-user.webp"
              }
              alt={offer.title}
            />

            <p className="user-name">{offer.user}</p>
          </section>

          <p className="created" onClick={(e) => e.stopPropagation()}>
            {language === "es"
              ? `hace ${timeSinceCreated_at} ${text}`
              : `${timeSinceCreated_at} ${text} ago`}
          </p>
        </section>

        <section className="main">
          <section className="image-box">
            <img
              className={`image ${expired ? "expired" : ""}`}
              src={
                offer.photo
                  ? `${import.meta.env.VITE_BACKEND}uploads/${offer.photo}`
                  : "/default-image.webp"
              }
              alt={offer.title}
              onClick={(e) => e.stopPropagation}
            />
            <button className="favorite-button" onClick={handleLike}>
              <svg
                className={isLiked ? "like" : ""}
                viewBox="0 0 512 512"
                width="15px"
                height="28px"
              >
                <path
                  d="M474.655,74.503C449.169,45.72,413.943,29.87,375.467,29.87c-30.225,0-58.5,12.299-81.767,35.566
          c-15.522,15.523-28.33,35.26-37.699,57.931c-9.371-22.671-22.177-42.407-37.699-57.931c-23.267-23.267-51.542-35.566-81.767-35.566
          c-38.477,0-73.702,15.851-99.188,44.634C13.612,101.305,0,137.911,0,174.936c0,44.458,13.452,88.335,39.981,130.418
          c21.009,33.324,50.227,65.585,86.845,95.889c62.046,51.348,123.114,78.995,125.683,80.146c2.203,0.988,4.779,0.988,6.981,0
          c2.57-1.151,63.637-28.798,125.683-80.146c36.618-30.304,65.836-62.565,86.845-95.889C498.548,263.271,512,219.394,512,174.936
          C512,137.911,498.388,101.305,474.655,74.503z"
                />
              </svg>
            </button>
          </section>

          <ul className="offer-info">
            <li className="offer-title">
              <h2>{offer.title}</h2>
            </li>
            <li className="offer-plataform">
              {offer.plataform.replace("-", " ")}
            </li>
            <li className="offer-price">
              <p className="price-dcto">{offer.offer_price} €</p>
              <p className={`price ${expired ? "expired" : ""}`}>
                {offer.price} €
              </p>
            </li>
            <li className="offer-cad">Cad: {dateOffer_expiry}</li>
            <li className={`offer-descrip ${expand ? "expand" : ""}`}>
              {offer.descrip}

              {offer.descrip.length > 58 && (
                <button
                  className={`expand-button ${expand ? "expand" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setExpand(!expand);
                  }}
                >
                  {expand ? (
                    <SvgIcon
                      className="expand-icon"
                      component={ExpandLessIcon}
                      inheritViewBox
                    />
                  ) : (
                    <SvgIcon
                      className="expand-icon"
                      component={ExpandMoreIcon}
                      inheritViewBox
                    />
                  )}
                </button>
              )}
            </li>
          </ul>
        </section>

        <section className="footer">
          <PostVote
            refresh={refresh}
            votes={offer.avgVotes}
            offerId={offer.id}
            userId={offer.user_id}
          />
          <button className={`link-button ${expired ? "expired" : ""}`}>
            <a
              className="offer-link"
              onClick={(e) => e.stopPropagation()}
              href={offer.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="link-to-offer">
                <FormattedMessage id="link-to-offer" />
              </p>

              <SvgIcon
                className="new-tab-icon"
                component={OpenInNewIcon}
                inheritViewBox
              />
            </a>
          </button>

          <p className="comments">🗨️ ({offers.comments?.length || 0})</p>
        </section>
      </section>

      {showConfirmModal && (
        <section className="modal-back dark" onClick={handleClickAway}>
          <section className="modal-body little">
            <h2>
              ¿Estás seguro de que quieres eliminar la oferta de favoritas?
            </h2>
            <section className="buttons">
              <button className="button" onClick={handleClickConfirm}>
                <FormattedMessage id="yes" />
              </button>
              <button className="button" onClick={handleClickCancel}>
                <FormattedMessage id="no" />
              </button>
            </section>
          </section>
        </section>
      )}
      {showChangeMadeModal && (
        <section className="modal-back dark">
          <section className="modal-body little">
            <h3>Oferta eliminada de favoritas</h3>

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
    </>
  );
};
