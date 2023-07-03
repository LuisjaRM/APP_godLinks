import "./Signup.css";

// Intl

import { FormattedMessage } from "react-intl";

// Material

import { SvgIcon } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";

// React

import { useState } from "react";

// Contexts

import { useShowLogin } from "../../contexts/ShowLoginContext";
import { useShowVerify } from "../../contexts/ShowVerifyContext";

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
    } catch (error) {
      setError(error.message);
    }
  };

  // See Password

  const [seePassword, setSeePassword] = useState(false);

  // Error messages

  error === `"password" length must be at least 8 characters long` &&
    setError(<FormattedMessage id="error-password-8cha" />);

  error ===
    `"password" length must be less than or equal to 20 characters long` &&
    setError();

  error === `"password" should not contain white spaces` && setError();

  error === `"password" should contain at least 1 special character` &&
    setError();

  error === `"password" should contain at least 1 uppercase character` &&
    setError();

  error === `"password" should contain at least 1 numeric character` &&
    setError();

  error === `"user" length must be at least 4 characters long` && setError();

  error === `"user" length must be less than or equal to 15 characters long` &&
    setError();

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
            placeholder="Introduce nombre de usuario"
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
          <label htmlFor="signup-password">
            <FormattedMessage id="password" />
          </label>
          <section className="input-wrap">
            <input
              placeholder="Introduce tu contraseña"
              type={seePassword ? "text" : "password"}
              id="signup-password"
              name="signup-password"
              value={pass1}
              required
              onChange={(e) => setPass1(e.target.value)}
            />

            <button
              className="eye-button"
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
              placeholder="Repite tu contraseña"
              type={seePassword ? "text" : "password"}
              id="signup-confirm-password"
              name="signup-confirm-password"
              value={pass2}
              required
              onChange={(e) => setPass2(e.target.value)}
            />

            <button
              className="eye-button"
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

        <button className="button signup-button">
          <FormattedMessage id="continue" />
        </button>
      </form>

      {error && <p className="error">⚠️ {error}</p>}
    </section>
  );
};
