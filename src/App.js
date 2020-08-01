import React from "react";
import { Navbar } from "./Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import { Overview } from "./Overview.js";
import { Problemset } from "./Problemset";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/dashboard">
          <Home />
        </Route>
        <Route path="./overview">
          <Overview />
        </Route>
        <Route path="/problemset">
          <Problemset />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
