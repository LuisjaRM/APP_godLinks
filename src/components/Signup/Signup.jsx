import "./Signup.css";

// React

import { useState } from "react";

// Contexts

import { useShowLogin } from "../../contexts/ShowLoginContext";
import { useShowVerify } from "../../contexts/ShowVerifyContext";

// Fetchs

import { registerUserService } from "../../services/api";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [user, setUser] = useState("");
  const [error, setError] = useState("");

  const [showLogin, setShowLogin] = useShowLogin();
  const [showVerify, setShowVerify] = useShowVerify();

  // Handle Form

  const handleForm = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (pass1 !== pass2) {
      setError("Las contraseñas no coinciden");
      return;
    }

    // Fetch

    try {
      await registerUserService({ email, password: pass1, user });
      setShowVerify(!showVerify);
      setShowLogin(!showLogin);
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

      <form className="form" onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="signup-email">Correo electrónico:</label>
          <input
            placeholder="example@mail.com"
            type="email"
            id="signup-email"
            name="signup-email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="signup-password">Contraseña:</label>
          <input
            placeholder="Introduce tu contraseña"
            type="password"
            id="signup-password"
            name="signup-password"
            value={pass1}
            required
            onChange={(e) => setPass1(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="signup-confirm-password">Repetir contraseña:</label>
          <input
            placeholder="Repite tu contraseña"
            type="password"
            id="signup-confirm-password"
            name="signup-confirm-password"
            value={pass2}
            required
            onChange={(e) => setPass2(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="signup-user">Nombre de usuario:</label>
          <input
            placeholder="Introduce nombre de usuario"
            type="text"
            id="signup-user"
            name="signup-user"
            value={user}
            required
            onChange={(e) => setUser(e.target.value)}
          />
        </fieldset>

        <button className="button signup-button">Continuar</button>
      </form>

      {error ? <p className="error">⚠️ {error}</p> : null}
    </section>
  );
};
