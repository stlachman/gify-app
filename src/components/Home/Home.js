/** @jsx jsx */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { css, jsx } from "@emotion/core";
import Layout from "../Layout/Layout";
import GifList from "../GifList/GifList";

import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import { AlternateButton } from "../Buttons/AlternateButton";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const Home = () => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showLiked, setShowLiked] = useState(false);
  const [liked, setIsLiked] = useLocalStorage("liked", []);

  useEffect(() => {
    axios
      .get(
        `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.react_app_gif_api}&limit=25`
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
        `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${process.env.react_app_gif_api}&limit=15`
      )
      .then(res => setGifs(res.data.data))
      .catch(err => console.log(err));
  };

  const storeLiked = gif => {
    setIsLiked([...liked, gif]);
  };

  if (isLoading) {
    return <Loader isLoading={isLoading} />;
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
              margin-bottom: 2rem;
              font-size: 2.8rem;
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
          <div
            css={css`
              display: flex;
              justify-content: center;
              margin: 2rem 0;
            `}
          >
            <AlternateButton value={"Home"} setShowLiked={setShowLiked} />
            <AlternateButton value={"Liked"} setShowLiked={setShowLiked} />
          </div>
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
