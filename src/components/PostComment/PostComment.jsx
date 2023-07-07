import "./PostComment.css";

// Intl

import { FormattedMessage } from "react-intl";
import { useLanguage } from "../../contexts/LanguageContext";

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

  // Intl Context

  const [language] = useLanguage();

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
    `"comment" length must be less than or equal to 145 characters long` &&
    setError(<FormattedMessage id="post-comment-error" />);

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
            placeholder={
              language === "es"
                ? "Escribe tu reseña..."
                : "Write your review..."
            }
            type="text"
            id="post-comment"
            name="post-comment"
            autoComplete="off"
            value={comment}
            required
            onChange={(e) => setComment(e.target.value)}
          />
          <button className="send-button">
            <FormattedMessage id="send" />
          </button>
        </fieldset>
      </form>

      {error ? <p className="error">⚠️ {error}</p> : null}
    </section>
  );
};
