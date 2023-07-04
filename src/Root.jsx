// Intl

import { IntlProvider } from "react-intl";
import messagesEN from "./intl/en.json";
import messagesES from "./intl/es.json";

// React

import { Outlet } from "react-router-dom";
import { useState } from "react";

// Contexts

import { useLanguage } from "./contexts/LanguageContext";

// Components

import { Header } from "./components/Header/Header";
import { LoginOrSignup } from "./components/LoginOrSignup/LoginOrSignup";
import { VerifyUser } from "./components/VerifyUser/VerifyUser";
import { RecoverPassword } from "./components/RecoverPassword.jsx/RecoverPassword";
import { Footer } from "./components/Footer/Footer";
import { ScrollUp } from "./components/ScrollUp/ScrollUp";

export const Root = () => {
  const [isLogin, setIsLogin] = useState(true);

  // Intl

  const [language] = useLanguage();

  return (
    <IntlProvider
      locale={"es" || localStorage.getItem("language")}
      messages={language === "es" ? messagesES : messagesEN}
    >
      <Header />

      <main>
        <Outlet />
        <LoginOrSignup isLogin={isLogin} setIsLogin={setIsLogin} />
        <VerifyUser setIsLogin={setIsLogin} />
        <RecoverPassword />
      </main>

      <aside>
        <ScrollUp />
      </aside>

      <Footer />
    </IntlProvider>
  );
};
