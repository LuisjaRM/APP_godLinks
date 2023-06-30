import "./SettingsNav.css";

// Contexts

import { useNightMode } from "../../contexts/NightModeContext";
import { useShowSettings } from "../../contexts/ShowSettingsContext";

// Settings Dropdown

export const SettingsNav = () => {
  const [, toggleNightMode] = useNightMode();
  const [showSettings, setShowSettings] = useShowSettings();

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
            <button>Es</button>
            <button>En</button>
          </li>
        </ul>
      </section>
    )
  );
};
