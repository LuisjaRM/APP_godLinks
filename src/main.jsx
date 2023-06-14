import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthContextProviderComponent } from "./context/AuthContext.jsx";
import { NightModeProvider } from "./context/NightModeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NightModeProvider>
      <AuthContextProviderComponent>
        <App />
      </AuthContextProviderComponent>
    </NightModeProvider>
  </React.StrictMode>
);
