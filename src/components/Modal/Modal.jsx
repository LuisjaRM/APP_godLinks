import { useAuth } from "../../contexts/AuthContext";
import { useShow } from "../../contexts/ShowContext";
import "./Modal.css";

export function Modal({ setIsLogin, children }) {
  const [show, setShow] = useShow();
  const { user } = useAuth();

  return (
    !user &&
    show && (
      <section
        onClick={() => {
          setIsLogin(true);
          setShow(!show);
        }}
        className="modal-bg"
      >
        <section className="modal-fg">{children}</section>
      </section>
    )
  );
}
