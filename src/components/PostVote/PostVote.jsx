import "./PostVote.css";

// React

import { useState } from "react";

// Contexts

import { useAuth } from "../../contexts/AuthContext";
import { useShowLogin } from "../../contexts/ShowLoginContext";

// Fetchs

import { postVoteService } from "../../services/api";

// Material

import { Rating } from "@mui/material";
import { FormattedMessage } from "react-intl";

export const PostVote = ({ votes, offerId, refresh }) => {
  const { user, token } = useAuth();
  const [showLogin, setShowLogin] = useShowLogin();
  const [error, setError] = useState();
  const [showVoteMadeModal, setShowVoteMadeModal] = useState();

  // Save votes in a variable
  const rating = votes ? Number(votes) : 0;

  // handle Votes

  const handleVotes = (e, newValue) => {
    postVote(newValue);
  };

  // Function

  const postVote = async (vote) => {
    try {
      if (user) {
        await postVoteService(token, offerId, { vote });
        setShowVoteMadeModal(!showVoteMadeModal);
        setTimeout(() => {
          setShowVoteMadeModal(false);
          refresh(); // Hacer que funcione el refresh
        }, 1500);
      } else {
        setShowLogin(!showLogin);
      }
    } catch (error) {
      setError(error.message);
      setTimeout(() => {
        setError(null);
      }, 1500);
    }
  };

  // Error messages

  error === `"vote" must be a number` && setError(); // este error no hay que traducirlo Pablo
  // error === "No puedes votar tu propia oferta" && setError();
  // error === "Ya has votado esta oferta" && setError();

  return (
    <>
      <section
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="rating-wrap"
      >
        <section className="rating-box">
          <Rating
            size="small"
            className="rating"
            name="simple-controlled"
            defaultValue={rating}
            precision={1}
            onChange={handleVotes}
          />

          <p className="avgVotes">({votes ? Number(votes).toFixed(1) : 0})</p>
        </section>
        {error ? <p className="error vote">{error}</p> : ""}
      </section>
      {showVoteMadeModal && (
        <section className="modal-back dark">
          <section className="modal-body little">
            <h3>
              <FormattedMessage id="send-vote-success" />{" "}
              {/* Falta traducir esto */}
            </h3>

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
          </section>
        </section>
      )}
    </>
  );
};
