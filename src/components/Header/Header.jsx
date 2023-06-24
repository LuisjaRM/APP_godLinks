import "./Header.css";

// Components

import { UserButton } from "../UserButton/UserButton";
import { UserNav } from "../UserNav/UserNav";
import { TitleAnimation } from "../TitleAnimation/TitleAnimation";
//import { Search } from "../Search/Search";

// Contexts

import { useNightMode } from "../../contexts/NightModeContext";

export const Header = () => {
  const [nightMode, toggleNightMode] = useNightMode();

  return (
    <header>
      <UserButton />
      <UserNav />

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
