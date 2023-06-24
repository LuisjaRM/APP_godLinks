import "./PostVote.css";

// React

import { useState } from "react";

// Contexts

import { useAuth } from "../../contexts/AuthContext";
import { useShowLogin } from "../../contexts/ShowLoginContext";

// Fetchs

import { postVoteService } from "../../services/api";

export const PostVote = ({ votes, offerId, userId }) => {
  const rating = votes ? Number(votes) : 0;

  const { user, token } = useAuth();
  const [showLogin, setShowLogin] = useShowLogin();
  const [userVote, setUserVote] = useState(0);
  const [error, setError] = useState();

  const postVote = async (vote) => {
    try {
      user
        ? await postVoteService(token, offerId, { vote })
        : setShowLogin(!showLogin);
    } catch (error) {
      setError(error.message);
      setTimeout(() => {
        setError(null);
        setUserVote(0);
      }, 1500);
    }
  };

  const sameUser = user ? (user.id === userId ? true : false) : false;

  return (
    <section className="rating-wrap">
      <ul className="rating">
        <li className="heart">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setUserVote(1);
              postVote(1);
            }}
            className="postVote-button"
          >
            {user && !sameUser && userVote > 0
              ? "💙"
              : rating && rating > 0
              ? "❤️"
              : "🤍"}
          </button>
        </li>

        <li className="heart">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setUserVote(2);
              postVote(2);
            }}
            className="postVote-button"
          >
            {user && !sameUser && userVote > 1
              ? "💙"
              : rating && rating > 1
              ? "❤️"
              : "🤍"}
          </button>
        </li>

        <li className="heart">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setUserVote(3);
              postVote(3);
            }}
            className="postVote-button"
          >
            {user && !sameUser && userVote > 2
              ? "💙"
              : rating && rating > 2
              ? "❤️"
              : "🤍"}
          </button>
        </li>

        <li className="heart">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setUserVote(4);
              postVote(4);
            }}
            className="postVote-button"
          >
            {user && !sameUser && userVote > 3
              ? "💙"
              : rating && rating > 3
              ? "❤️"
              : "🤍"}
          </button>
        </li>

        <li className="heart">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setUserVote(5);
              postVote(5);
            }}
            className="postVote-button"
          >
            {user && !sameUser && userVote > 4
              ? "💙"
              : rating && rating > 4
              ? "❤️"
              : "🤍"}
          </button>
        </li>
        <li className="avgVotes">({votes ? Number(votes).toFixed(1) : 0})</li>
      </ul>
      {error ? <p className="vote-error">{error}</p> : ""}
    </section>
  );
};
