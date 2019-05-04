import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class MainMenu extends Component {
  render() {
    return (
      <div>
        {/* Method 1=Href */}
        <a href="/book"> Href-Book</a>
        <br />
        <br />
        {/* Method 2 =Link*/}
        <Link to={`/mainclassification`}>Mainclassification</Link>
        <br />
        <Link to={`/subclassification`}>Subclassification</Link>
        <br />
        <Link to={`/book`}>Book</Link>
      </div>
    );
  }
}
