import "./LoginOrSignup.css";

// Components
import { Login } from "../Login/Login";
import { Signup } from "../Signup/Signup";

// Contexts

import { useAuth } from "../../contexts/AuthContext";
import { useShowLogin } from "../../contexts/ShowLoginContext";

export const LoginOrSignup = ({ isLogin, setIsLogin }) => {
  const { user } = useAuth();
  const [showLogin, setShowLogin] = useShowLogin();

  return (
    !user &&
    showLogin && (
      <>
        <section
          className="modal"
          onClick={() => {
            setIsLogin(true);
            setShowLogin(!showLogin);
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
