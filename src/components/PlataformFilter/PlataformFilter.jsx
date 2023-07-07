import "./PlataformFilter.css";

// Material

import { SvgIcon } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// React

import { useNavigate } from "react-router";
import { useRef } from "react";

// Contexts

import { useNightMode } from "../../contexts/NightModeContext";

export const PlataformFilter = () => {
  // Theme Context
  const [nightMode] = useNightMode();

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
      <section
        className={`plataform-filter filter ${
          nightMode === "day" ? "light" : ""
        }`}
      >
        <button className="move-button" onClick={handleMoveLeft}>
          <SvgIcon
            className="move-icon"
            component={ChevronLeftIcon}
            inheritViewBox
          />
        </button>

        <ul ref={filterRef} className="plataform-list">
          <li
            role="button"
            className="plataform ps5"
            onClick={() => navigate("/plataform/Playstation-5")}
          >
            Playstation 5
          </li>
          <li
            role="button"
            className="plataform ps4"
            onClick={() => navigate("/plataform/Playstation-4")}
          >
            Playstation 4
          </li>
          <li
            role="button"
            className="plataform xbo"
            onClick={() => navigate("/plataform/Xbox-One")}
          >
            Xbox One
          </li>
          <li
            role="button"
            className="plataform xbs"
            onClick={() => navigate("/plataform/Xbox-Series")}
          >
            Xbox Series
          </li>
          <li
            role="button"
            className="plataform nin"
            onClick={() => navigate("/plataform/Nintendo-Switch")}
          >
            Nintendo Switch
          </li>
          <li
            role="button"
            className="plataform pc"
            onClick={() => navigate("/plataform/PC-Gaming")}
          >
            PC
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
