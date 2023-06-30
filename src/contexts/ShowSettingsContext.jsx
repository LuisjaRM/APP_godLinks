import React, { useState } from "react";
import { useContext } from "react";

const ShowSettingsContext = React.createContext();

export const ShowSettingsProvider = ({ children }) => {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <ShowSettingsContext.Provider value={[showSettings, setShowSettings]}>
      {children}
    </ShowSettingsContext.Provider>
  );
};

export const useShowSettings = () => useContext(ShowSettingsContext);
