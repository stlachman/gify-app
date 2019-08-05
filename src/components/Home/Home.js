/** @jsx jsx */
import React from "react";
import axios from "axios";
import { css, jsx } from "@emotion/core";

import SearchBar from "../SearchBar/SearchBar";

class Home extends React.Component {
  state = {
    liked: [],
    isLoading: true,
    gifs: []
  };

  render() {
    const { gifs, isLoading } = this.state;

    if (isLoading) {
      return <div>Loading Gifs</div>;
    }

    return (
      <main
        css={css`
          background: #f1e7fe;
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
          <SearchBar searchGifs={this.searchGifs} />
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
                      <button onClick={this.storeLiked}>Like</button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </main>
    );
  }

  componentDidMount() {
    axios
      .get(
        `https://api.giphy.com/v1/gifs/trending?api_key=${
          process.env.REACT_APP_GIF_API
        }&limit=25`
      )
      .then(res => this.setState({ gifs: res.data.data, isLoading: false }))
      .catch(err => this.setState({ isLoading: false }));
  }

  searchGifs = query => {
    console.log(query);
    axios
      .get(
        `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${
          process.env.REACT_APP_GIF_API
        }&limit=15`
      )
      .then(res => this.setState({ gifs: res.data.data }))
      .catch(err => console.log(err));
  };

  storeLiked = event => {
    event.preventDefault();
    const likedImage = event.target.parentNode.parentNode.querySelector("img")
      .src;
    this.setState({
      liked: [...this.state.liked, { image: likedImage }]
    });
  };
}

export default Home;
