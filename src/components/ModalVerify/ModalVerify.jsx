import "./ModalVerify.css";

export function ModalVerify({ open, setOpen, children }) {
  return (
    open && (
      <section onClick={() => setOpen(!open)} className="modal-bg2">
        <section className="modal-fg2">{children}</section>
      </section>
    )
  );
}
