import "./Search.css";

// Material

import { SvgIcon } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

// React

import { useState } from "react";
import { useNavigate } from "react-router";

export const Search = () => {
  const [searched, setSearched] = useState();
  const navigate = useNavigate();

  // Handle submit

  const handleSubmit = () => {
    navigate(`/search/${searched}`);
  };

  // CSS states

  const [isSearch, setIsSearch] = useState(false);

  return (
    <section className={`search ${isSearch && "show"}`}>
      <form onSubmit={handleSubmit} className={`form ${isSearch && "show"}`}>
        <input
          className="input"
          type="text"
          name="search"
          autoComplete="off"
          required
          value={searched}
          onChange={(e) => setSearched(e.target.value)}
        />

        <button className="search-button">
          <SvgIcon
            className={`search-icon`}
            component={SearchIcon}
            inheritViewBox
          />
        </button>
      </form>

      <button
        onClick={() => {
          setSearched("");
          setIsSearch(!isSearch);
        }}
        className={`cancel-button ${isSearch && "show"}`}
      >
        X
      </button>

      <button
        onClick={() => setIsSearch(!isSearch)}
        className={`button  open-search ${isSearch && "hide"}`}
      >
        <SvgIcon
          className={`search-icon`}
          component={SearchIcon}
          inheritViewBox
        />
      </button>
    </section>
  );
};
