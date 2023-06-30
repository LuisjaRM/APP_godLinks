import "./Header.css";

// Components

import { UserButton } from "../UserButton/UserButton";
import { TitleAnimation } from "../TitleAnimation/TitleAnimation";
import { SettingsButton } from "../SettingsButton/SettingsButton";
//import { Search } from "../Search/Search";

export const Header = () => {
  return (
    <header>
      <UserButton />

      <TitleAnimation />

      {/* 
        <Search/>
      */}

      <SettingsButton />
      {/* {nightMode ? "🌙" : "🌞"} */}
    </header>
  );
};
