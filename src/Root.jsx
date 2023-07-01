// React

import { Outlet } from "react-router-dom";
import { useState } from "react";

// Intl

import { IntlProvider } from "react-intl";
import messagesEN from "./intl/en.json";
import messagesES from "./intl/es.json";

// Contexts

import { useShowFilter } from "./contexts/ShowFilter";
import { useLanguage } from "./contexts/LanguageContext";

// Components

import { Header } from "./components/Header/Header";
import { Filter } from "./components/Filter/Filter";
import { LoginOrSignup } from "./components/LoginOrSignup/LoginOrSignup";
import { VerifyUser } from "./components/VerifyUser/VerifyUser";
import { RecoverPassword } from "./components/RecoverPassword.jsx/RecoverPassword";
import { Footer } from "./components/Footer/Footer";

export const Root = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showFilter] = useShowFilter();

  // Intl

  const [language] = useLanguage();

  return (
    <>
      <IntlProvider
        locale={language}
        messages={language === "es" ? messagesES : messagesEN}
      >
        <Header />

        {showFilter && (
          <aside>
            <Filter />
          </aside>
        )}

        <main>
          <Outlet />
          <LoginOrSignup isLogin={isLogin} setIsLogin={setIsLogin} />
          <VerifyUser setIsLogin={setIsLogin} />
          <RecoverPassword />
        </main>

        <Footer />
      </IntlProvider>
    </>
  );
};
