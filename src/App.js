import React, { Component } from "react";
import "./App.css";

// import AddMainClassification from "./components/mainclassification/AddMainClassification";
import AddSubClassification from "./components/subclassification/AddSubClassification";

class App extends Component {
  render() {
    return (
      <div>
        <h1> Library</h1>
        {/* <AddMainClassification /> */}
        <AddSubClassification />
      </div>
    );
  }
}

export default App;
