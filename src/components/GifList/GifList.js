/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

const GifList = ({ gifs, storeLiked }) => {
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2rem 4rem;
      `}
    >
      {gifs &&
        gifs.map(gif => {
          return (
            <div
              css={css`
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
                padding: 10px;
                border: 22px solid #1b1c1f;
              `}
              key={gif.id}
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
                  alt=""
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
                    background: #f9f9f9;
                    padding: 8px 26px;
                    font-size: 18px;
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
        })}
    </div>
  );
};

export default GifList;
