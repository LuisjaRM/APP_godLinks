import "./Header.css";

// Components

import { UserButton } from "../UserButton/UserButton";
import { TitleAnimation } from "../TitleAnimation/TitleAnimation";
import { Search } from "../Search/Search";
import { SettingsButton } from "../SettingsButton/SettingsButton";

// Contexts

import { useNightMode } from "../../contexts/NightModeContext";

export const Header = () => {
  // Theme Context
  const [nightMode] = useNightMode();

  return (
    <header className={nightMode === "day" ? "light" : ""}>
      <UserButton />

      <TitleAnimation />

      <section className="accesible-buttons">
        <Search />
        <SettingsButton />
      </section>
    </header>
  );
};
