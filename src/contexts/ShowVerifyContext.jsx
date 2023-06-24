import React, { useState } from "react";
import { useContext } from "react";

const ShowVerifyContext = React.createContext();

export const ShowVerifyProvider = ({ children }) => {
  const [showVerify, setShowVerify] = useState(false);

  return (
    <ShowVerifyContext.Provider value={[showVerify, setShowVerify]}>
      {children}
    </ShowVerifyContext.Provider>
  );
};

export const useShowVerify = () => useContext(ShowVerifyContext);
