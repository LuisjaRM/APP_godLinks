import "./ScrollUp.css";

// Material

import { SvgIcon } from "@mui/material";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

// React

import { useEffect, useState } from "react";

export const ScrollUp = () => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    if (window.scrollY > 200) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
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
    <button
      onClick={scrollToTop}
      id="scrollUp"
      className={show ? "opacity-1" : "opacity-0"}
    >
      <SvgIcon
        className="scroll-up-icon"
        component={KeyboardDoubleArrowUpIcon}
        inheritViewBox
      />
    </button>
  );
};
