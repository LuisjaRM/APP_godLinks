import React, { useState } from "react";
import { useContext } from "react";

const IsLoginContext = React.createContext();

export const IsLoginProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <IsLoginContext.Provider value={[isLogin, setIsLogin]}>
      {children}
    </IsLoginContext.Provider>
  );
};

export const useIsLogin = () => useContext(IsLoginContext);
