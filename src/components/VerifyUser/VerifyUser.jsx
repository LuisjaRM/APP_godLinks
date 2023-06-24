import "./VerifyUser.css";

// Contexts

import { useShowLogin } from "../../contexts/ShowLoginContext";
import { useShowVerify } from "../../contexts/ShowVerifyContext";
import { useIsLogin } from "../../contexts/IsLoginContext";

export const VerifyUser = () => {
  const [showLogin, setShowLogin] = useShowLogin();
  const [showVerify, setShowVerify] = useShowVerify();
  const [, setIsLogin] = useIsLogin();

  return (
    showVerify && (
      <section className="modal">
        <section className="verify-body">
          <p>Te hemos enviado un correo para que verifiques tu cuenta 😃</p>
          <button
            className="verify-button"
            onClick={(e) => {
              setIsLogin(true);
              setShowVerify(!showVerify);
              setShowLogin(!showLogin);
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
