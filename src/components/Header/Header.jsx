import "./Header.css";

// Contexts

import { useNightMode } from "../../contexts/NightModeContext";

// Components

import { UserButton } from "../UserButton/UserButton";
import { TitleAnimation } from "../TitleAnimation/TitleAnimation";
import { Search } from "../Search/Search";

export const Header = () => {
  const [nightMode, toggleNightMode] = useNightMode();

  return (
    <header>
      <UserButton />

      <TitleAnimation />

      <section className="accesible-buttons">
        <Search />
        <button
          className="button toggle-button"
          onClick={() => toggleNightMode()}
        >
          {nightMode ? "🌙" : "🌞"}
        </button>
      </section>
    </header>
  );
};
