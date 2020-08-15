import React, { useState } from "react";
import Tour from "reactour";
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
import { Write } from "./Write";
import { Classpage } from "./Classpage";
import { Note } from "./Note";
import { TourSteps } from "./TourSteps";

const App = () => {
  const steps = TourSteps();
  const [showTour, setShowTour] = useState(false);

  return (
    <div>
      <Router>
        <Navbar
          onIconPress={() => {
            setShowTour(true);
          }}
        />
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
          <Route path="/contest:id/problems">
            <Showcontestassignments />
            <Route path="/contest:id/problems:id">
              <Assignmentcontent />
            </Route>
          </Route>

          <Route path="/course/:id">
            <Courses />

            <Route path="/course/:id/class">
              <Classpage />
            </Route>
            <Route path="/course/:id/write">
              <Write />
            </Route>
            <Route path="/course/:id/note:id">
              <Note />
            </Route>
          </Route>
        </Switch>
      </Router>
      <Tour
        steps={steps}
        isOpen={showTour}
        onRequestClose={() => setShowTour(false)}
      />
    </div>
  );
};

export default App;
