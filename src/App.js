import React from "react";
import { Navbar } from "./Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Home";

import { Problemset } from "./Problemset";
import { Contest } from "./Contest";
import { Showcontestassignments } from "./Showcontestassignments.js";
import { Assignmentcontent } from "./Assignmentcontent";
import { Overview } from "./Overview.js";
import { Courses } from "./Courses";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/dashboard">
          <Home />
        </Route>
        <Route path="/overview">
          <Overview />
        </Route>

        <Route path="/problemset">
          <Problemset />
        </Route>
        <Route path="/contest">
          <Contest />
        </Route>
        <Route path="/contest:id/problems/">
          <Showcontestassignments />
        </Route>
        <Route path="/contest:id/problems/:id">
          <Assignmentcontent />
        </Route>
        <Route path="/course:id">
          <Courses />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
