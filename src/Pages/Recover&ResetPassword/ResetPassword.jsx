import { useState } from "react";
import { ResetPasswordService } from "../../services/api";
import "./Recover&ResetPass.css";

export const ResetPassword = () => {
  const [recoverCode, setRecoverCode] = useState("");
  const [newPass1, setNewPass1] = useState("");
  const [newPass2, setNewPass2] = useState("");
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();
    if (newPass1 !== newPass2) {
      setError("Las contraseñas no coinciden");
      return;
    }
    try {
      await ResetPasswordService({
        recoverCode,
        newPassword: newPass1,
      });
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <section onClick={(e) => e.stopPropagation()} className="reset-password">
      <h1 className="title">Reestablece tu contraseña</h1>
      <form className="resetPassword-form" onSubmit={handleForm}>
        <fieldset className="fieldset">
          <label className="label" htmlFor="email">
            Código:
          </label>
          <input
            placeholder="Introduce código"
            className="input"
            type="text"
            name="recoverCode"
            id="recoverCode"
            value={recoverCode}
            required
            onChange={(e) => setRecoverCode(e.target.value)}
          />
        </fieldset>

        <fieldset className="fieldset">
          <label className="label" htmlFor="newPass1">
            Nueva Contraseña:
          </label>
          <input
            placeholder="Introduce tu contraseña"
            className="input"
            type="password"
            name="newPass1"
            id="newPass1"
            value={newPass1}
            required
            onChange={(e) => setNewPass1(e.target.value)}
          />
          <label className="label" htmlFor="newPass2">
            Nueva Contraseña:
          </label>
          <input
            placeholder="Introduce tu contraseña"
            className="input"
            type="password"
            name="newPass2"
            id="newPass2"
            value={newPass2}
            required
            onChange={(e) => setNewPass2(e.target.value)}
          />
        </fieldset>

        <button className="button">Continuar</button>
        {error ? <p className="error">{error}</p> : null}
      </form>
    </section>
  );
};
