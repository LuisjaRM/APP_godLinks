import { Link } from "react-router-dom";
<<<<<<< HEAD
import { Dropdown } from "../Dropdown/Dropdown";
=======
import { LoginButton } from "../LoginButton/LoginButton";
>>>>>>> main
import { useNightMode } from "../../contexts/NightModeContext";
import { UserNav } from "../UserNav/UserNav";
import { useAuth } from "../../contexts/AuthContext";
import "./Header.css";

export const Header = () => {
  const [nightMode, toggleNightMode] = useNightMode();
  const { user } = useAuth();

  return (
    <header>
<<<<<<< HEAD
      <Dropdown icon="🙇‍♀️">{user ? <UserNav /> : ""}</Dropdown>
=======
      <LoginButton />
>>>>>>> main

      <Link to="/">
        <h1 className="title">GODLINKS</h1>
      </Link>

      <button onClick={() => toggleNightMode()}>
        {nightMode ? "🌌" : "🌞"}
      </button>

      {/* <button className="button">👓</button> */}
    </header>
  );
};
