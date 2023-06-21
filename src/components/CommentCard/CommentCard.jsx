import "./CommentCard.css";
import { Link } from "react-router-dom";

export const CommentsCard = ({ comment }) => {
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
  return (
    <section className="comment-card">
      <section className="header">
        <Link className="link" to="/user-info">
          <section className="user-info">
            <img
              className="user-image"
              src={
                comment.avatar
                  ? `${import.meta.env.VITE_BACKEND}uploads/${comment.avatar}`
                  : "/android-icon-36x36.png"
              }
              alt={comment.user}
            />

            <p className="user-name">{comment.user}</p>
          </section>
        </Link>

        <p>
          hace {timeSinceCreated_at} {text}
        </p>
      </section>

      <section className="main">
        <p className="comment">{comment.comment}</p>
      </section>

      <section className="footer">
        <button className="like-button">👍</button>
        <p className="comment-likes">
          {comment.addLikes ? comment.addLikes : 0}
        </p>
      </section>
    </section>
  );
};
