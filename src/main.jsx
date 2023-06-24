import "./index.css";
import App from "./App.jsx";

// React

import React from "react";
import ReactDOM from "react-dom/client";

// Contexts

import { AuthContextProvider } from "./contexts/AuthContext.jsx";
import { NightModeProvider } from "./contexts/NightModeContext.jsx";
import { ShowLoginProvider } from "./contexts/ShowLoginContext";
import { ShowVerifyProvider } from "./contexts/ShowVerifyContext";
import { ShowRecoverProvider } from "./contexts/ShowRecoverContext";
import { IsLoginProvider } from "./contexts/IsLoginContext";
import { NavigateToProvider } from "./contexts/NavigateToContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <NightModeProvider>
        <ShowLoginProvider>
          <ShowVerifyProvider>
            <ShowRecoverProvider>
              <IsLoginProvider>
                <NavigateToProvider>
                  <App />
                </NavigateToProvider>
              </IsLoginProvider>
            </ShowRecoverProvider>
          </ShowVerifyProvider>
        </ShowLoginProvider>
      </NightModeProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
