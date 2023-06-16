import { Link, Navigate } from "react-router-dom";
import { Dropdown } from "../Dropdown/Dropdown";
import { useNightMode } from "../../contexts/NightModeContext";
import "./Header.css";

export const Header = () => {
  const [nightMode, toggleNightMode] = useNightMode();

  return (
    <header>
      <Dropdown icon="🙇‍♀️">
        <Navigate to="/profile" />
      </Dropdown>

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
