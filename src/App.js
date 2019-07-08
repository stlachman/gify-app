// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import React from "react";
import axios from "axios";
import { css, jsx } from "@emotion/core";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      gifs: []
    };
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
}

export default App;
