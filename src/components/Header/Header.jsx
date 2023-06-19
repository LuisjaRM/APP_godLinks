import { Link } from "react-router-dom";
import { Dropdown } from "../Dropdown/Dropdown";
import { useNightMode } from "../../contexts/NightModeContext";
import { UserNav } from "../UserNav/UserNav";
import { useAuth } from "../../contexts/AuthContext";
import "./Header.css";

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
