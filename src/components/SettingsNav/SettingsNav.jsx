import "./SettingsNav.css";

// Contexts

import { useNightMode } from "../../contexts/NightModeContext";
import { useShowSettings } from "../../contexts/ShowSettingsContext";
import { useLanguage } from "../../contexts/LanguageContext";

// Settings Dropdown

export const SettingsNav = () => {
  const [nightMode, toggleNightMode] = useNightMode();

  const [showSettings, setShowSettings] = useShowSettings();

  // Intl

  const [, setLanguage] = useLanguage();
  return (
    showSettings && (
      <section
        className="modal-back"
        onClick={() => {
          setShowSettings(!showSettings);
        }}
      >
        <ul className="settings-nav" onClick={(e) => e.stopPropagation()}>
          <li id="theme-title">Tema</li>

          <li>
            <button
              onClick={() => {
                nightMode === "night"
                  ? toggleNightMode("day")
                  : toggleNightMode("night");
              }}
              className="toggle-button"
            >
              {nightMode === "night" ? "🌙" : "🌞"}
            </button>
          </li>

          <li id="language-title">Idioma</li>

          <li className="language">
            <button className="es" onClick={() => setLanguage("es")}>
              ES
            </button>
            <button className="en" onClick={() => setLanguage("en")}>
              EN
            </button>
          </li>
        </ul>
      </section>
    )
  );
};
