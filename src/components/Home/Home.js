// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { css, jsx } from "@emotion/core";


import SearchBar from "../SearchBar/SearchBar";

class Home extends React.Component {
    state = {
      gifs: [],
      query: ""
    };

  render() {
    const { gifs } = this.state;
    if (!gifs) {
      return <div>Loading Gifs</div>;
    }
    return (
      <main>
        <div css={css`
          background: #00467F;  /* fallback for old browsers */
          background: -webkit-linear-gradient(to bottom, #A5CC82, #00467F);  /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(to bottom, #A5CC82, #00467F); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
          padding: 20px 10px;        
          display: flex;
          flex-direction: column;
          align-items: center;
        `}>
          <h1 css={css` color: #fff;`}>Giphy Trends!</h1>
            <SearchBar
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
        </div>
        <div css={css`
          padding: 0 15px;
          max-width: 950px;
          width: 100%;
          margin: 20px auto 0;
        `} >
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
                <div key={gif.id}>
                  <img css={css`
                    height: auto;
                    max-width: 100%;
                  `} src={gif.images.downsized.url} alt="" />
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
