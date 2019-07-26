import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
const SearchBar = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <label css={css` color: #fff;`}htmlFor="gif-search">Search for GIPHs
      <input
        onChange={props.handleChange}
        type="text"
        name="gif-search"
        id="gif-search"
        placeholder="Search GIPHS"
        css={css`
        margin-left: 10px;
        border: 0;
        border-bottom: 2px solid #fff;
        background: transparent;
        padding: 0px 20px 0 0;
        color: #fff;
        font-size: 14px;
        font-weight: bold;

        &::placeholder {
          color: #fff;
        }
        `}
      />
      </label>
      <button>Search Gifs</button>
    </form>
  );
};

export default SearchBar;
