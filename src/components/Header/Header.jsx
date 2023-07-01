import "./Header.css";

// Components

import { UserButton } from "../UserButton/UserButton";
import { TitleAnimation } from "../TitleAnimation/TitleAnimation";
import { Search } from "../Search/Search";
import { SettingsButton } from "../SettingsButton/SettingsButton";



export const Header = () => {
  return (
    <header>
      <UserButton />

      <TitleAnimation />

      <section className="accesible-buttons">
        <Search />
        <SettingsButton />
      </section>
    </header>
  );
};
