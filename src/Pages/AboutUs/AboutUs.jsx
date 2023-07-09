import "./AboutUs.css";

// Intl

import { FormattedMessage } from "react-intl";

// Context

import { useNightMode } from "../../contexts/NightModeContext";
import { useLanguage } from "../../contexts/LanguageContext";

export const AboutUs = () => {
  // Theme Context
  const [nightMode] = useNightMode();

  // Document Title
  const [language] = useLanguage();

  language === "es"
    ? (document.title = "Sobre Nosotros")
    : (document.title = "About us");

  return (
    <section className={`about-us-page ${nightMode === "day" ? "light" : ""}`}>
      <h1>
        <FormattedMessage id="title-about-us" />
      </h1>
      <section className="paragraph">
        <p>
          <FormattedMessage id="paragraph0-about-us" />
        </p>
        <p>
          <FormattedMessage id="paragraph1-about-us" />
        </p>
      </section>

      <h2>
        <FormattedMessage id="section-about-us" />
      </h2>
      <section className="paragraph">
        <p>
          <FormattedMessage id="paragraph2-about-us" />
        </p>
        <p>
          <FormattedMessage id="paragraph3-about-us" />
        </p>
      </section>

      <h2>
        <FormattedMessage id="section-know-us" />
      </h2>
      <section className="paragraph">
        <p>
          <FormattedMessage id="paragraph0-know-us" />
        </p>

        <p>
          <FormattedMessage id="paragraph1-know-us" />
        </p>

        <p>
          <FormattedMessage id="paragraph2-know-us" />
        </p>

        <p>
          <FormattedMessage id="paragraph3-know-us" />
        </p>

        <p>
          <FormattedMessage id="paragraph4-know-us" />
        </p>
      </section>

      <h2>
        {" "}
        <FormattedMessage id="section-thanks" />
      </h2>
      <section className="paragraph">
        <p>
          <FormattedMessage id="paragraph0-thanks" />
        </p>

        <p>
          <FormattedMessage id="paragraph1-thanks" />
        </p>

        <p>
          <FormattedMessage id="paragraph2-thanks" />
        </p>
        <p>
          <FormattedMessage id="paragraph3-thanks" />
        </p>

        <p>
          <FormattedMessage id="paragraph4-thanks" />
        </p>
      </section>
    </section>
  );
};
