// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { css, jsx } from "@emotion/core";

import { getGifs } from "../../actions";
import SearchBar from "../SearchBar/SearchBar";

class Home extends React.Component {
  // state = {
  //   gifs: [],
  //   query: "",
  //   liked: []
  // };

  render() {
    const { gifs, isLoading } = this.props;

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
            background: #00467f; /* fallback for old browsers */
            background: -webkit-linear-gradient(
              to bottom,
              #a5cc82,
              #00467f
            ); /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(
              to bottom,
              #a5cc82,
              #00467f
            ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
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
          <SearchBar
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
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
            {gifs.data &&
              gifs.data.map(gif => {
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
    this.props.getGifs();
  }

  storeLiked = event => {
    event.preventDefault();
    const likedImage = event.target.parentNode.parentNode.querySelector("img")
      .src;
    this.setState({
      liked: [...this.state.liked, { image: likedImage }]
    });
  };

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

const mapStateToProps = state => {
  return {
    gifs: state.gifs,
    isLoading: state.isLoading,
    error: state.error
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getGifs }
  )(Home)
);
