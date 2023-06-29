import "./ModifyUserCard.css";

// React

import { useState } from "react";

// Contexts

import { useAuth } from "../../contexts/AuthContext";
import { useShowLogin } from "../../contexts/ShowLoginContext";
import { useShowVerify } from "../../contexts/ShowVerifyContext";
import { useError } from "../../contexts/ErrorContext";

// Navigate

import { useNavigate } from "react-router";

// Fetchs

import {
  DeleteUserService,
  ModifyPasswordService,
  ModifyUserService,
} from "../../services/api";

export const ModifyUserCard = ({ userInfo, refresh }) => {
  const [error, setError] = useError();
  const { token, logout } = useAuth();

  // Context

  const [showLogin, setShowLogin] = useShowLogin();
  const [showVerify, setShowVerify] = useShowVerify();

  // Document Title
  document.title = "Mi perfil";

  //State of navigate

  const navigate = useNavigate();

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

  // Schema created_at

  const created_at = new Date(userInfo.created_at);
  const dateCreated = created_at.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  // State Confirm Modal

  const [showConfirmModal, setShowConfirmModal] = useState();

  // State Change Made Modal

  const [showChangeMadeModal, setShowChangeMadeModal] = useState();

  // HandleForm

  const handleForm = async (e) => {
    e.preventDefault();
    setShowConfirmModal(!showConfirmModal);
  };

  // Confirm Modal

  const handleClickConfirm = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowConfirmModal(!showConfirmModal);
    avatar && changeAvatar();
    user && changeUser();
    email && changeEmail();
    newPassword && changePassword();
    clickDelete && deleteUser();
  };

  const handleClickCancel = (e) => {
    e.stopPropagation();
    setShowConfirmModal(!showConfirmModal);
    setHideFormAvatar(true);
    setHideFormUser(true);
    setHideFormEmail(true);
    setHideFormPassword(true);
    setAvatar("");
    setUser("");
    setEmail("");
    setOldPassword("");
    setNewPassword("");
    setClickDelete(false);
  };

  const handleClickAway = (e) => {
    e.stopPropagation();
    setShowConfirmModal(!showConfirmModal);
    setHideFormAvatar(true);
    setHideFormUser(true);
    setHideFormEmail(true);
    setHideFormPassword(true);
    setAvatar("");
    setUser("");
    setEmail("");
    setOldPassword("");
    setNewPassword("");
    setClickDelete(false);
  };

  // Edit avatar

  const changeAvatar = async () => {
    try {
      await ModifyUserService({ avatar }, token);
      setAvatar(avatar);
      setHideFormAvatar(!hideFormAvatar);

      setShowChangeMadeModal(!showChangeMadeModal);
      setTimeout(() => {
        setShowChangeMadeModal(!showChangeMadeModal);
        setAvatar("");
        refresh();
      }, 1500);
    } catch (error) {
      setError(error.message);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  // Edit user

  const changeUser = async () => {
    try {
      await ModifyUserService({ user }, token);
      setUser(user);
      setHideFormUser(!hideFormUser);

      setShowChangeMadeModal(!showChangeMadeModal);
      setTimeout(() => {
        setShowChangeMadeModal(!showChangeMadeModal);
        setUser("");
        refresh();
      }, 1500);
    } catch (error) {
      setError(error.message);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  // Edit email

  const changeEmail = async () => {
    try {
      await ModifyUserService({ email }, token);
      setEmail(email);
      setHideFormEmail(!hideFormEmail);
      setShowVerify(!showVerify);
      navigate("/");
      logout();
    } catch (error) {
      setError(error.message);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  // Edit password

  const changePassword = async () => {
    try {
      await ModifyPasswordService({ oldPassword, newPassword }, token);
      setHideFormPassword(!hideFormPassword);
      setShowLogin(!showLogin);
      navigate("/");
      logout();
    } catch (error) {
      setError(error.message);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  // delete user
  const [clickDelete, setClickDelete] = useState(false);

  const handleClickDelete = (e) => {
    e.preventDefault();
    setClickDelete(!clickDelete);
    setShowConfirmModal(!showConfirmModal);
  };

  const deleteUser = async () => {
    try {
      await DeleteUserService(token, userInfo.id);
      setShowChangeMadeModal(!showChangeMadeModal);
      setTimeout(() => {
        setShowChangeMadeModal(!showChangeMadeModal);
        navigate("/");
        logout();
      }, 1500);
    } catch (error) {
      setError(error.message);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <>
      <ul className="header-profile">
        <li className="list-image">
          <img
            className={`user-image-profile ${hideFormAvatar ? "" : "hide"}`}
            src={
              userInfo.avatar
                ? `${import.meta.env.VITE_BACKEND}uploads/${userInfo.avatar}`
                : "/android-icon-36x36.png"
            }
            alt={userInfo.user}
          />
          <form
            className={`modify-image-form  ${hideFormAvatar ? "hide" : ""}`}
            onSubmit={handleForm}
          >
            <fieldset className="fieldset">
              <label className="label" htmlFor="avatar">
                Avatar:
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
            className="edit-button"
            onClick={() => {
              setHideFormAvatar(!hideFormAvatar);
            }}
          >
            ✏️
          </button>
        </li>

        <li> {error ? <p className="error">⚠️ {error}</p> : null}</li>

        <li className="created-at">
          <strong>Miembro desde</strong>: {dateCreated}
        </li>

        <li className="list-element">
          <p className={`user-name-profile ${hideFormUser ? "" : "hide"}`}>
            <strong>Nombre de usuario</strong>: {userInfo.user}
          </p>
          <form
            className={`modify-user-form ${hideFormUser ? "hide" : ""}`}
            onSubmit={handleForm}
          >
            <fieldset className="fieldset">
              <label className="label" htmlFor="user">
                Usuario:
              </label>
              <input
                placeholder={userInfo.user}
                className="input"
                type="user"
                name="user"
                id="user"
                value={user}
                required
                onChange={(e) => setUser(e.target.value)}
              />
            </fieldset>
            <button>✅</button>
          </form>
          <button
            className="edit-button"
            onClick={() => {
              setHideFormUser(!hideFormUser);
            }}
          >
            ✏️
          </button>
        </li>

        <li className="list-element">
          <p className={`user-email-profile ${hideFormEmail ? "" : "hide"}`}>
            <strong>Email</strong>: {userInfo.email}
          </p>
          <form
            className={`modify-email-form ${hideFormEmail ? "hide" : ""}`}
            onSubmit={handleForm}
          >
            <fieldset className="fieldset">
              <label className="label" htmlFor="email">
                Correo Electrónico:
              </label>
              <input
                placeholder={userInfo.email}
                className="input"
                type="email"
                name="email"
                id="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </fieldset>
            <button>✅</button>
          </form>
          <button
            className="edit-button"
            onClick={() => {
              setHideFormEmail(!hideFormEmail);
            }}
          >
            ✏️
          </button>
        </li>

        <li className="list-privacity">
          <h2>Privacidad</h2>

          <button
            className={`user-password-profile ${
              hideFormPassword ? "" : "hide"
            }`}
            onClick={() => {
              setHideFormPassword(!hideFormPassword);
            }}
          >
            Modificar contraseña:
          </button>

          <form
            className={`modify-password-form ${hideFormPassword ? "hide" : ""}`}
            onSubmit={handleForm}
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
            <button>✅</button>
          </form>

          <form onSubmit={handleClickDelete}>
            <button className="delete-button">Eliminar cuenta</button>
          </form>
        </li>
      </ul>

      {showConfirmModal ? (
        <section className="confirmModal" onClick={handleClickAway}>
          <section className="confirmModal-body">
            <h2>
              ¿Estás seguro de que quieres
              {clickDelete ? " borrar" : " modificar"} este usuario?
            </h2>
            <section className="buttons">
              <button className="confirm-button" onClick={handleClickConfirm}>
                Sí
              </button>
              <button className="confirm-button" onClick={handleClickCancel}>
                No
              </button>
            </section>
          </section>
        </section>
      ) : (
        ""
      )}

      {showChangeMadeModal ? (
        <section className="changeMade-modal">
          <section className="changeMade-modal-body">
            {avatar && <h3>Tu avatar se ha modificado con éxito </h3>}
            {user && (
              <h3>
                Tu nombre de usuario se ha modificado con éxito{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="20"
                  viewBox="0 0 118.43873 118.43873"
                >
                  <path
                    className="check"
                    strokeLinejoin="round"
                    d="M34.682 60.352l15.61 15.61 33.464-33.464"
                    stroke="#08b237"
                    strokeLinecap="round"
                    strokeWidth="4.3"
                    fill="none"
                  />
                  <circle
                    className="circle"
                    strokeLinejoin="round"
                    cx="59.219"
                    strokeLinecap="round"
                    stroke="#08b237"
                    cy="59.219"
                    r="57.069"
                    strokeWidth="4.3"
                    fill="none"
                  />
                </svg>
              </h3>
            )}

            {clickDelete && <h3>Tu usuario se ha eliminado con éxito</h3>}
          </section>
        </section>
      ) : (
        ""
      )}
    </>
  );
};
