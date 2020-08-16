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
            <Route path="/contest:id/problems:id">
              <Assignmentcontent />
            </Route>
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
