import "./TitleAnimation.css";
import { Link } from "react-router-dom";

export const TitleAnimation = () => {
  return (
    <>
      <Link to="/">
        <svg className="text-stroke" viewBox="0 0 500 100">
          <text className="text" x="60" y="75">
            GodLinks
          </text>
        </svg>
      </Link>
    </>
  );
};
