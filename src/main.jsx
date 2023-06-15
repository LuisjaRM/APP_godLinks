import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthContextProvider } from "./contexts/AuthContext.jsx";
import { NightModeProvider } from "./contexts/NightModeContext.jsx";
import { ShowProvider } from "./contexts/ShowContext.jsx";

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
