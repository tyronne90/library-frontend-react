import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainMenuIndex from "../menu/MainMenuIndex";
import SubClassification from "./SubClassification";
import EditSubClass from "./EditSubClass";

export default class SubClassIndex extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={MainMenuIndex} />
          <Route
            path="/subclassification"
            exact
            component={SubClassification}
          />
          <Route
            path="/EditSubClass/:subClassId"
            exact
            component={EditSubClass}
          />
        </Switch>
      </Router>
    );
  }
}
