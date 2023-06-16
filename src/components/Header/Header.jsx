import { Link } from "react-router-dom";
import { LoginButton } from "../LoginButton/LoginButton";
import { useNightMode } from "../../contexts/NightModeContext";
import "./Header.css";

export const Header = () => {
  const [nightMode, toggleNightMode] = useNightMode();

  return (
    <header>
      <LoginButton />

      <Link to="/">
        <h1 className="title">GODLINKS</h1>
      </Link>

      <button onClick={() => toggleNightMode()}>
        {nightMode ? "🌌" : "🌞"}
      </button>

      <button className="button">👓</button>
    </header>
  );
};
