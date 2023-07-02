import "./RecoverPassword.css";

// React

import { useState } from "react";
import {FormattedMessage} from 'react-intl';

// Context

import { useShowLogin } from "../../contexts/ShowLoginContext";
import { useShowRecover } from "../../contexts/ShowRecoverContext";

// Fetchs

import {
  RecoverPasswordService,
  ResetPasswordService,
} from "../../services/api";

export const RecoverPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const [showLogin, setShowLogin] = useShowLogin();
  const [showRecover, setShowRecover] = useShowRecover();

  // Show Recover Code Modal

  const [showRecoverCodeModal, setShowRecoverCodeModal] = useState(false);

  // Handle Form

  const handleFormRecover = async (e) => {
    e.preventDefault();

    // Fetch

    try {
      await RecoverPasswordService({ email });

      setShowRecoverCodeModal(!showRecoverCodeModal);

      setTimeout(() => {
        setShowRecoverCodeModal(false);
        setShowReset(!showReset);
        setShowRecover(!showRecover);
      }, 2000);
    } catch (error) {
      setError(error.message);
    }
  };

  // Reset

  const [showReset, setShowReset] = useState();
  const [recoverCode, setRecoverCode] = useState("");
  const [newPass1, setNewPass1] = useState("");
  const [newPass2, setNewPass2] = useState("");

  // Show Recover Code Modal

  const [showConfirmModal, setShowConfirmModal] = useState(false);

  // Handle Form

  const handleFormReset = async (e) => {
    e.preventDefault();

    if (!recoverCode) {
      setError(<FormattedMessage id="verification-code"/>);
      return;
    }

    if (!newPass1 || !newPass2) {
      setError(<FormattedMessage id="enter-password"/>);
      return;
    }

    if (newPass1 !== newPass2) {
      setError(<FormattedMessage id="password-match"/>);
      return;
    }

    // Fetch

    try {
      await ResetPasswordService({
        recoverCode,
        newPassword: newPass1,
      });

      setShowConfirmModal(!showConfirmModal);

      setTimeout(() => {
        setShowConfirmModal(false);
        setShowLogin(!showLogin);
        setShowReset(!showReset);
        setError("");
      }, 2000);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <section
        onClick={() => {
          setEmail("");
          setShowRecover(false);
          setShowReset(false);
        }}
        className={`modal-recover ${
          showRecover || showReset ? "modal-back dark" : ""
        }
       `}
      >
        <section
          onClick={(e) => e.stopPropagation()}
          className={`modal-body little recover ${!showRecover && "hide"}`}
        >
          <h2 className="title"><FormattedMessage id="password-reset"/></h2>

          <form className="form" onSubmit={handleFormRecover}>
            <fieldset>
              <label htmlFor="recover-email"><FormattedMessage id="email"/></label>
              <input
                placeholder="example@mail.com"
                type="email"
                name="recover-email"
                id="recover-email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </fieldset>

            <button className="button recover-button"><FormattedMessage id="continue"/></button>
          </form>

          {error ? <p className="error">{error}</p> : null}
        </section>

        <section
          onClick={(e) => e.stopPropagation()}
          className={`modal-body recover ${!showReset && "hide"}`}
        >
          <h1 className="title"><FormattedMessage id="password-reset"/></h1>
          <form className="form" onSubmit={handleFormReset}>
            <fieldset>
              <label htmlFor="recoverCode">Código:</label>
              <input
                placeholder="Código de recuperación"
                type="text"
                name="recoverCode"
                id="recoverCode"
                value={recoverCode}
                required
                onChange={(e) => setRecoverCode(e.target.value)}
              />
            </fieldset>

            <fieldset>
              <label htmlFor="reset-password"><FormattedMessage id="enter-password"/></label>
              <input
                placeholder="Introduce tu contraseña"
                type="password"
                name="reset-password"
                id="reset-password"
                value={newPass1}
                required
                onChange={(e) => setNewPass1(e.target.value)}
              />
            </fieldset>

            <fieldset>
              <label htmlFor="reset-confirm-password">
              <FormattedMessage id="re-enterpassword"/>
              </label>
              <input
                placeholder="Introduce tu contraseña"
                type="password"
                name="reset-confirm-password"
                id="reset-confirm-password"
                value={newPass2}
                required
                onChange={(e) => setNewPass2(e.target.value)}
              />
            </fieldset>

            <button className="button reset-button"><FormattedMessage id="continue"/></button>
          </form>

          {error ? <p className="error">⚠️ {error}</p> : null}
        </section>
      </section>

      {showRecoverCodeModal && (
        <section className="modal-back dark">
          <section className="modal-body little verify">
            <p><FormattedMessage id="email-verification"/></p>
          </section>
        </section>
      )}

      {showConfirmModal && (
        <section className="modal-back dark">
          <section className="modal-body little verify">
            <p><FormattedMessage id="password-reset-confirmation"/></p>
          </section>
        </section>
      )}
    </>
  );
};
