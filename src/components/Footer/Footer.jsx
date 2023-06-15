import { useNightMode } from "../../contexts/NightModeContext";
import "./Footer.css";

export const Footer = () => {
  const fecha = new Date().getFullYear();
  const [nightdayMode] = useNightMode();
  const [nightMode, toggleNightMode] = useNightMode();

  return (
    <footer className={nightdayMode ? "dark" : "light"}>
      <p>Somos los mejores</p>

      <h2 className="title">GodLinks SA. {fecha}</h2>

      <button onClick={() => toggleNightMode()}>
        {nightMode ? "🌌" : "🌞"}
      </button>

      <p>Y bueno y que?</p>
    </footer>
  );
};
