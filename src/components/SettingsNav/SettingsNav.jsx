import "./SettingsNav.css";

// Contexts

import { useNightMode } from "../../contexts/NightModeContext";
import { useShowSettings } from "../../contexts/ShowSettingsContext";
import { useLanguage } from "../../contexts/LanguageContext";

// Settings Dropdown

export const SettingsNav = () => {
  const [, toggleNightMode] = useNightMode();
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
            <label className="lewis">
              <input
                className="verstappen"
                type="checkbox"
                onClick={() => toggleNightMode()}
              />
              <ion-icon name="sunny" class="sun"></ion-icon>
              <ion-icon name="moon" class="moon"></ion-icon>
            </label>
          </li>
          <li id="language-title">Idioma</li>
          <li className="language">
            <button onClick={() => setLanguage("es")}>ES</button>
            <button onClick={() => setLanguage("en")}>EN</button>
          </li>
        </ul>
      </section>
    )
  );
};
