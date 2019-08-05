import React, { useState } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const SearchBar = props => {
  const [query, updateQuery] = useState("");

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        props.searchGifs(query);
      }}
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
          onChange={e => updateQuery(e.target.value)}
          type="text"
          name="gif-search"
          value={query}
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
