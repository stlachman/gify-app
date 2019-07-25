import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
const SearchBar = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      
      <label css={css` color: #fff;`}htmlFor="gif-search">Search for Gifs
      <input
        onChange={props.handleChange}
        type="text"
        name="gif-search"
        id="gif-search"
        placeholder="Search Here"
      />
      </label>
      <button>Search Gifs</button>
    </form>
  );
};

export default SearchBar;
