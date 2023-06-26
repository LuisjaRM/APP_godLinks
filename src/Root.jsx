// react-router-dom

import { Outlet } from "react-router-dom";
import { useState } from "react";

// Components

import { Header } from "./components/Header/Header";
import { Filter } from "./components/Filter/Filter";
import { LoginOrSignup } from "./components/LoginOrSignup/LoginOrSignup";
import { VerifyUser } from "./components/VerifyUser/VerifyUser";
import { RecoverPassword } from "./components/RecoverPassword.jsx/RecoverPassword";
import { Footer } from "./components/Footer/Footer";

export const Root = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      <Header />

      <aside>
        <Filter />
      </aside>

      <main>
        <Outlet />
        <LoginOrSignup isLogin={isLogin} setIsLogin={setIsLogin} />
        <VerifyUser setIsLogin={setIsLogin} />
        <RecoverPassword />
      </main>

      <Footer />
    </>
  );
};
