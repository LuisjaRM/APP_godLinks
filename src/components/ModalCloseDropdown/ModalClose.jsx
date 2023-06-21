import "./ModalClose.css";
import { useShow } from "../../contexts/ShowContext";

export function ModalClose({ children }) {
  const [show, setShow] = useShow();

  return (
    open && (
      <section
        onClick={(e) => {
          e.stopPropagation();
          setShow(!show);
        }}
        className="modal-bg3"
      >
        <section className="modal-fg3">{children}</section>
      </section>
    )
  );
}
