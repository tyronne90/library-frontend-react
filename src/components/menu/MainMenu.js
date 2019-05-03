import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class MainMenu extends Component {
  render() {
    return (
      <div>
        {/* Method 1=Href */}
        <a href="/main"> Href-MainClass</a>
        <br />
        <br />
        {/* Method 2 =Link*/}
        <Link to={`/main`}>Link-MainClass</Link>
      </div>
    );
  }
}
