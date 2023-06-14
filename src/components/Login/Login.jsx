import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logInUserService } from "../../services/api";
import { AuthContext } from "../../context/AuthContext";
import "./Login.css";

export const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      const token = await logInUserService({ email, password });

      login(token);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <section className="login">
      <h1 className="title">Inicia Sesión</h1>
      <form className="login-form" onSubmit={handleForm}>
        <fieldset className="fieldset">
          <label className="label" htmlFor="email">
            Correo Electrónico:
          </label>
          <input
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
