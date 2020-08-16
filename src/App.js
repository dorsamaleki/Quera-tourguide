import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Tour from "reactour";
import "./App.css";
import { TourSteps } from "./config/TourSteps";
import { Navbar } from "./App/Navbar";
import { Home } from "./App/Home";
import { Problemset } from "./App/Problemset";
import { Contest } from "./App/Contest";
import { Showcontestassignments } from "./App/Showcontestassignments.js";
import { Overview } from "./App/Overview.js";
import { Courses } from "./App/Courses";
import { Write } from "./App/Write";
import { Classpage } from "./App/Classpage";
import { Note } from "./App/Note";

const App = () => {
  const [tourStep, setTourStep] = useState(0);
  const steps = TourSteps();
  const [showTour, setShowTour] = useState(false);
  const [updateTour, setUpdateTour] = useState("");
  return (
    <div>
      <Router>
        <Navbar
          onIconPress={() => {
            setShowTour(true);
          }}
          onLogoClick={() => {
            setTourStep(1);
            setUpdateTour(Date.now() + "");
          }}
          onClassClick={() => {
            setTourStep(3);
            setUpdateTour(Date.now() + "");
          }}
          onProblemSetClick={() => {
            setTourStep(11);
            setUpdateTour(Date.now() + "");
          }}
          onContestClick={() => {
            setTourStep(13);
            setUpdateTour(Date.now() + "");
          }}
        />
        <Switch>
          <Route path="/dashboard">
            <Home />
          </Route>
          <Route path="/overview">
            <Overview
              onOverviewClick={() => {
                setTourStep(4);
                setUpdateTour(Date.now() + "");
              }}
            />
          </Route>
          <Route path="/problemset">
            <Problemset />
          </Route>
          <Route path="/contest">
            <Contest
              onShowcontestClick={() => {
                setTourStep(14);
                setUpdateTour(Date.now() + "");
              }}
            />
          </Route>
          <Route path="/contest:id/problems">
            <Showcontestassignments />
          </Route>
          <Route path="/course/:id">
            <Courses
              onCourseClick={() => {
                setTourStep(5);
                setUpdateTour(Date.now() + "");
              }}
              onWriteClick={() => {
                setTourStep(7);
                setUpdateTour(Date.now() + "");
              }}
              onNoteClick={() => {
                setTourStep(9);
                setUpdateTour(Date.now() + "");
              }}
            />
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
        disableKeyboardNavigation={["esc"]}
        goToStep={tourStep}
        update={updateTour}
      />
    </div>
  );
};

export default App;
