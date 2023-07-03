import "./PostComment.css";

// Intl

import { FormattedMessage } from "react-intl";

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

  // Handle Post Comment

  const handlePostComment = async (e) => {
    e.preventDefault();
    try {
      // Fetch
      await postCommentService(token, id, { comment });
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
    <section className="post-comment">
      <form className="comment-form" onSubmit={handlePostComment}>
        <fieldset>
          <label>
            <img
              className="comment-user-image"
              src={
                offer.avatar
                  ? `${import.meta.env.VITE_BACKEND}uploads/${offer.avatar}`
                  : "/default-user.webp"
              }
              alt={offer.title}
            />
          </label>

          <input
            placeholder="¿Qué opinas de esta oferta?"
            type="text"
            id="post-comment"
            name="post-comment"
            autoComplete="off"
            value={comment}
            required
            onChange={(e) => setComment(e.target.value)}
          />
          <button className="send-button">Enviar</button>
        </fieldset>
      </form>

      {error ? <p className="error">⚠️ {error}</p> : null}
    </section>
  );
};
