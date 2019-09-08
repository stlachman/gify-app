/** @jsx jsx */
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
        font-size: 1.8rem;
        transition: 0.325s ease-in-out;
        &:hover {
          cursor: pointer;
          opacity: 0.75;
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
