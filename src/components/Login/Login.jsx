import "./Login.css";

// Intl

import { FormattedMessage } from "react-intl";

// Material

import { SvgIcon } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";

// React

import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Contexts

import { useAuth } from "../../contexts/AuthContext";
import { useShowLogin } from "../../contexts/ShowLoginContext";
import { useShowRecover } from "../../contexts/ShowRecoverContext";
import { useNavigateTo } from "../../contexts/NavigateToContext";

// Fetchs

import { logInUserService } from "../../services/api";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useAuth();
  const [showLogin, setShowLogin] = useShowLogin();
  const [showRecover, setShowRecover] = useShowRecover();
  const [navigateTo, setNavigateTo] = useNavigateTo();

  // Handle Form

  const handleForm = async (e) => {
    e.preventDefault();

    // Fetch

    try {
      const data = await logInUserService({ email, password });
      login(data.token);
      setShowLogin(!showLogin);
      navigateTo ? navigate(navigateTo) : "";
      setNavigateTo("");
    } catch (error) {
      setError(error.message);
    }
  };

  // See Password

  const [seePassword, setSeePassword] = useState(false);

  // Error messages

  error === "Email o contraseña incorrectos" && setError();
  error === "Usuario no verificado" && setError();

  return (
    <section className="login">
      <h2 className="title">
        <FormattedMessage id="login" />
      </h2>

      <form className="form" onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="login-email">
            <FormattedMessage id="email" />
          </label>
          <input
            placeholder="ejemplo@email.com"
            type="email"
            name="login-email"
            id="login-email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="login-password">
            <FormattedMessage id="password" />
          </label>
          <section className="input-wrap">
            <input
              className="password-input"
              placeholder="Escribe tu contraseña"
              type={seePassword ? "text" : "password"}
              name="login-password"
              autoComplete="login-password"
              id="login-password"
              value={password}
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
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

        <button className="button login-button">
          <FormattedMessage id="continue" />
        </button>
      </form>

      {error ? <p className="error">⚠️ {error}</p> : null}

      <p
        className="link-reset-password"
        onClick={(e) => {
          e.stopPropagation();
          setShowRecover(!showRecover);
          setShowLogin(!showLogin);
        }}
      >
        <FormattedMessage id="forgot-password" />
      </p>
    </section>
  );
};
