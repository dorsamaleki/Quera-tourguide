import React from "react";
import { Navbar } from "./Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import { Classes } from "./Classes";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/classe">
          <Classes />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
