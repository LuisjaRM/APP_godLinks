import "./VerifyUser.css";

// Contexts

import { useShowLogin } from "../../contexts/ShowLoginContext";
import { useShowVerify } from "../../contexts/ShowVerifyContext";

export const VerifyUser = ({ setIsLogin }) => {
  const [showLogin, setShowLogin] = useShowLogin();
  const [showVerify, setShowVerify] = useShowVerify();

  return (
    showVerify && (
      <section
        className="modal-back dark"
        onClick={(e) => {
          e.stopPropagation();
          setIsLogin(true);
          setShowVerify(!showVerify);
          setShowLogin(!showLogin);
        }}
      >
        <section className="modal-body little verify">
          <p>Te hemos enviado un correo para que verifiques tu cuenta 😃</p>

          <button
            className="button verify-button"
            onClick={(e) => {
              e.stopPropagation();
              setIsLogin(true);
              setShowVerify(!showVerify);
              setShowLogin(!showLogin);
            }}
          >
            Continuar
          </button>
        </section>
      </section>
    )
  );
};
