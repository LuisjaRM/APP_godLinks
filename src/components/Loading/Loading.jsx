import { useNightMode } from "../../contexts/NightModeContext";

import "./Loading.css";

export const Loading = () => {
  const [nightMode] = useNightMode();

  return (
    <>
      {nightMode === "night" ? (
        <section className="wrap">
          <h1 className="circle"></h1>
        </section>
      ) : (
        <section className="wrap-black">
          <h1 className="circle-black"></h1>
        </section>
      )}
    </>
  );
};
