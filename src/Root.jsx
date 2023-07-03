// Intl

import { IntlProvider } from "react-intl";
import messagesEN from "./intl/en.json";
import messagesES from "./intl/es.json";

// React

import { Outlet } from "react-router-dom";
import { useRef, useState } from "react";

// Contexts

import { useShowFilter } from "./contexts/ShowFilter";
import { useLanguage } from "./contexts/LanguageContext";

// Components

import { Header } from "./components/Header/Header";
import { Filter } from "./components/Filter/Filter";
import { PlataformFilter } from "./components/PlataformFilter/PlataformFilter";
import { LoginOrSignup } from "./components/LoginOrSignup/LoginOrSignup";
import { VerifyUser } from "./components/VerifyUser/VerifyUser";
import { RecoverPassword } from "./components/RecoverPassword.jsx/RecoverPassword";
import { Footer } from "./components/Footer/Footer";

export const Root = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showFilter] = useShowFilter();

  // Scroll

  const bodyRef = useRef(null);

  // bodyRef.current.scrollBy(0, 1000);

  // Intl

  const [language] = useLanguage();

  return (
    <IntlProvider
      locale={"es" || localStorage.getItem("language")}
      messages={language === "es" ? messagesES : messagesEN}
    >
      <section ref={bodyRef} className="body">
        <Header />

        {showFilter && (
          <aside>
            <Filter />
            <PlataformFilter />
          </aside>
        )}

        <main>
          <Outlet />
          <LoginOrSignup isLogin={isLogin} setIsLogin={setIsLogin} />
          <VerifyUser setIsLogin={setIsLogin} />
          <RecoverPassword />
        </main>

        <Footer />
      </section>
    </IntlProvider>
  );
};
