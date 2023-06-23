import React, { useState } from "react";
import { useContext } from "react";

const ShowRecoverContext = React.createContext();

export const ShowRecoverProvider = ({ children }) => {
  const [showRecover, setShowRecover] = useState(false);

  return (
    <ShowRecoverContext.Provider value={[showRecover, setShowRecover]}>
      {children}
    </ShowRecoverContext.Provider>
  );
};

export const useShowRecover = () => useContext(ShowRecoverContext);
