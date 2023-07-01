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
          <li className="day-night" onClick={() => toggleNightMode()}>
            Día y noche
          </li>
          <li className="language">
            <button onClick={() => setLanguage("es")}>ES</button>
            <button onClick={() => setLanguage("en")}>EN</button>
          </li>
        </ul>
      </section>
    )
  );
};
