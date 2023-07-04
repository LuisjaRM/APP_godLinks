import "./Footer.css";

// Material

import { SvgIcon } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

// Intl

import { FormattedMessage } from "react-intl";

// React

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Components

import { ScrollDown } from "../ScrollDown/ScrollDown";

// Contexts

import { useNightMode } from "../../contexts/NightModeContext";

export const Footer = () => {
  const [show, setShow] = useState(false);
  const [nightMode] = useNightMode();

  const navigate = useNavigate();

  const MoreInfo = () => {
    setShow(!show);
  };

  return (
    <footer className={`${nightMode === "night" ? "dark" : "light"}`}>
      <section className="footer-header">
        <h2 className="title-footer">GodLinks S.A.</h2>

        <button
          onClick={MoreInfo}
          className={`more-content ${show && "show"}`}
          title="Desplegar pié de página"
        >
          {show ? (
            "X"
          ) : (
            <SvgIcon
              className="info-icon"
              component={InfoIcon}
              inheritViewBox
            />
          )}
        </button>

        <ScrollDown />
      </section>

      <section className={`footer-container ${show ? "show" : ""} `}>
        <section className="about-us">
          <h3 className="section-title">
            <FormattedMessage id="about-us" />
          </h3>

          <a href="mailto:godLinkssa@gmail.com" className="footer-info">
            godLinkssa@gmail.com
          </a>

          <p
            onClick={() => {
              navigate("/aboutUs");
            }}
          >
            <FormattedMessage id="ourpage" />
          </p>
        </section>

        <section className="footer-container-section">
          <section className="menu">
            <h3 className="section-title">Menú</h3>

            <Link className="menu-item" to="/">
              <FormattedMessage id="home" />
            </Link>
            <Link className="menu-item" to="/favorites">
              <FormattedMessage id="favorite-offers" />
            </Link>
            <Link className="menu-item" to="/offersByVotes">
              <FormattedMessage id="most-rated-offers" />
            </Link>
          </section>

          <section className="menu">
            <h3 className="section-title">
              <FormattedMessage id="legal" />
            </h3>
            <a
              href="https://www.aquasocialmedia.com/blog-dynamic/91-que-es-y-para-que-sirve-la-politica-de-privacidad"
              target="_blank"
              rel="noopener noreferrer"
              className="menu-item"
            >
              <FormattedMessage id="privacy" />
            </a>
            <a
              href="https://blog.hubspot.es/website/que-son-cookies"
              target="_blank"
              rel="noopener noreferrer"
              className="menu-item"
            >
              Cookies
            </a>
            <a
              href="https://web.icam.es/ciudadanos/servicio-de-orientacion-juridica/"
              target="_blank"
              rel="noopener noreferrer"
              className="menu-item"
            >
              <FormattedMessage id="legaladvice" />
            </a>
          </section>
        </section>

        <section className="social-networks">
          <h3 className="section-title">
            <FormattedMessage id="followus" />
          </h3>

          <article className="creator">
            <p>Victor Otero:</p>

            <section className="social-creator">
              <a
                href="https://github.com/Victorotr"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="Victor Otero"
              >
                <img className="github-image" src="/github.png" alt="github" />
              </a>
              <a
                href="https://www.linkedin.com/in/victor-otero-vidal/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="Victor Otero"
              >
                <img
                  className="linkedin-image"
                  src="/linkedin.png"
                  alt="linkedin"
                />
              </a>
            </section>
          </article>

          <article className="creator">
            <p>Mladen Aleksandrov:</p>

            <section className="social-creator">
              <a
                href="https://github.com/Mladen44"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="Mladen Aleksandrov"
              >
                <img className="github-image" src="/github.png" alt="github" />
              </a>
              <a
                href="https://www.linkedin.com/in/mladen-aleksandrov-angelov-36b642271/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="Mladen Aleksandrov"
              >
                <img
                  className="linkedin-image"
                  src="/linkedin.png"
                  alt="linkedin"
                />
              </a>
            </section>
          </article>

          <article className="creator">
            <p>Luisja Rodríguez:</p>

            <section className="social-creator">
              <a
                href="https://github.com/LuisjaRM"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="Luisja Rodriguez"
              >
                <img className="github-image" src="/github.png" alt="github" />
              </a>
              <a
                href="https://www.linkedin.com/in/luisjarodriguez/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="Luisja Rodriguez"
              >
                <img
                  className="linkedin-image"
                  src="/linkedin.png"
                  alt="linkedin"
                />
              </a>
            </section>
          </article>

          <article className="creator">
            <p>Pablo Planes :</p>

            <section className="social-creator">
              <a
                href="https://github.com/pplanesp"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="Luisja Rodriguez"
              >
                <img className="github-image" src="/github.png" alt="github" />
              </a>
              <a
                href="https://www.linkedin.com/in/pabloplanes/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="Luisja Rodriguez"
              >
                <img
                  className="linkedin-image"
                  src="/linkedin.png"
                  alt="linkedin"
                />
              </a>
            </section>
          </article>
        </section>
      </section>
    </footer>
  );
};
