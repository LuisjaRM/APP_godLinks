import { Outlet } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Filter } from "./components/Filter/Filter";
import { LoginOrSignup } from "./components/LoginOrSignup/LoginOrSignup";

export const Root = () => {
  return (
    <>
      <Header />

      <aside>
        <Filter />
      </aside>

      <main>
        <Outlet />
        <LoginOrSignup />
      </main>

      <Footer />
    </>
  );
};
