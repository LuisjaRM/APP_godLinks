import "./Signup.css";

// Intl Context

import { FormattedMessage } from "react-intl";

// Material

import { SvgIcon } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";

// React

import { useState } from "react";

// Contexts

import { useShowLogin } from "../../contexts/ShowLoginContext";
import { useShowVerify } from "../../contexts/ShowVerifyContext";
import { useLanguage } from "../../contexts/LanguageContext";

// Fetchs

import { registerUserService } from "../../services/api";

export const Signup = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [error, setError] = useState("");

  const [showLogin, setShowLogin] = useShowLogin();
  const [showVerify, setShowVerify] = useShowVerify();

  // Intl

  const [language] = useLanguage();

  // Handle Form

  const handleForm = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (pass1 !== pass2) {
      setError(<FormattedMessage id="password-match" />);
      return;
    }

    if (pass1 === user) {
      setError(<FormattedMessage id="password-user-match" />);
      return;
    }

    // Fetch

    try {
      await registerUserService({ email, password: pass1, user });
      setShowVerify(!showVerify);
      setShowLogin(!showLogin);
      setError("");
    } catch (error) {
      setError(error.message);
    }
  };

  // See Password

  const [seePassword, setSeePassword] = useState(false);
  const [seeRepeatPassword, setSeeRepeatPassword] = useState(false);

  // Error messages

  error === "Ya existe un usuario registrado con el mismo email" &&
    setError(<FormattedMessage id="same-mail" />);

  error === "Ya existe un usuario registrado con el mismo user name" &&
    setError(<FormattedMessage id="same-user" />);

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

  error === `"user" length must be at least 4 characters long` &&
    setError(<FormattedMessage id="username-4char-error" />);

  error === `"user" length must be less than or equal to 15 characters long` &&
    setError(<FormattedMessage id="username-15char-error" />);

  return (
    <section className="signup">
      <h2 className="title">
        <FormattedMessage id="signup" />
      </h2>

      <form className="form" onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="signup-user">
            <FormattedMessage id="username" />
          </label>
          <input
            placeholder={
              language === "es"
                ? "Escribe tu nombre de usuario"
                : "Enter your username"
            }
            type="text"
            id="signup-user"
            name="signup-user"
            value={user}
            required
            onChange={(e) => setUser(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="signup-email">
            <FormattedMessage id="email" />
          </label>
          <input
            placeholder={
              language === "es" ? "Escribe tu email" : "Enter your email"
            }
            type="email"
            id="signup-email"
            name="signup-email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="signup-password">
            <FormattedMessage id="password" />
          </label>
          <section className="input-wrap">
            <input
              placeholder={
                language === "es"
                  ? "Escribe tu contraseña"
                  : "Enter your password"
              }
              autoComplete="off"
              type={seePassword ? "text" : "password"}
              id="signup-password"
              name="signup-password"
              value={pass1}
              required
              onChange={(e) => setPass1(e.target.value)}
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
          <label htmlFor="signup-confirm-password">
            <FormattedMessage id="re-enterpassword" />
          </label>
          <section className="input-wrap">
            <input
              placeholder={
                language === "es"
                  ? "Repite tu contraseña"
                  : "Repeat your password"
              }
              autoComplete="off"
              type={seeRepeatPassword ? "text" : "password"}
              id="signup-confirm-password"
              name="signup-confirm-password"
              value={pass2}
              required
              onChange={(e) => setPass2(e.target.value)}
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

        <button className="button signup-button">
          <FormattedMessage id="continue" />
        </button>
      </form>

      {error && <p className="error">⚠️ {error}</p>}
    </section>
  );
};
