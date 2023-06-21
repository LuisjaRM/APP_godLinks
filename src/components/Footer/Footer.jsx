import "./Footer.css";
import { useNightMode } from "../../contexts/NightModeContext";

export const Footer = () => {
  const fecha = new Date().getFullYear();
  const [nightdayMode] = useNightMode();

  return (
    <footer className={nightdayMode ? "dark" : "light"}>
      <p>Somos los mejores</p>

      <h2 className="title">GodLinks SA. {fecha}</h2>

      <p>Y bueno y que?</p>
    </footer>
  );
};
