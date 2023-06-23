import "./Login.css";

// react-router-dom

import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Contexts

import { useShow } from "../../contexts/ShowContext";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigateTo } from "../../contexts/NavigateToContext";
import { useShowRecover } from "../../contexts/ShowRecover";
// Fetchs

import { logInUserService } from "../../services/api";

export const Login = () => {
  const navigate = useNavigate();

  const [show, setShow] = useShow();
  const { login } = useAuth();
  const [navigateTo, setNavigateTo] = useNavigateTo();
  const [showRecover, setShowRecover] = useShowRecover();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      const data = await logInUserService({ email, password });

      login(data.token);
      setShow(!show);

      navigateTo ? navigate(navigateTo) : "";
      setNavigateTo("");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      <section onClick={(e) => e.stopPropagation()} className="login">
        <h2 className="title">Inicia Sesión</h2>
        <form className="login-form" onSubmit={handleForm}>
          <fieldset className="fieldset">
            <label className="label" htmlFor="email">
              Correo Electrónico:
            </label>
            <input
              placeholder="example@mail.com"
              className="input"
              type="email"
              name="email"
              id="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </fieldset>

          <fieldset className="fieldset">
            <label className="label" htmlFor="pass">
              Contraseña:
            </label>
            <input
              placeholder="Introduce tu contraseña"
              className="input"
              type="password"
              name="pass"
              id="current-password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </fieldset>

          <button className="button">Continuar</button>
          {error ? <p className="error">{error}</p> : null}
        </form>
        <p
          onClick={(e) => {
            e.stopPropagation();
            setShowRecover(!showRecover);
            setShow(!show);
          }}
        >
          ¿Has olvidado tu contraseña?
        </p>
      </section>
    </>
  );
};
