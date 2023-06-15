import { Outlet } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { useGetOffers } from "./hooks/useGetOffers";
import { LoginOrSignup } from "./components/LoginOrSignup/LoginOrSignup";

export const Root = () => {
  const { offers } = useGetOffers();

  return (
    <>
      <Header />

      <main className={offers ? "filter-exists" : ""}>
        <Outlet />
        <LoginOrSignup />
      </main>

      <Footer />
    </>
  );
};
