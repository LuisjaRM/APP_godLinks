import "./TitleAnimation.css";

// React

import { Link } from "react-router-dom";

export const TitleAnimation = () => {
  return (
    <Link className="title" to="/">
      <svg className="text-stroke" viewBox="0 0 500 100">
        <text className="text" x="60" y="75">
          GodLinks
        </text>
      </svg>
    </Link>
  );
};
