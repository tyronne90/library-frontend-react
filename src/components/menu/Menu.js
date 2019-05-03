import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MainMenu from "./MainMenu";
import MainClass from "../mainclassification/MainClassIndex";
// import SubClassIndex from "../subclassification/SubClassIndex";
// import BookIndex from "../book/BookIndex";

export default class MainClassIndex extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={MainMenu} />
          <Route path="/main" exact component={MainClass} />
        </Switch>
      </Router>
    );
  }
}
