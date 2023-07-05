import "./ModifyUserCard.css";

// Intl

import { FormattedMessage } from "react-intl";

// Material

import { SvgIcon } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import SendIcon from "@mui/icons-material/Send";
import LockIcon from "@mui/icons-material/Lock";

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

  const [showLogin, setShowLogin] = useShowLogin();
  const [showVerify, setShowVerify] = useShowVerify();

  // State of navigate

  const navigate = useNavigate();

  // States of Forms
  const [avatar, setAvatar] = useState("");
  const [user, setUser] = useState(userInfo.user);
  const [email, setEmail] = useState(userInfo.email);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  // States to hide

  const [hideFormAvatar, setHideFormAvatar] = useState(true);
  const [hideFormUser, setHideFormUser] = useState(true);
  const [hideFormEmail, setHideFormEmail] = useState(true);

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

  const [fieldChanged, setFieldChanged] = useState("");

  const handleFormAvatar = async (e) => {
    e.preventDefault();
    setShowConfirmModal(!showConfirmModal);
    setFieldChanged("avatar");
  };

  const handleFormUser = async (e) => {
    e.preventDefault();
    setShowConfirmModal(!showConfirmModal);
    setFieldChanged("user");
  };

  const handleFormEmail = async (e) => {
    e.preventDefault();
    setShowConfirmModal(!showConfirmModal);
    setFieldChanged("email");
  };

  const handleFormNewPassword = async (e) => {
    e.preventDefault();
    setShowConfirmModal(!showConfirmModal);
    setFieldChanged("newPassword");
  };

  // Confirm Modal

  const handleClickConfirm = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowConfirmModal(false);
    setShowChangePasswordModal(false);

    fieldChanged === "avatar" && changeAvatar();
    fieldChanged === "user" && changeUser();
    fieldChanged === "email" && changeEmail();
    fieldChanged === "newPassword" && changePassword();
    clickDelete && deleteUser();
  };

  const handleClickCancel = (e) => {
    e.stopPropagation();
    setShowConfirmModal(false);
    setShowChangePasswordModal(false);
    setHideFormAvatar(true);
    setHideFormUser(true);
    setHideFormEmail(true);
    setAvatar("");
    setUser(userInfo.user);
    setEmail(userInfo.email);
    setOldPassword("");
    setNewPassword("");
    setClickDelete(false);
  };

  const handleClickAway = (e) => {
    e.stopPropagation();
    setShowConfirmModal(false);
    setShowChangePasswordModal(false);
    setHideFormAvatar(true);
    setHideFormUser(true);
    setHideFormEmail(true);
    setAvatar("");
    setUser(userInfo.user);
    setEmail(userInfo.email);
    setOldPassword("");
    setNewPassword("");
    setClickDelete(false);
  };

  // Edit avatar

  const changeAvatar = async () => {
    try {
      // Fetch
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
      // Fetch
      await ModifyUserService({ user }, token);
      setUser(user);
      setHideFormUser(!hideFormUser);

      setShowChangeMadeModal(!showChangeMadeModal);
      setTimeout(() => {
        setShowChangeMadeModal(!showChangeMadeModal);
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
      // Fetch
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
      // Fetch
      await ModifyPasswordService({ oldPassword, newPassword }, token);
      setShowChangeMadeModal(!showChangeMadeModal);
      setTimeout(() => {
        setShowChangeMadeModal(!showChangeMadeModal);
        setShowLogin(!showLogin);
        navigate("/");
        logout();
        refresh();
      }, 1500);
    } catch (error) {
      setError(error.message);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  // Change Password Modal

  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);

  // Delete user

  const [clickDelete, setClickDelete] = useState(false);

  const handleClickDelete = (e) => {
    e.preventDefault();
    setClickDelete(!clickDelete);
    setShowConfirmModal(!showConfirmModal);
  };

  const deleteUser = async () => {
    try {
      // Fetch
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

  // PreviweImage

  const [filepreview, setFilepreview] = useState();

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

  error === "No tienes permisos para modificar este usuario" && setError();

  error === "La nueva contraseña es igual a la anterior" && setError();

  return (
    <>
      <ul className="header-profile">
        <li className="image-li">
          <img
            className={`user-image-profile ${hideFormAvatar ? "" : "hide"}`}
            src={
              userInfo.avatar
                ? `${import.meta.env.VITE_BACKEND}uploads/${userInfo.avatar}`
                : "/default-user.webp"
            }
            alt={userInfo.user}
          />
          <form
            className={`form  ${hideFormAvatar ? "hide" : ""}`}
            onSubmit={handleFormAvatar}
          >
            <fieldset className="modify-image-fieldset">
              <label className="user-image-profile-label">
                <input
                  className="modify-image-input"
                  type="file"
                  name="modify-image"
                  id="modify-image"
                  required
                  onChange={(e) => {
                    setAvatar(e.target.files[0]);
                    setFilepreview(URL.createObjectURL(e.target.files[0]));
                  }}
                />
                {filepreview ? (
                  <img
                    className="image-preview"
                    src={filepreview}
                    alt="image-preview"
                  />
                ) : (
                  <SvgIcon
                    className="post-image-icon"
                    component={ImageSearchIcon}
                    inheritViewBox
                  />
                )}
              </label>
            </fieldset>

            <button className="modify-image-button">
              <SvgIcon
                className="post-offer-icon"
                component={AddToPhotosIcon}
                inheritViewBox
              />
            </button>
          </form>

          <button
            className={`edit-button edit-image`}
            onClick={() => {
              setHideFormAvatar(!hideFormAvatar);
            }}
          >
            <SvgIcon
              className="edit-icon"
              component={EditIcon}
              inheritViewBox
            />
          </button>
        </li>

        <li className="created-at">
          <FormattedMessage id="member-since" /> {dateCreated}
        </li>

        <li>{error ? <p className="error">⚠️ {error}</p> : null}</li>

        <li className="field">
          <section className="field-header">
            <h2 className="field-title">
              <FormattedMessage id="username" />
            </h2>

            <button
              className="edit-button"
              onClick={() => {
                setHideFormUser(!hideFormUser);
              }}
            >
              <SvgIcon
                className="edit-icon"
                component={EditIcon}
                inheritViewBox
              />
            </button>
          </section>

          <p
            className={`input-element user-name-profile ${
              hideFormUser ? "" : "hide"
            }`}
          >
            {userInfo.user}
          </p>

          <form
            className={`form ${hideFormUser ? "hide" : ""}`}
            onSubmit={handleFormUser}
          >
            <fieldset className="modify-fieldset">
              <input
                className="modify-input"
                type="user"
                name="modify-user"
                id="modify-user"
                autoComplete="off"
                value={user}
                required
                onChange={(e) => setUser(e.target.value)}
              />

              <button className="send-modify-button">
                <SvgIcon
                  className="send-modify-icon"
                  component={SendIcon}
                  inheritViewBox
                />
              </button>
            </fieldset>
          </form>
        </li>

        <li className="field">
          <section className="field-header">
            <h2 className="field-title">
              <FormattedMessage id="email" />
            </h2>

            <button
              className="edit-button"
              onClick={() => {
                setHideFormEmail(!hideFormEmail);
              }}
            >
              <SvgIcon
                className="edit-icon"
                component={EditIcon}
                inheritViewBox
              />
            </button>
          </section>

          <p
            className={`input-element user-email-profile ${
              hideFormEmail ? "" : "hide"
            }`}
          >
            {userInfo.email}
          </p>

          <form
            className={`form ${hideFormEmail ? "hide" : ""}`}
            onSubmit={handleFormEmail}
          >
            <fieldset className="modify-fieldset">
              <input
                className="modify-input"
                type="email"
                name="modify-email"
                id="modify-email"
                autoComplete="off"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />

              <button className="send-modify-button">
                <SvgIcon
                  className="send-modify-icon"
                  component={SendIcon}
                  inheritViewBox
                />
              </button>
            </fieldset>
          </form>
        </li>

        <li className="privacity">
          <section className="title">
            <h2>
              <FormattedMessage id="privacy" />
            </h2>

            <SvgIcon
              className="privacity-icon"
              component={LockIcon}
              inheritViewBox
            />
          </section>

          <button
            className="modify-password button"
            onClick={() => {
              setShowChangePasswordModal(!showChangePasswordModal);
            }}
          >
            <FormattedMessage id="change-password" />
          </button>

          <form onSubmit={handleClickDelete}>
            <button className="delete button">
              <FormattedMessage id="delete-account" />
            </button>
          </form>
        </li>
      </ul>

      {showChangePasswordModal && (
        <section className="modal-back dark" onClick={handleClickAway}>
          <section
            className="modal-body little"
            onClick={(e) => e.stopPropagation()}
          >
            <form
              className="modify-password-form"
              onSubmit={handleFormNewPassword}
            >
              <fieldset className="modify-password-fieldset">
                <label htmlFor="oldPassword">
                  <FormattedMessage id="currentpassword" />
                </label>

                <input
                  placeholder="Contraseña actual"
                  className="modify-password-input"
                  type="password"
                  name="oldPassword"
                  id="oldPassword"
                  value={oldPassword}
                  required
                  onChange={(e) => setOldPassword(e.target.value)}
                />

                <label htmlFor="newPassword">
                  <FormattedMessage id="newpassword" />
                </label>

                <input
                  placeholder="Nueva contraseña"
                  className="modify-password-input"
                  type="password"
                  name="newPassword"
                  id="newPassword"
                  value={newPassword}
                  required
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </fieldset>

              <button className="button">
                <FormattedMessage id="continue" />
              </button>
            </form>
          </section>
        </section>
      )}

      {showConfirmModal && (
        <section className="modal-back dark" onClick={handleClickAway}>
          <section className="modal-body little">
            <h2>
              {clickDelete ? (
                <FormattedMessage id="user-delete-confirmation" />
              ) : (
                <FormattedMessage id="user-modify-confirmation" />
              )}
            </h2>
            <section className="buttons">
              <button className="button" onClick={handleClickConfirm}>
                <FormattedMessage id="yes" />
              </button>
              <button className="button" onClick={handleClickCancel}>
                <FormattedMessage id="no" />
              </button>
            </section>
          </section>
        </section>
      )}

      {showChangeMadeModal && (
        <section className="modal-back dark">
          <section className="modal-body little">
            {fieldChanged === "avatar" && (
              <h3>
                <FormattedMessage id="avatar-modify-success" />
              </h3>
            )}
            {fieldChanged === "user" && (
              <h3>
                <FormattedMessage id="username-modify-success" />
              </h3>
            )}
            {fieldChanged === "newPassword" && (
              <h3>
                <FormattedMessage id="password-reset-confirmation" />
              </h3>
            )}
            {clickDelete && (
              <h3>
                <FormattedMessage id="username-delete-success" />
              </h3>
            )}

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
