import "./NotFound.css";

// React

import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

// Contexts

import { useShowFilter } from "../../contexts/ShowFilter";
import { useNightMode } from "../../contexts/NightModeContext";

export const NotFound = () => {
  const [nightMode] = useNightMode();

  // Document Title
  document.title = "¡Ups!";

  // ShowFilter

  const [, setShowFilter] = useShowFilter();
  setShowFilter(false);

  return (
    <>
      {nightMode === "night" ? (
        <section className="stars">
          <section>
            <section className="stars">
              <section className="central-body">
                <img
                  className="image-404"
                  src="https://cdn-icons-png.flaticon.com/512/645/645881.png?w=826&t=st=1688331766~exp=1688332366~hmac=85b0af251ab105666fd6e7d6a54f151c385278ea88b6d820dafc6d9f36331dca"
                  width="300px"
                />
                <h2 className="theh2">
                  ¡Vaya! parece que la pagina que buscas no existe{" "}
                </h2>
                <Link to="/" className="link-bt-error">
                  <a
                    href="http://salehriaz.com/404Page/404.html"
                    className="btn-go-home"
                  >
                    HOME
                  </a>
                </Link>
              </section>

              <section className="objects">
                <section className="earth-moon">
                  <img
                    className="object_earth"
                    src="http://salehriaz.com/404Page/img/earth.svg"
                    width="100px"
                  />
                  <img
                    className="object_moon"
                    src="http://salehriaz.com/404Page/img/moon.svg"
                    width="80px"
                  />
                </section>
                <section className="box_astronaut">
                  <img
                    className="object_astronaut"
                    src="http://salehriaz.com/404Page/img/astronaut.svg"
                    width="140px"
                  />
                  <div className="tv-viewport-size">
                    <div>404</div>
                  </div>
                </section>
              </section>
            </section>
          </section>
        </section>
      ) : (
        <section className="page_404">
          <section className="container">
            <section className="col-sm-10 col-sm-offset-1 text-center">
              <div className="four_zero_four_bg"></div>
              <article className="contant_box_404">
                <h1 className="paragraph">
                  <FormattedMessage id="oops" />
                </h1>
                <p className="paragraph">
                  <FormattedMessage id="page-notfound" />
                </p>

                <Link className="link_404" to="/">
                  <FormattedMessage id="home" />
                </Link>
              </article>
            </section>
          </section>
        </section>
      )}
    </>
  );
};
