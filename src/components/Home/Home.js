// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { css, jsx } from "@emotion/core";

import SearchBar from "../SearchBar/SearchBar";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
      query: ""
    };
  }

  render() {
    const { gifs } = this.state;
    if (!gifs) {
      return <div>Loading Gifs</div>;
    }
    return (
      <main
        css={css`
          padding: 0 15px;
        `}
      >
        <div>
          <h1>Giphy Trends!</h1>
        </div>
        <SearchBar
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <div
          css={css`
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 10px;
          `}
        >
          {gifs &&
            gifs.map(gif => {
              return (
                <div key={gif.id}>
                  <img src={gif.images.downsized.url} alt="" />
                </div>
              );
            })}
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
      .then(res => this.setState({ gifs: res.data.data }))
      .catch(err => console.log(err));
  }

  handleChange = event => {
    this.setState({
      query: [event.target.value]
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .get(
        `http://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=${
          process.env.REACT_APP_GIF_API
        }&limit=15`
      )
      .then(res => this.setState({ gifs: res.data.data }))
      .catch(err => console.log(err));
  };
}

export default withRouter(Home);
