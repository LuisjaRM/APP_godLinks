import "./Header.css";

// react-router-dom

import { Link } from "react-router-dom";

// Components

import { Dropdown } from "../Dropdown/Dropdown";
import { UserNav } from "../UserNav/UserNav";

// Contexts

import { useNightMode } from "../../contexts/NightModeContext";
import { useAuth } from "../../contexts/AuthContext";

export const Header = () => {
  const [nightMode, toggleNightMode] = useNightMode();
  const { user } = useAuth();

  return (
    <header>
      <Dropdown icon="🙇‍♀️">{user ? <UserNav /> : ""}</Dropdown>

      <Link to="/">
        <h1 className="title">GODLINKS</h1>
      </Link>

      <button className="button" onClick={() => toggleNightMode()}>
        {nightMode ? "🌌" : "🌞"}
      </button>

      {/* <button className="button">👓</button> */}
    </header>
  );
};
