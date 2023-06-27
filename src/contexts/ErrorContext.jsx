import React, { useState } from "react";
import { useContext } from "react";

const ErrorContext = React.createContext();

export const ErrorProvider = ({ children }) => {
  const [error, setError] = useState("");

  return (
    <ErrorContext.Provider value={[error, setError]}>
      {children}
    </ErrorContext.Provider>
  );
};

export const useError = () => useContext(ErrorContext);
