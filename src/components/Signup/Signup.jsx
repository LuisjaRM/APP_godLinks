import { useState } from "react";
import { registerUserService } from "../../services/api";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

export const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const [user, setUser] = useState("");
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      await registerUserService({ email, password: pass1, user });
      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <section className="signup">
      <h1 className="title">Registrate</h1>
      <form className="signup-form" onSubmit={handleForm}>
        <fieldset className="fieldset">
          <label className="label" htmlFor="email">
            Correo Electrónico:
          </label>
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </fieldset>

        <fieldset className="fieldset">
          <label className="label" htmlFor="pass1">
            Contraseña:
          </label>
          <input
            className="input"
            type="password"
            id="pass1"
            name="pass1"
            value={pass1}
            required
            onChange={(e) => setPass1(e.target.value)}
          />
        </fieldset>

        <fieldset className="fieldset">
          <label className="label" htmlFor="user">
            Nombre de Usuario:
          </label>
          <input
            className="input"
            type="text"
            id="user"
            name="user"
            value={user}
            required
            onChange={(e) => setUser(e.target.value)}
          />
        </fieldset>

        <button className="button">Continuar</button>
        {error ? <p className="error">{error}</p> : null}
      </form>
    </section>
  );
};
