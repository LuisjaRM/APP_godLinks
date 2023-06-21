import React, { useState } from "react";
import { useContext } from "react";

const OpenContext = React.createContext();

export const OpenProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <OpenContext.Provider value={[open, setOpen]}>
      {children}
    </OpenContext.Provider>
  );
};

export const useOpen = () => useContext(OpenContext);
