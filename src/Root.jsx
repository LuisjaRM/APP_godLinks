import { Outlet } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { useGetOffers } from "./hooks/useGetOffers";

export const Root = () => {
  const { offers } = useGetOffers();

  return (
    <>
      <Header />

      <main className={offers ? "filter-exists" : ""}>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};
