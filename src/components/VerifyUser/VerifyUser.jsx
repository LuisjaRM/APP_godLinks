import "./VerifyUser.css";

// Contexts

import { useShow } from "../../contexts/ShowContext";
import { useOpen } from "../../contexts/OpenContext";
import { useIsLogin } from "../../contexts/IsLoginContext";

export const VerifyUser = () => {
  const [show, setShow] = useShow();
  const [open, setOpen] = useOpen();
  const [isLogin, setIsLogin] = useIsLogin();

  return (
    open && (
      <section className="modal">
        <section className="modal-body">
          <p>Te hemos enviado un correo para que verifiques tu cuenta 😃</p>
          <button
            className="button-modalVerify"
            onClick={(e) => {
              setIsLogin(!isLogin);
              setOpen(!open);
              setShow(!show);
              e.stopPropagation();
            }}
          >
            Continuar
          </button>
        </section>
      </section>
    )
  );
};
