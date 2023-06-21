import "./Recover&ResetPass.css";

// react-router-dom

import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Fetchs

import { RecoverPasswordService } from "../../services/api";

export const RecoverPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      await RecoverPasswordService({ email });
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <section onClick={(e) => e.stopPropagation()} className="recover-password">
      <h3 className="title">¿Has olvidado tu contraseña?</h3>
      <form className="recoverPassword-form" onSubmit={handleForm}>
        <label className="label" htmlFor="email">
          Introduce tu correo para
        </label>
        <input
          placeholder="Introduce tu correo electrónico"
          className="input"
          type="email"
          name="email"
          id="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={() => {
            navigate("/resetPass");
          }}
          className="button"
        >
          Continuar
        </button>
        {error ? <p className="error">{error}</p> : null}
      </form>
    </section>
  );
};
