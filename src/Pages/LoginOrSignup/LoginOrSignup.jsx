import { useState } from "react";
import Login from "../../components/LoginOrSignup/Login.jsx";
import Signup from "../../components/LoginOrSignup/Signup.jsx";

export function LoginOrSignup() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <section>
      {isLogin ? <Login /> : <Signup />}
      <a onClick={() => setIsLogin(!isLogin)}>
        {isLogin
          ? "Aún no tienes cuenta? Regístrate"
          : "Ya tienes cuenta? Inicia sesión"}
      </a>
    </section>
  );
}
