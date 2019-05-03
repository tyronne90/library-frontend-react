import React, { Component } from "react";
import "./App.css";

// import SubClassIndex from "./components/subclassification/SubClassIndex";
// import MainClassIndex from "./components/mainclassification/MainClassIndex";
// import BookIndex from "./components/book/BookIndex";
import MainMenu from "./components/menu/Menu";
class App extends Component {
  render() {
    return (
      <div>
        <h1> Library</h1>
        {/* <MainClassIndex /> */}
        {/* <SubClassIndex /> */}
        <MainMenu />
      </div>
    );
  }
}

export default App;
