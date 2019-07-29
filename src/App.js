import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home/Home";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Route exact path="/" render={Home} />
    </Router>
  );
};

export default App;
