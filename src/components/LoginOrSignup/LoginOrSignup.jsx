import { useState } from "react";
import { Modal } from "../Modal/Modal";
import { Login } from "../Login/Login";
import { Signup } from "../Signup/Signup";
import "./LoginOrSignup.css";
import { ModalVerify } from "../ModalVerify/ModalVerify";
import { useShow } from "../../contexts/ShowContext";

export function LoginOrSignup() {
  const [show, setShow] = useShow();
  const [open, setOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <Modal>
        {isLogin ? <Login /> : <Signup open={open} setOpen={setOpen} />}

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
      <ModalVerify open={open} setOpen={setOpen}>
        <p>Te hemos enviado un correo para que verifiques tu cuenta 😃</p>
        <button
          className="button-modalVerify"
          onClick={(e) => {
            setOpen(!open);
            setShow(!show);
            setIsLogin(!isLogin);
            e.stopPropagation();
          }}
        >
          Continuar
        </button>
      </ModalVerify>
    </>
  );
}
