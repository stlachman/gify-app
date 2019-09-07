/** @jsx jsx */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { css, jsx } from "@emotion/core";
import Layout from "../Layout/Layout";
import GifList from "../GifList/GifList";
import HashLoader from "react-spinners/HashLoader";
import SearchBar from "../SearchBar/SearchBar";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const Home = () => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showLiked, setShowLiked] = useState(false);
  const [liked, setIsLiked] = useLocalStorage("liked", []);

  useEffect(() => {
    axios
      .get(
        `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_GIF_API}&limit=25`
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
        `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${process.env.REACT_APP_GIF_API}&limit=15`
      )
      .then(res => setGifs(res.data.data))
      .catch(err => console.log(err));
  };

  const storeLiked = gif => {
    setIsLiked([...liked, gif]);
  };

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  if (isLoading) {
    return (
      <>
        <main
          css={css`
            background: #121212;
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
      </>
    );
  }

  return (
    <>
      <Layout>
        <div
          css={css`
            background: #121212;
            padding: 20px 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
          `}
        >
          <h1
            css={css`
              color: #fff;
              margin-bottom: 1rem;
            `}
          >
            Giphy Trends!
          </h1>
          <SearchBar searchGifs={searchGifs} />
        </div>
        <div
          css={css`
            padding: 0 15px;
            max-width: 1040px;
            width: 100%;
            margin: 20px auto 0;
          `}
        >
          <button onClick={() => setShowLiked(false)}>Home</button>
          <button onClick={() => setShowLiked(true)}>Favorites</button>
          {showLiked ? (
            <GifList gifs={liked} storeLiked={storeLiked} />
          ) : (
            <GifList gifs={gifs} storeLiked={storeLiked} />
          )}
        </div>
      </Layout>
    </>
  );
};

export default Home;
