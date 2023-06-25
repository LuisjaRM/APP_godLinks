import "./Footer.css";

// Contexts

import { useNightMode } from "../../contexts/NightModeContext";

export const Footer = () => {
  const fecha = new Date().getFullYear();
  const [nightdayMode] = useNightMode();

  return (
    <footer className={nightdayMode ? "dark" : "light"}>
      <h2 className="title">GodLinks S.A., {fecha}</h2>
    </footer>
  );
};
