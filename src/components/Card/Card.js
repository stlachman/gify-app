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
            color: #fff;
            background: #fc5c7d; /* fallback for old browsers */
            background: -webkit-linear-gradient(
              to bottom,
              #6a82fb,
              #fc5c7d
            ); /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(
              to bottom,
              #6a82fb,
              #fc5c7d
            ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
            padding: 8px 26px;
            font-size: 1.6rem;
            font-weight: 600;
            transition: 0.215s;

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
