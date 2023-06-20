import { useState } from "react";
import { registerUserService } from "../../services/api";
import { useShow } from "../../contexts/ShowContext";
import "./Signup.css";

export const Signup = ({ open, setOpen }) => {
  const [show, setShow] = useShow();

  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [user, setUser] = useState("");
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (pass1 !== pass2) {
      setError("Las contraseñas no coinciden");
      return;
    }

    try {
      await registerUserService({ email, password: pass1, user });
      setOpen(!open);
      setShow(!show);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <section
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="signup"
    >
      <h2 className="title">Regístrate</h2>
      <form className="signup-form" onSubmit={handleForm}>
        <fieldset className="fieldset">
          <label className="label" htmlFor="email">
            Correo electrónico:
          </label>
          <input
            placeholder="example@mail.com"
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
            placeholder="Introduce tu contraseña"
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
          <label className="label" htmlFor="pass2">
            Repetir contraseña:
          </label>
          <input
            placeholder="Repite tu contraseña"
            className="input"
            type="password"
            id="pass2"
            name="pass2"
            value={pass2}
            required
            onChange={(e) => setPass2(e.target.value)}
          />
        </fieldset>

        <fieldset className="fieldset">
          <label className="label" htmlFor="user">
            Nombre de usuario:
          </label>
          <input
            placeholder="Introduce nombre de usuario"
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
