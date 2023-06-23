import "./LoginOrSignup.css";

// Components
import { Login } from "../Login/Login";
import { Signup } from "../Signup/Signup";

// Contexts

import { useAuth } from "../../contexts/AuthContext";
import { useShow } from "../../contexts/ShowContext";
import { useIsLogin } from "../../contexts/IsLoginContext";

export const LoginOrSignup = () => {
  const { user } = useAuth();
  const [show, setShow] = useShow();
  const [isLogin, setIsLogin] = useIsLogin(true);

  return (
    !user &&
    show && (
      <>
        <section
          className="modal"
          onClick={() => {
            setIsLogin(true);
            setShow(!show);
          }}
        >
          <section className="modal-body">
            {isLogin ? <Login /> : <Signup />}

            <a
              className="change-button"
              onClick={(e) => {
                setIsLogin(!isLogin);
                e.stopPropagation();
              }}
            >
              {isLogin
                ? "Aún no tienes cuenta? Regístrate"
                : "Ya tienes cuenta? Inicia sesión"}
            </a>
          </section>
        </section>
      </>
    )
  );
};
