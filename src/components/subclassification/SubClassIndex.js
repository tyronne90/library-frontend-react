import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddSubClassification from "./SubClassification";
import EditSubClass from "./EditSubClass";

export default class SubClassIndex extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={AddSubClassification} />
          <Route path="/EditSubClass" exact component={EditSubClass} />
        </Switch>
      </Router>
    );
  }
}
