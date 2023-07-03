import "./SettingsNav.css";

// Contexts

import { useNightMode } from "../../contexts/NightModeContext";
import { useShowSettings } from "../../contexts/ShowSettingsContext";
import { useLanguage } from "../../contexts/LanguageContext";
import { useState } from "react";

// Settings Dropdown

export const SettingsNav = ({ hideSettings, setHideSettings }) => {
  const [nightMode, toggleNightMode] = useNightMode();
  const [showSettings, setShowSettings] = useShowSettings();
  const [dayOrNight, setDayOrNight] = useState();
  const [cahngeLanguage, setChangeLanguage] = useState();

  // Intl

  const [, setLanguage] = useLanguage();
  console.log(nightMode);
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
                  setDayOrNight(!dayOrNight);
                }}
              />
              <button
                onClick={() => {
                  toggleNightMode(!nightMode);
                  setDayOrNight(!dayOrNight);
                }}
                className="first"
              >
                {nightMode && "🌙"}
              </button>
              <button
                onClick={() => {
                  toggleNightMode(!nightMode);
                  setDayOrNight(!dayOrNight);
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
