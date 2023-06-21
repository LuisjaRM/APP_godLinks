import "./Header.css";

// react-router-dom

import { Link } from "react-router-dom";

// Components

import { UserButton } from "../UserButton/UserButton";

// Contexts

import { useNightMode } from "../../contexts/NightModeContext";

export const Header = () => {
  const [nightMode, toggleNightMode] = useNightMode();

  return (
    <header>
      <UserButton />

      <Link to="/">
        <h1 className="title">GODLINKS</h1>
      </Link>

      <button className="button" onClick={() => toggleNightMode()}>
        {nightMode ? "🌌" : "🌞"}
      </button>
    </header>
  );
};
