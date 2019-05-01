import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainClassification from "./MainClassification";
import EditMainClass from "./EditMainClass";

export default class MainClassIndex extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={MainClassification} />
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
