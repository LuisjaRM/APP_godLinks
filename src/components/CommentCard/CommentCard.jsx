import "./CommentCard.css";

// Intl

import { FormattedMessage } from "react-intl";

// Material

import { SvgIcon } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

// React

import { useNavigate } from "react-router";
import { useState } from "react";

// Context

import { useAuth } from "../../contexts/AuthContext";
import { useNightMode } from "../../contexts/NightModeContext";

// Fetch

import {
  deleteCommentService,
  patchCommentService,
  postLikeService,
} from "../../services/api";

export const CommentsCard = ({ comment, refresh }) => {
  // Theme Context
  const [nightMode] = useNightMode();

  const navigate = useNavigate();

  // State Confirm Modal

  const [showConfirmModal, setShowConfirmModal] = useState();

  // State Change Made Modal

  const [showChangeMadeModal, setShowChangeMadeModal] = useState();

  // Destructuring useAuth

  const { user, token } = useAuth();

  // Date Logic
  const timeNow = Date.now();
  const nowDate = new Date(timeNow);

  const created_at = new Date(comment.created_at);
  const timeCreated_at = created_at.getTime() - 1000 * 60 * 60 * 2;
  const dateCreated = new Date(timeCreated_at);

  const dif = nowDate.getTime() - dateCreated.getTime();

  const seconds = Math.floor(dif / 1000);
  const minutes = Math.floor(dif / 1000 / 60);
  const hours = Math.floor(dif / 1000 / 60 / 60);
  const day = Math.floor(dif / 1000 / 60 / 60 / 24);

  let timeSinceCreated_at;
  let text;

  if (minutes < 1) {
    timeSinceCreated_at = seconds;
    text = "s";
  }
  if (minutes < 60) {
    timeSinceCreated_at = minutes;
    text = "m";
  }
  if (minutes > 60) {
    timeSinceCreated_at = hours;
    text = "h";
  }
  if (hours > 24) {
    timeSinceCreated_at = day;
    text = "d";
  }

  // Edit Comment

  const [showEditComment, setShowEditComment] = useState(false);

  const [newComment, setNewComment] = useState(comment.comment);
  const [error, setError] = useState("");

  const handleEditComment = async (e) => {
    e.preventDefault();
    try {
      // Fetch
      await patchCommentService(token, comment.id, { newComment });
      refresh();
      setNewComment("");
      setError("");
    } catch (error) {
      setError(error.message);
    }
  };

  // Delete comment

  const handleClickCancel = (e) => {
    e.stopPropagation();
    setShowConfirmModal(!showConfirmModal);
  };

  const handleClickAway = () => {
    setShowConfirmModal(!showConfirmModal);
  };

  const handleClickConfirm = (e) => {
    e.stopPropagation();
    deleteComment();
  };

  const deleteComment = async () => {
    try {
      // Fetch
      await deleteCommentService(token, comment.id);
      setShowChangeMadeModal(!showChangeMadeModal);
      setError("");
      setTimeout(() => {
        setShowChangeMadeModal(!showChangeMadeModal);
        refresh();
      }, 1500);
    } catch (error) {
      setError(error.message);
    }
  };

  // Like Comment

  const handleClickLike = async (e) => {
    e.stopPropagation();
    try {
      // Fetch
      await postLikeService(token, comment.id);
      refresh();
    } catch (error) {
      setError(error.message);
    }
  };

  // Error messages

  error ===
    `"comment" length must be less than or equal to 170 characters long` &&
    setError();

  return (
    <>
      <section className={`comment-card ${nightMode === "day" ? "light" : ""}`}>
        {user.id === comment.user_id ? (
          <section className="comments-buttons">
            <button
              className="edit"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowEditComment(!showEditComment);
              }}
            >
              <SvgIcon
                className="edit-icon"
                component={EditIcon}
                inheritViewBox
              />
            </button>
            <button
              className="delete"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowConfirmModal(!showConfirmModal);
              }}
            >
              <SvgIcon
                className="delete-icon"
                component={DeleteIcon}
                inheritViewBox
              />
            </button>
          </section>
        ) : (
          ""
        )}

        <section className="header">
          <section
            className="user-info"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/userInfo/${comment.user_id}`);
            }}
          >
            <img
              className="user-image"
              src={
                comment.avatar
                  ? `${import.meta.env.VITE_BACKEND}uploads/${comment.avatar}`
                  : "/default-user.webp"
              }
              alt={comment.user}
            />

            <p className="user-name">{comment.user}</p>
          </section>

          <p>
            hace {timeSinceCreated_at} {text}
          </p>
        </section>

        <section className="main">
          <form
            className={`form ${showEditComment ? "show" : ""}`}
            onSubmit={handleEditComment}
          >
            <fieldset>
              <input
                type="text"
                id={`edit-comment-${comment.id}`}
                name="edit-comment"
                autoComplete="off"
                value={newComment}
                required
                onChange={(e) => setNewComment(e.target.value)}
              />
              <button className="edit-button">Enviar</button>
            </fieldset>
          </form>

          {error ? <p className="error">⚠️ {error}</p> : null}

          <p className={`comment ${showEditComment ? "hide" : ""}`}>
            {comment.comment}
          </p>
        </section>

        <section className="footer">
          <button onClick={handleClickLike} className="like-button">
            <SvgIcon
              className="like-icon"
              component={ThumbUpIcon}
              inheritViewBox
            />
          </button>
          <p className="comment-likes">
            {comment.addLikes ? comment.addLikes : 0}
          </p>
        </section>
      </section>

      {showConfirmModal ? (
        <section className="modal-back dark" onClick={handleClickAway}>
          <section className="modal-body little">
            <h2>
              <FormattedMessage id="comment-delete?" />
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
      ) : (
        ""
      )}

      {showChangeMadeModal ? (
        <section className="modal-back dark">
          <section className="modal-body little">
            {deleteComment && (
              <h3>
                <FormattedMessage id="comment-delete-success" />
              </h3>
            )}
          </section>
        </section>
      ) : (
        ""
      )}
    </>
  );
};
