import "./LoginOrSignup.css";

import { FormattedMessage } from "react-intl";

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
          role="button"
          className="modal-back dark"
          onClick={() => {
            setIsLogin(true);
            setShowLogin(!showLogin);
          }}
        >
          <section className="modal-body" onClick={(e) => e.stopPropagation()}>
            {isLogin ? <Login /> : <Signup />}

            <p
              role="button"
              className="change-button"
              onClick={(e) => {
                setIsLogin(!isLogin);
                e.stopPropagation();
              }}
            >
              {isLogin ? (
                <FormattedMessage id="newuser?" />
              ) : (
                <FormattedMessage id="login" />
              )}
            </p>
          </section>
        </section>
      </>
    )
  );
};
