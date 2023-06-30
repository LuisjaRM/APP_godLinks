import "./Footer.css";

// Contexts

import { Link } from "react-router-dom";
import { useNightMode } from "../../contexts/NightModeContext";
import { useState } from "react";

export const Footer = () => {
  const [show, setShow] = useState(false);
  const [nightdayMode] = useNightMode();

  const buttonShow = () => {
    setShow(!show);
  };

  return (
    <footer className={`${nightdayMode ? "dark" : "light"}`}>
      <section className="footer-header">
        <h2 className="title-footer">GodLinks S.A.</h2>

        <button
          onClick={buttonShow}
          className="more-content"
          title="Ir al pié de página"
        >
          {show ? "↑" : "↓"}
        </button>
      </section>

      <section className={`footer-container ${show ? "show" : ""} `}>
        <section className="about-us">
          <h3 className="section-title">Sobre nosotros</h3>

          <a href="mailto:godLinkssa@gmail.com" className="footer-info">
            godLinkssa@gmail.com
          </a>

          <a href="">Página que habla sobre nosotros</a>
        </section>

        <section className="footer-container-section">
          <section className="menu">
            <h3 className="section-title">Menú</h3>

            <Link className="menu-item" to="/">
              Home
            </Link>
            <Link className="menu-item" to="/favorites">
              Tus ofertas favoritas
            </Link>
            <Link className="menu-item" to="/offersByVotes">
              Ofertas mas votadas
            </Link>
          </section>

          <section className="menu">
            <h3 className="section-title">Legal</h3>
            <a
              href="https://www.aquasocialmedia.com/blog-dynamic/91-que-es-y-para-que-sirve-la-politica-de-privacidad"
              target="_blank"
              rel="noopener noreferrer"
              className="menu-item"
            >
              Política de Privacidad
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
              Consejo Legal
            </a>
          </section>
        </section>

        <section className="social-networks">
          <h3 className="section-title">Síguenos</h3>

          <article className="creator">
            <p>Victor Otero:</p>
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
          </article>

          <article className="creator">
            <p>Mladen Aleksandrov:</p>
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
          </article>

          <article className="creator">
            <p>Luisja Rodríguez:</p>
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
          </article>
        </section>
      </section>
    </footer>
  );
};
