import React, { Component } from "react";
import "./App.css";

// import SubClassIndex from "./components/subclassification/SubClassIndex";
// import MainClassIndex from "./components/mainclassification/MainClassIndex";
// import BookIndex from "./components/book/BookIndex";
import MainMenuIndex from "./components/menu/MainMenuIndex";
class App extends Component {
  render() {
    return (
      <div>
        <h1> Library</h1>
        <h3>Test</h3>
        {/* <MainClassIndex /> */}
        {/* <SubClassIndex /> */}
        {/* <BookIndex /> */}
        <MainMenuIndex />
      </div>
    );
  }
}

export default App;
