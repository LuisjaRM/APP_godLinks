import { useState } from "react";
import { Modal } from "../Modal/Modal";
import { Login } from "../Login/Login";
import { Signup } from "../Signup/Signup";
import "./LoginOrSignup.css";

export function LoginOrSignup() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Modal>
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
    </Modal>
  );
}
