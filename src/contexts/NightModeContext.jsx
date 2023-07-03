import React, { useEffect, useState } from "react";
import { useContext } from "react";

const NightModeContext = React.createContext();

export const NightModeProvider = ({ children }) => {
  const [nightMode, toggleNightMode] = useState(localStorage.getItem("Theme"));

  useEffect(() => {
    localStorage.setItem("Theme", nightMode);
  }, [nightMode]);

  return (
    <NightModeContext.Provider value={[nightMode, toggleNightMode]}>
      {children}
    </NightModeContext.Provider>
  );
};

export const useNightMode = () => useContext(NightModeContext);
