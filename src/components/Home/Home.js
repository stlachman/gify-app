/** @jsx jsx */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { css, jsx } from "@emotion/core";
import HashLoader from "react-spinners/HashLoader";

import SearchBar from "../SearchBar/SearchBar";

const Home = () => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://api.giphy.com/v1/gifs/trending?api_key=${
          process.env.REACT_APP_GIF_API
        }&limit=25`
      )
      .then(res => {
        setGifs(res.data.data);
        setIsLoading(false);
      })
      .catch(err => setIsLoading(true));
  }, [isLoading]);

  const searchGifs = query => {
    axios
      .get(
        `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${
          process.env.REACT_APP_GIF_API
        }&limit=15`
      )
      .then(res => setGifs(res.data.data))
      .catch(err => console.log(err));
  };

  const storeLiked = event => {
    event.preventDefault();
    const likedImage = event.target.parentNode.parentNode.querySelector("img")
      .src;
  };

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  if (isLoading) {
    return (
      <main
        css={css`
          background: #a3aebd;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <div
          css={css`
            padding: 20px 10px;
          `}
        >
          <HashLoader
            css={override}
            sizeUnit={"px"}
            size={50}
            color={"#123abc"}
            loading={isLoading}
          />
        </div>
      </main>
    );
  }

  return (
    <main
      css={css`
        background: #a3aebd;
      `}
    >
      <div
        css={css`
          background: #00467f;
          padding: 20px 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        <h1
          css={css`
            color: #fff;
          `}
        >
          Giphy Trends!
        </h1>
        <SearchBar searchGifs={searchGifs} />
      </div>
      <div
        css={css`
          padding: 0 15px;
          max-width: 950px;
          width: 100%;
          margin: 20px auto 0;
        `}
      >
        <div
          css={css`
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 10px;
          `}
        >
          {gifs &&
            gifs.map(gif => {
              return (
                <div
                  css={css`
                    background: #fff;
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                    align-items: center;
                    padding: 10px;
                  `}
                  key={gif.id}
                >
                  <div>
                    <img
                      css={css`
                        height: auto;
                        max-width: 100%;
                      `}
                      src={gif.images.downsized.url}
                      alt=""
                    />
                  </div>
                  <div
                    css={css`
                      margin-top: 20px;
                    `}
                  >
                    <button>Like</button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </main>
  );
};

export default Home;
