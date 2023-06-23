import "./Header.css";

// Components

import { UserButton } from "../UserButton/UserButton";
import { TitleAnimation } from "../TitleAnimation/TitleAnimation";

// Contexts

import { useNightMode } from "../../contexts/NightModeContext";
//import { Search } from "../Search/Search";

export const Header = () => {
  const [nightMode, toggleNightMode] = useNightMode();

  return (
    <header>
      <UserButton />

      <TitleAnimation />

      {/* 
        <Search/>
      */}

      <button className="button" onClick={() => toggleNightMode()}>
        {nightMode ? "🌌" : "🌞"}
      </button>
    </header>
  );
};
