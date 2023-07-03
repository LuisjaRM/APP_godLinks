import "./PostVote.css";

// React

import { useState } from "react";

// Contexts

import { useAuth } from "../../contexts/AuthContext";
import { useShowLogin } from "../../contexts/ShowLoginContext";

// Fetchs

import { postVoteService } from "../../services/api";

export const PostVote = ({ votes, offerId, userId }) => {
  const { user, token } = useAuth();
  const [showLogin, setShowLogin] = useShowLogin();
  const [userVote, setUserVote] = useState(0);
  const [error, setError] = useState();

  // Save votes in a variable
  const rating = votes ? Number(votes) : 0;

  // Check if the user is logged in and if they try to vote on their own offer
  const sameUser = user ? (user.id === userId ? true : false) : false;

  // Function

  const postVote = async (vote) => {
    try {
      user
        ? // Fetch
          await postVoteService(token, offerId, { vote })
        : setShowLogin(!showLogin);
    } catch (error) {
      setError(error.message);
      setTimeout(() => {
        setError(null);
        setUserVote(0);
      }, 1500);
    }
  };

  // Error messages

  // error === "No puedes votar tu propia oferta" && setError();

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
            className="vote-button"
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
            className="vote-button"
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
            className="vote-button"
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
            className="vote-button"
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
            className="vote-button"
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
      {error ? <p className="error vote">{error}</p> : ""}
    </section>
  );
};
