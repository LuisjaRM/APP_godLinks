import "./PostComment.css";

// React

import { useState } from "react";

// Context

import { useAuth } from "../../contexts/AuthContext";

// Fetch

import { postCommentService } from "../../services/api";

export const PostComment = ({ id, refresh, offer }) => {
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  const { token } = useAuth();

  const handlePostComment = async (e) => {
    e.preventDefault();
    try {
      await postCommentService(token, id, { comment });
      refresh();
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <section className="post-comment">
      <form className="comment-form" onSubmit={handlePostComment}>
        <fieldset className="fieldset">
          <label className="label">
            <img
              className="comment-user-image"
              src={
                offer.avatar
                  ? `${import.meta.env.VITE_BACKEND}uploads/${offer.avatar}`
                  : "/android-icon-36x36.png"
              }
              alt={offer.title}
            />
          </label>
          <input
            placeholder="¿Qué opinas de esta oferta?"
            className="input"
            type="text"
            id="post-comment"
            name="post-comment"
            value={comment}
            required
            onChange={(e) => setComment(e.target.value)}
          />
          <button className="sendComment-button">Enviar</button>
        </fieldset>
      </form>

      {error ? <p className="error">⚠️ {error}</p> : null}
    </section>
  );
};
