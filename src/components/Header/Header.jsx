import { Dropdown } from "../Dropdown/Dropdown";
import { useNightMode } from "../../contexts/NightModeContext";
import { UserNav } from "../UserNav/UserNav";
import { useAuth } from "../../contexts/AuthContext";
import "./Header.css";
import { TitleAnimation } from "../TitleAnimation/TitleAnimation";

export const Header = () => {
  const [nightMode, toggleNightMode] = useNightMode();
  const { user } = useAuth();

  return (
    <header>
      <Dropdown icon="🙇‍♀️">{user ? <UserNav /> : ""}</Dropdown>

      <TitleAnimation />

      <button className="button" onClick={() => toggleNightMode()}>
        {nightMode ? "🌌" : "🌞"}
      </button>
    </header>
  );
};
