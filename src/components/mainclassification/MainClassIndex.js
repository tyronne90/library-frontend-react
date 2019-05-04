import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainMenuIndex from "../menu/MainMenuIndex";
import MainClassification from "./MainClassification";
import EditMainClass from "./EditMainClass";

export default class MainClassIndex extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={MainMenuIndex} />
          <Route
            path="/mainclassification"
            exact
            component={MainClassification}
          />
          <Route
            path="/EditMainClass/:mainClassId"
            exact
            component={EditMainClass}
          />
        </Switch>
      </Router>
    );
  }
}
