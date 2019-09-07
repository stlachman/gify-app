import React from "react";
import { Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Liked from "./components/Liked/Liked";
import Gif from "./components/Gif/Gif";

import "./App.css";

const App = () => {
  return (
    <>
      <Route path="/" exact component={Home} />
      <Route path="/liked" component={Liked} />
      <Route path="/gifs/:id" component={Gif} />
    </>
  );
};

export default App;
