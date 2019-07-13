import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home/Home";
import "./App.css";

const App = () => {
  return <Route exact path="/" render={Home} />;
};

export default App;
