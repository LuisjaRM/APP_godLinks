import React, { useState } from "react";
import { useContext } from "react";

const ShowFilterContext = React.createContext();

export const ShowFilterProvider = ({ children }) => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <ShowFilterContext.Provider value={[showFilter, setShowFilter]}>
      {children}
    </ShowFilterContext.Provider>
  );
};

export const useShowFilter = () => useContext(ShowFilterContext);
