import { useContext, useState } from "react";
import { useShow } from "../../contexts/ShowContext";
import { AuthContext } from "../../contexts/AuthContext";
import "./Dropdown.css";

export const Dropdown = ({ icon, children }) => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useShow();
  const { user } = useContext(AuthContext);

  return (
    <section className={`dropdown ${open ? "open" : "close"}`}>
      {!user ? (
        <button
          className="button"
          onClick={() => {
            setShow(!show);
          }}
        >
          {!user ? icon : user.avatar}
        </button>
      ) : (
        <button
          onClick={() => {
            setOpen(!open);
          }}
        >
          {children}
        </button>
      )}
    </section>
  );
};
