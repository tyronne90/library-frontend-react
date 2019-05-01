import React, { Component } from "react";
import "./App.css";

import MainClassification from "./components/mainclassification/MainClassification";
// import SubClassIndex from "./components/subclassification/SubClassIndex";

class App extends Component {
  render() {
    return (
      <div>
        <h1> Library</h1>
        <MainClassification />
        {/* <SubClassIndex /> */}
      </div>
    );
  }
}

export default App;
