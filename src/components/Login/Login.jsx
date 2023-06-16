import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logInUserService } from "../../services/api";
import { useShow } from "../../contexts/ShowContext";
import { useAuth } from "../../contexts/AuthContext";
import "./Login.css";

export const Login = () => {
  const navigate = useNavigate();

  const [show, setShow] = useShow();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      const token = await logInUserService({ email, password });

      login(token.token);
      setShow(!show);

      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <section onClick={(e) => e.stopPropagation()} className="login">
      <h1 className="title">Inicia Sesión</h1>
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
            id="pass"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </fieldset>

        <button className="button">Continuar</button>
        {error ? <p className="error">{error}</p> : null}
      </form>
    </section>
  );
};
