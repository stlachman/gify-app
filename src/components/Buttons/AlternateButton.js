/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

export const AlternateButton = ({ value, setShowLiked }) => {
  return (
    <button
      onClick={() => {
        value === "Home" ? setShowLiked(false) : setShowLiked(true);
      }}
      css={css`
        margin: 0 1rem;

        color: #fff;
        background-color: transparent;
        border: 0;
        border-bottom: 2px solid #fff;
        font-size: 1.2rem;

        &:hover {
          cursor: pointer;
        }

        &:focus {
          outline: transparent;
        }
      `}
    >
      {value}
    </button>
  );
};
