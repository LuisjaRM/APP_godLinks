import "./SettingsNav.css";

// Contexts

import { useNightMode } from "../../contexts/NightModeContext";
import { useShowSettings } from "../../contexts/ShowSettingsContext";
import { useLanguage } from "../../contexts/LanguageContext";

// Settings Dropdown

export const SettingsNav = ({ hideSettings, setHideSettings }) => {
  const [nightMode, toggleNightMode] = useNightMode();
  const [showSettings, setShowSettings] = useShowSettings();

  // Intl

  const [language, setLanguage] = useLanguage();

  return (
    showSettings && (
      <section
        className={`modal ${hideSettings ? "hide" : ""}`}
        onClick={() => {
          setHideSettings(!hideSettings);
          setShowSettings(false);
        }}
      >
        <ul className="settings-nav" onClick={(e) => e.stopPropagation()}>
          <li id="theme-title">Tema</li>

          <li>
            <label className="lewis">
              <input
                className="verstappen"
                type="checkbox"
                onClick={() => {
                  toggleNightMode(!nightMode);
                }}
              />
              <button
                onClick={() => {
                  toggleNightMode(!nightMode);
                }}
                className="first"
              >
                {nightMode && "🌙"}
              </button>
              <button
                onClick={() => {
                  toggleNightMode(!nightMode);
                }}
                className="last"
              >
                {!nightMode && "🌞"}
              </button>
              {/* 
              {nightMode ? (
                <>
                  <ion-icon name="moon" class="first"></ion-icon>
                  <ion-icon name="sunny" class="last"></ion-icon>
                </>
              ) : (
                <>
                  <ion-icon name="sunny" class="first"></ion-icon>
                  <ion-icon name="moon" class="last"></ion-icon>
                </>
              )} */}
            </label>
          </li>
          <li id="language-title">Idioma</li>
          <li className="language">
            <button
              className={language === "es" && "es"}
              id="button-es"
              onClick={() => {
                setLanguage("es");
              }}
            >
              ES
            </button>
            <button
              className={language === "en" && "en"}
              id="button-en"
              onClick={() => {
                setLanguage("en");
              }}
            >
              EN
            </button>
          </li>
        </ul>
      </section>
    )
  );
};
