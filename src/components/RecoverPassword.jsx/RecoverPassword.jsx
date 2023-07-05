import "./RecoverPassword.css";

// Intl

import { FormattedMessage } from "react-intl";

// Material

import { SvgIcon } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";

// React

import { useState } from "react";

// Context

import { useShowLogin } from "../../contexts/ShowLoginContext";
import { useShowRecover } from "../../contexts/ShowRecoverContext";
import { useLanguage } from "../../contexts/LanguageContext";

// Fetchs

import {
  RecoverPasswordService,
  ResetPasswordService,
} from "../../services/api";

export const RecoverPassword = ({ isLogin, setIsLogin }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isAnimated, setIsAnimated] = useState();

  const [showLogin, setShowLogin] = useShowLogin();
  const [showRecover, setShowRecover] = useShowRecover();

  // Intl Context

  const [language] = useLanguage();

  // Show Recover Code Modal

  const [showRecoverCodeModal, setShowRecoverCodeModal] = useState(false);

  // Animation email
  showRecoverCodeModal &&
    setTimeout(() => {
      setIsAnimated(true);
    }, 1500);

  showRecoverCodeModal &&
    setTimeout(() => {
      setIsLogin(!isLogin);
      setShowLogin(!showLogin);
    }, 5000);

  !showRecoverCodeModal &&
    setTimeout(() => {
      setIsAnimated(false);
    }, 1500);

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
        setEmail("");
      }, 3000);
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
      setError(<FormattedMessage id="verification-code" />);
      return;
    }

    if (!newPass1 || !newPass2) {
      setError(<FormattedMessage id="enter-password" />);
      return;
    }

    if (newPass1 !== newPass2) {
      setError(<FormattedMessage id="password-match" />);
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
        setRecoverCode("");
        setNewPass1("");
        setNewPass2("");
      }, 3000);
    } catch (error) {
      setError(error.message);
    }
  };

  // See Password

  const [seePassword, setSeePassword] = useState(false);
  const [seeRepeatPassword, setSeeRepeatPassword] = useState(false);

  // Error messages

  error === `"password" length must be at least 8 characters long` &&
    setError(<FormattedMessage id="password-8char-error" />);

  error ===
    `"password" length must be less than or equal to 20 characters long` &&
    setError(<FormattedMessage id="password-20char-error" />);

  error === `"password" should not contain white spaces` &&
    setError(<FormattedMessage id="password-white-spaces-error" />);

  error === `"password" should contain at least 1 special character` &&
    setError(<FormattedMessage id="password-specialChar-error" />);

  error === `"password" should contain at least 1 uppercase character` &&
    setError(<FormattedMessage id="password-uppercaseChar-error" />);

  error === `"password" should contain at least 1 numeric character` &&
    setError(<FormattedMessage id="password-numChar-error" />);

  // Este error no apaece
  // error === `"user" length must be at least 4 characters long` && setError(<FormattedMessage id="username-4char-error" />);

  error === "La contraseña no puede coincidir con el nombre de usuario" &&
    setError(<FormattedMessage id="password-user-match" />);

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
          <h2 className="title">
            <FormattedMessage id="password-reset" />
          </h2>

          <form className="form" onSubmit={handleFormRecover}>
            <fieldset>
              <label htmlFor="recover-email">
                <FormattedMessage id="email" />
              </label>
              <input
                placeholder={
                  language === "es" ? "Escribe tu email" : "Enter your email"
                }
                type="email"
                name="recover-email"
                id="recover-email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </fieldset>

            <button className="button recover-button">
              <FormattedMessage id="continue" />
            </button>
          </form>

          {error ? <p className="error">{error}</p> : null}
        </section>

        <section
          onClick={(e) => e.stopPropagation()}
          className={`modal-body recover ${!showReset && "hide"}`}
        >
          <h1 className="title">
            <FormattedMessage id="password-reset" />
          </h1>
          <form className="form" onSubmit={handleFormReset}>
            <fieldset>
              <label htmlFor="recoverCode">Código:</label>
              <input
                placeholder={
                  language === "es"
                    ? "Escribe el código de recuperación"
                    : "Enter your recover code"
                }
                autoComplete="off"
                type="text"
                name="recoverCode"
                id="recoverCode"
                value={recoverCode}
                required
                onChange={(e) => setRecoverCode(e.target.value)}
              />
            </fieldset>

            <fieldset>
              <label htmlFor="reset-password">
                <FormattedMessage id="password" />
              </label>
              <section className="input-wrap">
                <input
                  placeholder={
                    language === "es"
                      ? "Escribe tu nueva contraseña"
                      : "Enter your new password"
                  }
                  autoComplete="off"
                  type={seePassword ? "text" : "password"}
                  name="reset-password"
                  id="reset-password"
                  value={newPass1}
                  required
                  onChange={(e) => setNewPass1(e.target.value)}
                />

                <button
                  className="eye-button"
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setSeePassword(!seePassword);
                  }}
                >
                  <SvgIcon
                    className="eye-icon"
                    component={VisibilityIcon}
                    inheritViewBox
                  />
                </button>
              </section>
            </fieldset>

            <fieldset>
              <label htmlFor="reset-confirm-password">
                <FormattedMessage id="re-enterpassword" />
              </label>
              <section className="input-wrap">
                <input
                  placeholder={
                    language === "es"
                      ? "Repite tu nueva contraseña"
                      : "Repeat your new password"
                  }
                  autoComplete="off"
                  type={seeRepeatPassword ? "text" : "password"}
                  name="reset-confirm-password"
                  id="reset-confirm-password"
                  value={newPass2}
                  required
                  onChange={(e) => setNewPass2(e.target.value)}
                />

                <button
                  className="eye-button"
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setSeeRepeatPassword(!seeRepeatPassword);
                  }}
                >
                  <SvgIcon
                    className="eye-icon"
                    component={VisibilityIcon}
                    inheritViewBox
                  />
                </button>
              </section>
            </fieldset>

            <button className="button reset-button">
              <FormattedMessage id="continue" />
            </button>
          </form>

          {error ? <p className="error">⚠️ {error}</p> : null}
        </section>
      </section>

      {showRecoverCodeModal && (
        <section className="modal-back dark">
          <section className="modal-body little verify">
            <section className="modal-back dark">
              <section className="modal-body little verify">
                <section className="container-email">
                  <section
                    className={`email-box ${isAnimated ? "animated" : ""}`}
                  >
                    <section className="triangle"></section>
                    <section className="triangle"></section>
                    <section className="triangle">GodLinks.S.A</section>
                    <section className="triangle"></section>
                    <section className="paper">
                      <p>
                        <FormattedMessage id="email-recover" />
                      </p>
                      <section className="content-box"></section>
                    </section>
                  </section>
                </section>
              </section>
            </section>
          </section>
        </section>
      )}

      {showConfirmModal && (
        <section className="modal-back dark">
          <section className="modal-body little verify">
            <p>
              <FormattedMessage id="password-reset-confirmation" />
            </p>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="50"
              width="50"
              viewBox="0 0 118.43873 118.43873"
            >
              <path
                className="check"
                strokeLinejoin="round"
                d="M34.682 60.352l15.61 15.61 33.464-33.464"
                stroke="black"
                strokeLinecap="round"
                strokeWidth="4.3"
                fill="none"
              />
              <circle
                className="circle"
                strokeLinejoin="round"
                cx="59.219"
                strokeLinecap="round"
                stroke="black"
                cy="59.219"
                r="57.069"
                strokeWidth="4.3"
                fill="none"
              />
            </svg>
          </section>
        </section>
      )}
    </>
  );
};
