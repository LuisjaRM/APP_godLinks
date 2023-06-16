import { CommentsCard } from "../CommentCard/CommentCard";
import "./Comments.css";

export const Comments = ({ comments }) => {
  return (
    <section className="comments-body">
      <ul className="comments-list">
        {comments?.map((comment) => (
          <li key={comment.id}>
            <CommentsCard comment={comment} />
          </li>
        ))}
      </ul>
    </section>
  );
};
