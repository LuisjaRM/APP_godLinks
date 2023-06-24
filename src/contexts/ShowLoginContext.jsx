import React, { useState } from "react";
import { useContext } from "react";

const ShowLoginContext = React.createContext();

export const ShowLoginProvider = ({ children }) => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <ShowLoginContext.Provider value={[showLogin, setShowLogin]}>
      {children}
    </ShowLoginContext.Provider>
  );
};

export const useShowLogin = () => useContext(ShowLoginContext);
