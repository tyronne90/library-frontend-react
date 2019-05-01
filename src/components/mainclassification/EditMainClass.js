import React, { Component } from "react";
import MainClass from "./MainClass";

export default class EditMainClass extends Component {
  state = {
    getMainClassification: []
  };
  getMainClassification = {
    mainClassId: "",
    mainClassName: ""
  };

  FetchMainClassById() {
    fetch(
      `http://localhost:8080/library/getMainClassById/` +
        this.props.match.params.mainClassId
    )
      .then(response => response.json())
      .then(data =>
        this.setState({
          mainClassId: data.mainClassId,
          mainClassName: data.mainClassName,
          isLoading: false
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.FetchMainClassById(this.mainClassId);
  }

  txtOnChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
    console.log(e.target.value);
  };

  handleUpdate = () => {
    const mainClassUpdate = {
      mainClassId: this.state.mainClassId,
      mainClassName: this.state.mainClassName
    };
    MainClass.UpdateMainClass(mainClassUpdate);
    console.log(mainClassUpdate);
    // this.props.history.push(`/`);
    // window.location.reload();
  };

  render() {
    return (
      <div>
        <h3>Edit Mainclassification</h3>
        <input
          type="text"
          id="mainClassId"
          name="mainClassId"
          value={this.state.mainClassId || ""}
          readOnly
        />{" "}
        <br />
        <input
          type="text"
          id="mainClassName"
          name="mainClassName"
          value={this.state.mainClassName || ""}
          onChange={e => this.txtOnChange(e)}
        />{" "}
        <br />
        <button onClick={e => this.handleUpdate(e)}>Update</button>
      </div>
    );
  }
}
