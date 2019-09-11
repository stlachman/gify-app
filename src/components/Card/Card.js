/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Card = ({ gif, storeLiked }) => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        padding: 4rem 2rem;
        background-color: #f1f1f1;
        border-radius: 4px;
      `}
    >
      <div
        css={css`
          margin: 0 0 15px;
        `}
      >
        <img
          css={css`
            height: auto;
            max-width: 100%;
            max-height: 200px;
          `}
          src={gif.images.downsized.url}
          alt={gif.title}
        />
      </div>
      <div
        css={css`
          margin: auto 0 10px;
        `}
      >
        <button
          onClick={() => storeLiked(gif)}
          css={css`
            border: 0;
            padding: 8px 26px;
            font-size: 1.6rem;
            font-weight: 600;
            transition: 0.215s;
            border: 3px solid #333;
            background-color: #fff;
            color: #333;
            border-radius: 8px;

            &:hover {
              opacity: 0.85;
              cursor: pointer;
            }
          `}
        >
          Like
        </button>
      </div>
    </div>
  );
};

export default Card;
