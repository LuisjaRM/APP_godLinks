import React, { useState } from "react";
import { useContext } from "react";

const ShowContext = React.createContext();

export const ShowProvider = ({ children }) => {
  const [show, setShow] = useState(false);

  return (
    <ShowContext.Provider value={[show, setShow]}>
      {children}
    </ShowContext.Provider>
  );
};

export const useShow = () => useContext(ShowContext);
