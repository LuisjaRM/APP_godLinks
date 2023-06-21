import "./index.css";
import App from "./App.jsx";

// React

import React from "react";
import ReactDOM from "react-dom/client";

// Contexts

import { AuthContextProvider } from "./contexts/AuthContext.jsx";
import { NightModeProvider } from "./contexts/NightModeContext.jsx";
import { ShowProvider } from "./contexts/ShowContext.jsx";
import { NavigateToProvider } from "./contexts/NavigateToContext.jsx";
import { OpenProvider } from "./contexts/OpenContext";
import { IsLoginProvider } from "./contexts/IsLoginContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <NightModeProvider>
        <ShowProvider>
          <NavigateToProvider>
            <OpenProvider>
              <IsLoginProvider>
                <App />
              </IsLoginProvider>
            </OpenProvider>
          </NavigateToProvider>
        </ShowProvider>
      </NightModeProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
