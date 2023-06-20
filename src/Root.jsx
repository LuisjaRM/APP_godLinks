import { Outlet } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Filter } from "./components/Filter/Filter";
import { LoginOrSignup } from "./components/LoginOrSignup/LoginOrSignup";
import { Search } from "./components/Search/Search";
import { PostOffer } from "./components/PostOffer/PostOffer";


export const Root = () => {
  return (
    <>
      <Header />

      <aside>
        <Filter />
      </aside>

      

      <main>
        <Search/>
        <Outlet />
        <LoginOrSignup />
      </main>

      <aside>
        <PostOffer />
      </aside>

      <Footer />
    </>
  );
};
