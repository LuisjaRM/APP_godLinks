import { useShow } from "../../context/ShowContext";
import "./Modal.css";

export function Modal({ children }) {
  const [show] = useShow();

  return (
    show && (
      <div className="modal-bg">
        <div className="modal-fg">{children}</div>
      </div>
    )
  );
}
