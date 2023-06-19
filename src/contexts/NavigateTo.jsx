import React, { useState } from "react";
import { useContext } from "react";

const NavigateToContext = React.createContext();

export const NavigateToProvider = ({ children }) => {
  const [navigateTo, setNavigateTo] = useState();

  return (
    <NavigateToContext.Provider value={[navigateTo, setNavigateTo]}>
      {children}
    </NavigateToContext.Provider>
  );
};

export const useNavigateTo = () => useContext(NavigateToContext);
