import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Book from "./Book";
import EditBook from "./EditBook";
import MenuIndex from "../menu/MainMenuIndex";

export default class MainClassIndex extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={MenuIndex} />
          <Route path="/book" exact component={Book} />
          <Route path="/EditBook/:id" exact component={EditBook} />
        </Switch>
      </Router>
    );
  }
}
