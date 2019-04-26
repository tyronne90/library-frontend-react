import React, { Component } from "react";
import "./App.css";

// import MainClassification from "./components/mainclassification/MainClassification";
import SubClassification from "./components/subclassification/SubClassification";

class App extends Component {
  render() {
    return (
      <div>
        <h1> Library</h1>
        {/* <MainClassification /> */}
        <SubClassification />
      </div>
    );
  }
}

export default App;
