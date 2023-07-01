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
          <li className="language">
            <button>Es</button>
            <button>En</button>
          </li>
        </ul>
      </section>
    )
  );
};
