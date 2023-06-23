import "./UserProfile.css";

// React

import { useState } from "react";

// Components

import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";

// Contexts

import { useAuth } from "../../contexts/AuthContext";

// Navigate

import { useNavigate } from "react-router";

// Fetchs

import {
  DeleteUserService,
  ModifyPasswordService,
  ModifyUserService,
  useGetMyData,
} from "../../services/api";

export const UserProfile = () => {
  const { token } = useAuth();

  //State of navigate
  const navigate = useNavigate();

  // State of error
  const [, setError] = useState("");

  // States of Forms
  const [avatar, setAvatar] = useState("");
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  // States to hide

  const [hideFormAvatar, setHideFormAvatar] = useState(true);
  const [hideFormUser, setHideFormUser] = useState(true);
  const [hideFormEmail, setHideFormEmail] = useState(true);
  const [hideFormPassword, setHideFormPassword] = useState(true);

  // Destructuring of custom hook

  const { dataUser, loading, error, refresh } = useGetMyData(token);

  if (loading) return <p>Cargando perfil de usuario </p>;
  if (error) return <ErrorMessage message={error} />;

  const created_at = new Date(dataUser.created_at);
  const dateCreated = created_at.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  // handle edit avatar

  const handleFormAvatar = async (e) => {
    e.preventDefault();
    try {
      await ModifyUserService({ avatar }, token);
      setHideFormAvatar(!hideFormAvatar);
      refresh();
    } catch (error) {
      setError(error.message);
    }
  };

  // Handle edit user

  const handleFormUser = async (e) => {
    e.preventDefault();
    try {
      await ModifyUserService({ user }, token);
      setHideFormUser(!hideFormUser);
      refresh();
    } catch (error) {
      setError(error.message);
    }
  };

  // Handle edit email

  const handleFormEmail = async (e) => {
    e.preventDefault();

    try {
      await ModifyUserService({ email }, token);
      setHideFormEmail(!hideFormEmail);
      refresh();
    } catch (error) {
      setError(error.message);
    }
  };

  // Handle edit password
  const handleFormPassword = async (e) => {
    e.preventDefault();
    try {
      await ModifyPasswordService({ oldPassword, newPassword }, token);
      setHideFormPassword(!hideFormPassword);
      refresh();
    } catch (error) {
      setError(error.message);
    }
  };

  // Handle delete user
  const handleFormDelete = async (e) => {
    e.preventDefault();
    await DeleteUserService(token, dataUser.id);
    navigate("/allOffers");
  };

  // JSX
  return (
    <section className="user-profile">
      <section className="header-profile">
        <img
          className={`user-image-profile ${hideFormAvatar ? "" : "hide"}`}
          src={
            dataUser.avatar
              ? `${import.meta.env.VITE_BACKEND}uploads/${dataUser.avatar}`
              : "/android-icon-36x36.png"
          }
          alt={dataUser.user}
        />
        <form
          className={`modify-image-form  ${hideFormAvatar ? "hide" : ""}`}
          onSubmit={handleFormAvatar}
        >
          <fieldset className="fieldset">
            <label className="label" htmlFor="avatar">
              Nuevo Avatar:
            </label>
            <input
              className="image-picker"
              type="file"
              name="avatar"
              id="avatar"
              required
              onChange={(e) => setAvatar(e.target.files[0])}
            />
          </fieldset>
          <button>📷</button>
        </form>
        <button
          onClick={() => {
            setHideFormAvatar(!hideFormAvatar);
          }}
        >
          ✏️
        </button>

        <p className="created-at">
          <strong>Miembro desde</strong>: {dateCreated}
        </p>

        <p className={`user-name-profile ${hideFormUser ? "" : "hide"}`}>
          <strong>Nombre de usuario</strong>: {dataUser.user}
        </p>
        <form
          className={`modify-user-form ${hideFormUser ? "hide" : ""}`}
          onSubmit={handleFormUser}
        >
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
        <button
          onClick={() => {
            setHideFormUser(!hideFormUser);
          }}
        >
          ✏️
        </button>

        <p className={`user-email-profile ${hideFormEmail ? "" : "hide"}`}>
          <strong>Email</strong>: {dataUser.email}
        </p>
        <form
          className={`modify-email-form ${hideFormEmail ? "hide" : ""}`}
          onSubmit={handleFormEmail}
        >
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
        <button
          onClick={() => {
            setHideFormEmail(!hideFormEmail);
          }}
        >
          ✏️
        </button>

        <p>
          <strong>Privacidad</strong>
        </p>

        <p
          className={`user-password-profile ${hideFormPassword ? "" : "hide"}`}
        >
          <strong>Modificar contraseña</strong>
        </p>

        <form
          className={`modify-password-form ${hideFormPassword ? "hide" : ""}`}
          onSubmit={handleFormPassword}
        >
          <fieldset className="fieldset">
            <label className="label" htmlFor="oldPassword">
              Contraseña actual:
            </label>
            <input
              placeholder="Intoduce contraseña actual"
              className="input"
              type="password"
              name="password"
              id="oldPassword"
              value={oldPassword}
              required
              onChange={(e) => setOldPassword(e.target.value)}
            />
            <label className="label" htmlFor="newPassword">
              Nueva contraseña:
            </label>
            <input
              placeholder="Introduce nueva contraseña"
              className="input"
              type="password"
              name="newPassword"
              id="newPassword"
              value={newPassword}
              required
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </fieldset>
          <button>Cambiar contraseña</button>
        </form>
        <button
          onClick={() => {
            setHideFormPassword(!hideFormPassword);
          }}
        >
          ✏️
        </button>
        <form onSubmit={handleFormDelete}>
          <button>Eliminar cuenta</button>
        </form>
      </section>
    </section>
  );
};
