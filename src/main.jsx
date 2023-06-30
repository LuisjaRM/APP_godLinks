import "./index.css";

// Material

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// App

import App from "./App.jsx";

// React

import React from "react";
import ReactDOM from "react-dom/client";
import { IntlProvider } from "react-intl";
import messagesEN from "./intl/en.json";
import messagesES from "./intl/es.json";

// Contexts

import { AuthContextProvider } from "./contexts/AuthContext.jsx";
import { NightModeProvider } from "./contexts/NightModeContext.jsx";
import { ShowLoginProvider } from "./contexts/ShowLoginContext";
import { ShowVerifyProvider } from "./contexts/ShowVerifyContext";
import { ShowRecoverProvider } from "./contexts/ShowRecoverContext";
import { ShowFilterProvider } from "./contexts/ShowFilter";
import { NavigateToProvider } from "./contexts/NavigateToContext.jsx";
import { ErrorProvider } from "./contexts/ErrorContext";
import { ShowSettingsProvider } from "./contexts/ShowSettingsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <IntlProvider locale="es" messages={messagesEN}>
      <AuthContextProvider>
        <NightModeProvider>
          <ShowLoginProvider>
            <ShowSettingsProvider>
              <ShowVerifyProvider>
                <ShowRecoverProvider>
                  <ShowFilterProvider>
                    <NavigateToProvider>
                      <ErrorProvider>
                        <App />
                      </ErrorProvider>
                    </NavigateToProvider>
                  </ShowFilterProvider>
                </ShowRecoverProvider>
              </ShowVerifyProvider>
            </ShowSettingsProvider>
          </ShowLoginProvider>
        </NightModeProvider>
      </AuthContextProvider>
    </IntlProvider>
  </React.StrictMode>
);
