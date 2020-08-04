import React from "react";
import { Navbar } from "./Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Home";

import { Problemset } from "./Problemset";
import { Contest } from "./Contest";
import { Showcontestassignments } from "./Showcontestassignments.js";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/dashboard">
          <Home />
        </Route>

        <Route path="/problemset">
          <Problemset />
        </Route>
        <Route path="/contest">
          <Contest />
        </Route>
        <Route path="/a:id/problems">
          <Showcontestassignments />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
