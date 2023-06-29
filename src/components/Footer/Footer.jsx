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
          ↓
        </button>
      </section>

      <section className={`footer-container ${show ? "show" : ""} `}>
        <section className="footer-content-container">
          <h3 className="website-logo">Sobre nosotros</h3>
          <p className="footer-info">godLinkssa@gmail.com</p>
        </section>
        <section className="footer-menus">
          <section className="footer-content-container">
            <p className="menu-title">menu</p>
            <Link className="menu-item-footer" to="/">
              Home
            </Link>
            <Link className="menu-item-footer" to="/favorites">
              Tus ofertas favoritas
            </Link>
            <Link className="menu-item-footer" to="/offersByVotes">
              Ofertas mas votadas
            </Link>
          </section>

          <section className="footer-content-container">
            <p className="menu-title">legal</p>
            <a
              href="https://www.aquasocialmedia.com/blog-dynamic/91-que-es-y-para-que-sirve-la-politica-de-privacidad"
              target="_blank"
              rel="noopener noreferrer"
              className="menu-item-footer"
            >
              Política de Privacidad
            </a>
            <a
              href="https://blog.hubspot.es/website/que-son-cookies"
              target="_blank"
              rel="noopener noreferrer"
              className="menu-item-footer"
            >
              Cookies
            </a>
            <a
              href="https://web.icam.es/ciudadanos/servicio-de-orientacion-juridica/"
              target="_blank"
              rel="noopener noreferrer"
              className="menu-item-footer"
            >
              Consejo Legal
            </a>
          </section>
        </section>
        <section className="footer-content-container">
          <p className="menu-title">Síguenos</p>
          <article className="social-container">
            <a
              href="https://github.com/LuisjaRM"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title="Luisja Rodriguez"
            ></a>
            <a
              href="https://github.com/Victorotr"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title="Victor Otero"
            ></a>
            <a
              href="https://github.com/Mladen44"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title="Mladen Aleksandrov"
            ></a>
          </article>
          <article className="social-box">
            <a
              href="https://www.linkedin.com/in/luisjarodriguez/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-linkedin"
              title="Luisja Rodriguez"
            ></a>
            <a
              href="https://www.linkedin.com/in/victor-otero-vidal/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-linkedin"
              title="Victor Otero"
            ></a>
            <a
              href="https://www.linkedin.com/in/mladen-aleksandrov-angelov-36b642271/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-linkedin"
              title="Mladen Aleksandrov"
            ></a>
          </article>
        </section>
      </section>
    </footer>
  );
};
