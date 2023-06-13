import { useState } from "react";
import "./Dropdown.css";

export const Dropdown = ({ icon, children }) => {
  const [show, setShow] = useState(false);

  return (
    <section className={`dropdown ${show ? "show" : "hide"}`}>
      <button onClick={() => setShow(!show)}>{icon}</button>
      <div className="dropdown-body">{children}</div>
    </section>
  );
};
