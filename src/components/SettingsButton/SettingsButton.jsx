import "./SettingsButton.css";

// Material

import { SvgIcon } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

// Components

import { SettingsNav } from "../SettingsNav/SettingsNav";

// Contexts

import { useShowSettings } from "../../contexts/ShowSettingsContext";
import { useShowLogin } from "../../contexts/ShowLoginContext";

export const SettingsButton = () => {
  const [showSettings, setShowSettings] = useShowSettings();
  const [, setShowLogin] = useShowLogin();

  return (
    <button
      className={"button settings-button"}
      onClick={() => {
        setShowSettings(!showSettings);
        setShowLogin(false);
      }}
    >
      <SvgIcon
        className="settings-icon"
        component={SettingsIcon}
        inheritViewBox
      />

      <SettingsNav
        showSettings={showSettings}
        setShowSettings={setShowSettings}
      />
    </button>
  );
};
