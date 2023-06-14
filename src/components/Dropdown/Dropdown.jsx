import { useState } from "react";
import { useShow } from "../../context/ShowContext";
import "./Dropdown.css";

export const Dropdown = ({ icon, children }) => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useShow();

  return (
    <section className={`dropdown ${open ? "open" : "close"}`}>
      <button className="button" onClick={() => setOpen(!open)}>
        {icon}
      </button>
      <div className="dropdown-body" onClick={() => setShow(!show)}>
        {children}
      </div>
    </section>
  );
};
