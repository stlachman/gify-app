import React from "react";

const SearchBar = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <label htmlFor="gif-search">Search for Gifs</label>
      <input
        onChange={props.handleChange}
        type="text"
        name="gif-search"
        id="gif-search"
        placeholder="Search Here"
      />
      <button>Search Gifs</button>
    </form>
  );
};

export default SearchBar;
