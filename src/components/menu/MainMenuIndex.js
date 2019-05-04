import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MainMenu from "./MainMenu";
import MainClassIndex from "../mainclassification/MainClassIndex";
import SubClassIndex from "../subclassification/SubClassIndex";
import BookIndex from "../book/BookIndex";

export default class MainMenuIndex extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={MainMenu} />
          <Route path="/mainclassification" exact component={MainClassIndex} />
          <Route path="/subclassification" exact component={SubClassIndex} />
          <Route path="/book" exact component={BookIndex} />
        </Switch>
      </Router>
    );
  }
}
