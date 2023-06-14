import { useState } from "react";
import { Modal } from "../../components/Modal/Modal";
import { Login } from "../../components/Login/Login";
import { Signup } from "../../components/Signup/Signup";
import "./LoginOrSignup.css";

export function LoginOrSignup() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Modal>
      {isLogin ? <Login /> : <Signup />}

      <a className="change-button" onClick={() => setIsLogin(!isLogin)}>
        {isLogin
          ? "Aún no tienes cuenta? Regístrate"
          : "Ya tienes cuenta? Inicia sesión"}
      </a>
    </Modal>
  );
}
