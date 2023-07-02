import "./PlataformFilter.css";

// Material

import { SvgIcon } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// React

import { useNavigate } from "react-router";
import { useRef } from "react";

export const PlataformFilter = () => {
  const navigate = useNavigate();

  // Scroll

  const filterRef = useRef(null);

  const handleMoveLeft = () => {
    filterRef.current.scrollBy(-100, 0);
  };

  const handleMoveRight = () => {
    filterRef.current.scrollBy(100, 0);
  };

  return (
    <>
      <section className="plataform-filter">
        <button className="move-button" onClick={handleMoveLeft}>
          <SvgIcon
            className="move-icon"
            component={ChevronLeftIcon}
            inheritViewBox
          />
        </button>

        <ul ref={filterRef} className="plataform-list">
          <li
            className="plataform"
            onClick={() => navigate("/plataform/Playstation-5")}
          >
            Playstation 5
          </li>
          <li
            className="plataform"
            onClick={() => navigate("/plataform/Playstation-4")}
          >
            Playstation 4
          </li>
          <li
            className="plataform"
            onClick={() => navigate("/plataform/Xbox-One")}
          >
            Xbox One
          </li>
          <li
            className="plataform"
            onClick={() => navigate("/plataform/Xbox-Series")}
          >
            Xbox Series
          </li>
          <li
            className="plataform"
            onClick={() => navigate("/plataform/Nintendo-Switch")}
          >
            Nintendo Switch
          </li>
          <li
            className="plataform"
            onClick={() => navigate("/plataform/PC-Gaming")}
          >
            PC Gaming
          </li>
        </ul>

        <button className="move-button" onClick={handleMoveRight}>
          <SvgIcon
            className="move-icon"
            component={ChevronRightIcon}
            inheritViewBox
          />
        </button>
      </section>
    </>
  );
};
