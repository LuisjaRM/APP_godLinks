import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { ShowProvider } from "./context/ShowContext.jsx";
import { NightModeProvider } from "./context/NightModeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
    <NightModeProvider>
      <ShowProvider>
        <App />
      </ShowProvider>
  </NightModeProvider>
    </AuthContextProvider>
    </React.StrictMode>
);




    


