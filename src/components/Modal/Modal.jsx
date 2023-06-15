import { useShow } from "../../contexts/ShowContext";
import "./Modal.css";

export function Modal({ children }) {
  const [show, setShow] = useShow();

  return (
    show && (
      <section onClick={() => setShow(!show)} className="modal-bg">
        <section className="modal-fg">{children}</section>
      </section>
    )
  );
}
