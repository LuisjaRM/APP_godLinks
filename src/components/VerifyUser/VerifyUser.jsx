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
          <p>Te hemos enviado un correo para que verifiques tu cuenta</p>
          <div id="anim-wrapper">
            <div id="anim-bg">
              <div id="env-wrapper">
                <div className="speedline line1"></div>
                <div className="speedline line2"></div>
                <div className="speedline line3"></div>
                <i id="env" className="fas fa-envelope"></i>
              </div>
            </div>

            <div id="check-container">
              <div className="check-stroke1"></div>
              <div className="check-stroke2"></div>
            </div>
          </div>
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
