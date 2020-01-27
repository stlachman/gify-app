import React from "react";
import { Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Gif from "./components/Gif/Gif";

const App = () => {
  return (
    <>
      <Route path="/" exact component={Home} />
      <Route path="/gifs/:id" component={Gif} />
    </>
  );
};

export default App;
