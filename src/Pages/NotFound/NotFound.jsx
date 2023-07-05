import "./NotFound.css";

// React

import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

// Contexts

import { useNightMode } from "../../contexts/NightModeContext";

export const NotFound = () => {
  const [nightMode] = useNightMode();

  // Document Title
  document.title = "¡Ups!";

  return (
    <>
      {nightMode === "night" ? (
        <section className="stars">
          <section>
            <section className="stars">
              <section className="central-body">
                <h2 className="theh2">
                  <FormattedMessage id="oops" />
                </h2>
                <p className="paragraph2">
                  <FormattedMessage id="page-notfound" />
                </p>
                <Link to="/" className="link-bt-error">
                  <button className="btn-go-home">
                    <FormattedMessage id="home" />
                  </button>
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
