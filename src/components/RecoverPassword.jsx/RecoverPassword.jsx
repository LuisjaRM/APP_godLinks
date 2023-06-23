import "./RecoverPassword.css";

// react-router-dom

import { useState } from "react";

// Context

import { useShowRecover } from "../../contexts/ShowRecover";
import { useShow } from "../../contexts/ShowContext";

// Fetchs

import {
  RecoverPasswordService,
  ResetPasswordService,
} from "../../services/api";

export const RecoverPassword = () => {
  // Recover
  const [show, setShow] = useShow();
  const [showRecover, setShowRecover] = useShowRecover();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleFormRecover = async (e) => {
    e.preventDefault();

    try {
      await RecoverPasswordService({ email });
    } catch (error) {
      setError(error.message);
    }
  };

  // Reset

  const [showReset, setShowReset] = useState();
  const [recoverCode, setRecoverCode] = useState("");
  const [newPass1, setNewPass1] = useState("");
  const [newPass2, setNewPass2] = useState("");

  const handleFormReset = async (e) => {
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
    <>
      <section
        onClick={() => {
          setShowRecover(!showRecover);
        }}
        className={`modal-recover-password ${showRecover ? "show" : ""}`}
      >
        <section
          onClick={(e) => e.stopPropagation()}
          className={"recover-password"}
        >
          <h3 className="title">¿Has olvidado tu contraseña?</h3>
          <form className="recoverPassword-form" onSubmit={handleFormRecover}>
            <label className="label" htmlFor="email">
              Introduce tu correo para
            </label>
            <input
              placeholder="Introduce tu correo electrónico"
              className="input"
              type="email"
              name="email"
              id="recoverEmail"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              onClick={() => {
                setShowReset(!showReset);
                setShowRecover(!showRecover);
              }}
              className="button"
            >
              Continuar
            </button>
            {error ? <p className="error">{error}</p> : null}
          </form>
        </section>
      </section>

      <section
        onClick={() => {
          setShowReset(!showReset);
        }}
        className={`modal-reset-password ${showReset ? "show" : ""}`}
      >
        <section
          onClick={(e) => e.stopPropagation()}
          className="reset-password"
        >
          <h1 className="title">Reestablece tu contraseña</h1>
          <form className="resetPassword-form" onSubmit={handleFormReset}>
            <fieldset className="fieldset">
              <label className="label" htmlFor="email">
                Código:
              </label>
              <input
                placeholder="Introduce tu código de recuperación"
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
              <label className="label" htmlFor="new-password">
                Nueva Contraseña:
              </label>
              <input
                placeholder="Introduce tu contraseña"
                className="input"
                type="password"
                name="new-password"
                id="new-password"
                value={newPass1}
                required
                onChange={(e) => setNewPass1(e.target.value)}
              />
              <label className="label" htmlFor="repeat-password">
                Repetir nueva Contraseña:
              </label>
              <input
                placeholder="Introduce tu contraseña"
                className="input"
                type="password"
                name="repeat-password"
                id="repeat-password"
                value={newPass2}
                required
                onChange={(e) => setNewPass2(e.target.value)}
              />
            </fieldset>

            <button
              onClick={() => {
                setShow(!show);
                setShowReset(!showReset);
              }}
              className="button"
            >
              Continuar
            </button>
            {error ? <p className="error">{error}</p> : null}
          </form>
        </section>
      </section>
    </>
  );
};
