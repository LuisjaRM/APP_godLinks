import "./Login.css";
import "../../intl/es.json";
import "../../intl/en.json";

// React

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {FormattedMessage} from 'react-intl';

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

  return (
    <section className="login">
      <h2 className="title"><FormattedMessage id="signin"/> </h2>

      <form className="form" onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="login-email"><FormattedMessage id="email"/></label>
          <input
            placeholder="example@mail.com"
            type="email"
            name="login-email"
            id="login-email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="login-password"><FormattedMessage id="password"/></label>
          <input
            placeholder={<FormattedMessage id="enter-password"/>}
            type="password"
            name="login-password"
            autoComplete="login-password"
            id="login-password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </fieldset>

        <button className="button login-button">Continuar</button>
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
        ¿Has olvidado tu contraseña?
      </p>
    </section>
  );
};
