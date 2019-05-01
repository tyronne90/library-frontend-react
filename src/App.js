import React, { Component } from "react";
import "./App.css";

// import SubClassIndex from "./components/subclassification/SubClassIndex";
import MainClassIndex from "./components/mainclassification/MainClassIndex";

class App extends Component {
  render() {
    return (
      <div>
        <h1> Library</h1>
        <MainClassIndex />
        {/* <SubClassIndex /> */}
      </div>
    );
  }
}

export default App;
