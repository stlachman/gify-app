/** @jsx jsx */
import React, { useState, useEffect } from "react";
import { css, jsx } from "@emotion/core";
import axios from "axios";
import HashLoader from "react-spinners/HashLoader";
import Layout from "../Layout/Layout";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Gif = props => {
  const [gif, setGif] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { id } = props.match.params;

  const handleClick = e => {
    e.preventDefault();
    console.log(e);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.giphy.com/v1/gifs/${id}?api_key=${
          process.env.REACT_APP_GIF_API
        }&limit=25`
      )
      .then(res => {
        setGif(res.data.data);
        setIsLoading(false);
      })
      .catch(err => console.error(err));
  }, [id, isLoading]);

  if (isLoading) {
    return (
      <Layout>
        <div
          css={css`
            padding: 0 15px;
            max-width: 950px;
            width: 100%;
            margin: 20px auto 0;
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
      </Layout>
    );
  }

  return (
    <Layout>
      <div
        css={css`
          padding: 0 15px;
          max-width: 950px;
          width: 100%;
          margin: 20px auto 0;
          display: flex;
        `}
      >
        <img src={gif.images.downsized.url} alt={gif.title} />

        <div>
          <h2>{gif.title}</h2>
          <button onClick={handleClick}>Embed Gif</button>
          <div
            css={css`
              display: none;
            `}
          >
            <span>Hi</span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Gif;
