import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
const SearchBar = props => {
  return (
    <form
      onSubmit={props.handleSubmit}
      css={css`
        display: flex;
      `}
    >
      <label
        css={css`
          color: #fff;
          display: flex;
          align-items: center;
        `}
        htmlFor="gif-search"
      >
        Search for GIPHs
        <input
          onChange={props.handleChange}
          type="text"
          name="gif-search"
          id="gif-search"
          placeholder="Search GIPHS"
          css={css`
            margin-left: 10px;
            border: 0;
            background: transparent;
            color: #161615;
            font-size: 16px;
            font-weight: bold;
            padding: 8px 10px 8px 5px;
            background: #fff;

            &::placeholder {
              color: #161615;
            }
          `}
        />
      </label>
      <button
        css={css`
          background: #e0e1dc;
          font-size: 16px;
          font-weight: bold;
        `}
      >
        Search Gifs
      </button>
    </form>
  );
};

export default SearchBar;
