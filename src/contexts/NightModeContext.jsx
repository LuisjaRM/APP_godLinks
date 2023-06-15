import React, { useState } from "react";
import { useContext } from "react";

const NightModeContext = React.createContext();

export const NightModeProvider = ({ children }) => {
  const [nightMode, setNightMode] = useState(false);

  const toggle = () => setNightMode(!nightMode);

  return (
    <NightModeContext.Provider value={[nightMode, toggle]}>
      {children}
    </NightModeContext.Provider>
  );
};

export const useNightMode = () => useContext(NightModeContext);
