import "./UserProfile.css";

// React

import { useState } from "react";

// Components

import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";

// Contexts

import { useAuth } from "../../contexts/AuthContext";

// Fetchs

import {
  ModifyPasswordService,
  ModifyUserService,
  useGetMyData,
} from "../../services/api";


export const UserProfile = () => {
  const { token } = useAuth();

  const [avatar, setAvatar] = useState("");
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, setError] = useState("");

  const { dataUser, loading, error } = useGetMyData(token);

  if (loading) return <p>Cargando perfil de usuario </p>;
  if (error) return <ErrorMessage message={error} />;

  const created_at = new Date(dataUser.created_at);
  const dateCreated = created_at.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      if (email || user || avatar) {
        await ModifyUserService({ email, user, avatar });
      }
    } catch (error) {
      setError(error.message);
    }

    try {
      if (password) {
        await ModifyPasswordService({ password });
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section className="user-profile">
      <section className="header-profile">
        <img
          className="user-image-profile"
          src={
            dataUser.avatar
              ? `${import.meta.env.VITE_BACKEND}uploads/${dataUser.avatar}`
              : "/android-icon-36x36.png"
          }
          alt={dataUser.user}
        />
        <form className="modify-image-form hide" onSubmit={handleForm}>
          <fieldset className="fieldset">
            <label className="label" htmlFor="image">
              Nuevo Avatar:
            </label>
            <input
              className="image-picker"
              type="file"
              name="image"
              id="image"
              required
              onChange={(e) => setAvatar(e.target.files[0])}
            />
          </fieldset>
          <button>📷</button>
        </form>

        <p className="created-at">
          <strong>Miembro desde</strong>: {dateCreated}
        </p>

        <p className="user-name-profile">
          <strong>Nombre de usuario</strong>: {dataUser.user}
        </p>
        <form className="modify-user-form" onSubmit={handleForm}>
          <fieldset className="fieldset">
            <label className="label" htmlFor="user">
              Usuario:
            </label>
            <input
              placeholder={dataUser.user}
              className="input"
              type="user"
              name="user"
              id="user"
              value={user}
              required
              onChange={(e) => setUser(e.target.value)}
            />
          </fieldset>
          <button>Cambiar nombre de usuario</button>
        </form>

        <p className="user-email-profile">
          <strong>Email</strong>: {dataUser.email}
        </p>
        <form className="modify-email-form" onSubmit={handleForm}>
          <fieldset className="fieldset">
            <label className="label" htmlFor="email">
              Correo Electrónico:
            </label>
            <input
              placeholder={dataUser.email}
              className="input"
              type="email"
              name="email"
              id="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </fieldset>
          <button>Cambiar email</button>
        </form>

        <p>
          <strong>Privacidad</strong>
        </p>

        <form className="modify-password-form" onSubmit={handleForm}>
          <fieldset className="fieldset">
            <label className="label" htmlFor="password">
              Password:
            </label>
            <input
              placeholder="example@mail.com"
              className="input"
              type="password"
              name="password"
              id="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </fieldset>
          <button>Cambiar contraseña</button>
        </form>

        <button>Eliminar cuenta</button>
      </section>
    </section>
  );
};
