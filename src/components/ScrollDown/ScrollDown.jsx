import "./ScrollDown.css";

// Material

import { SvgIcon } from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

// React

import { useEffect, useState } from "react";

export const ScrollDown = () => {
  const [, setShow] = useState(false);

  const toggleShow = () => {
    setShow(true);
  };

  const scrollToBottom = (e) => {
    e.stopPropagation();
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleShow);

    return () => {
      window.removeEventListener("scroll", toggleShow);
    };
  }, []);

  return (
    <button onClick={scrollToBottom} id="scrollDown" title="Ver pié de página">
      <SvgIcon
        className="scroll-down-icon"
        component={KeyboardDoubleArrowDownIcon}
        inheritViewBox
      />
    </button>
  );
};
