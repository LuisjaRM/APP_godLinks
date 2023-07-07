import "./SettingsNav.css";

// Material

import { SvgIcon } from "@mui/material";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import Brightness5Icon from "@mui/icons-material/Brightness5";

// Intl

import { FormattedMessage } from "react-intl";

// Contexts

import { useNightMode } from "../../contexts/NightModeContext";
import { useShowSettings } from "../../contexts/ShowSettingsContext";
import { useLanguage } from "../../contexts/LanguageContext";
import { useEffect } from "react";

// Settings Dropdown

export const SettingsNav = () => {
  const [nightMode, toggleNightMode] = useNightMode();

  const [showSettings, setShowSettings] = useShowSettings();

  const toggleShow = () => {
    if (window.scrollY > 1) {
      setShowSettings(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleShow);

    return () => {
      window.removeEventListener("scroll", toggleShow);
    };
  }, []);

  // Intl

  const [language, setLanguage] = useLanguage();

  return (
    showSettings && (
      <section
        role="button"
        className="modal-back"
        onClick={() => {
          setShowSettings(!showSettings);
        }}
      >
        <section className="settings-nav">
          <h2>
            <FormattedMessage id="settings" />
          </h2>

          <ul className="settings-ul" role="button" onClick={(e) => e.stopPropagation()}>
            <li className="settings-element">
              <p id="title">
                <FormattedMessage id="theme" />
              </p>

              <i
                role="button"
                onClick={() => {
                  nightMode === "night"
                    ? toggleNightMode("day")
                    : toggleNightMode("night");
                }}
                className="toggle-button"
              >
                {nightMode === "day" ? (
                  <SvgIcon
                    className={`toggle-icon`}
                    component={Brightness5Icon}
                    inheritViewBox
                  />
                ) : (
                  <SvgIcon
                    className={`toggle-icon`}
                    component={NightlightRoundIcon}
                    inheritViewBox
                  />
                )}
              </i>
            </li>

            <li className="settings-element language">
              <p id="title">
                <FormattedMessage id="language" />
              </p>

              <section>
                <i
                  role="button"
                  className={`button-es ${language === "es" && "es"}`}
                  onClick={() => {
                    setLanguage("es");
                  }}
                >
                  ES
                </i>
                <i
                  role="button"
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
      </section>
    )
  );
};
