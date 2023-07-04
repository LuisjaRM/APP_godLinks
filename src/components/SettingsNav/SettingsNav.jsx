import "./SettingsNav.css";

// Intl

import { FormattedMessage } from "react-intl";

// Contexts

import { useNightMode } from "../../contexts/NightModeContext";
import { useShowSettings } from "../../contexts/ShowSettingsContext";
import { useLanguage } from "../../contexts/LanguageContext";

// Settings Dropdown

export const SettingsNav = () => {
  const [nightMode, toggleNightMode] = useNightMode();

  const [showSettings, setShowSettings] = useShowSettings();

  // Intl

  const [language, setLanguage] = useLanguage();

  return (
    showSettings && (
      <section
        className="modal-back"
        onClick={() => {
          setShowSettings(!showSettings);
        }}
      >
        <ul className="settings-nav" onClick={(e) => e.stopPropagation()}>
          <li className="settings-element">
            <p id="title">
              <FormattedMessage id="theme" />
            </p>

            <i
              onClick={() => {
                nightMode === "night"
                  ? toggleNightMode("day")
                  : toggleNightMode("night");
              }}
              className="toggle-button"
            >
              {nightMode === "night" ? "🌙" : "🌞"}
            </i>
          </li>

          <li className="settings-element language">
            <p id="title">
              <FormattedMessage id="language" />
            </p>

            <section>
              <i
                className={`button-es ${language === "es" && "es"}`}
                onClick={() => {
                  setLanguage("es");
                }}
              >
                ES
              </i>
              <i
                className={`button-en ${language === "en" && "en"}`}
                onClick={() => {
                  setLanguage("en");
                }}
              >
                EN
              </i>
            </section>
          </li>
        </ul>
      </section>
    )
  );
};
