import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
  }

  handleChange = event => {
    this.setState({
      query: [event.target.value]
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.searchGifs(this.state.query);
  };

  render() {
    const { handleChange, handleSubmit } = this;
    return (
      <form
        onSubmit={handleSubmit}
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
            onChange={handleChange}
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
  }
}

export default SearchBar;
