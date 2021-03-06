import React, { Component } from "react";
import SubClass from "./SubClass";

export default class EditSubClass extends Component {
  state = {
    getSubClassification: [],
    getMainClassId: []
  };
  getSubClassification = {
    subClassId: "",
    subClassName: "",
    mainClassification: {
      mainClassId: "",
      mainClassName: ""
    }
  };

  FetchMainClassId() {
    fetch(`http://localhost:8080/library/getAllMainClass`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          getMainClassId: data,
          isLoading: false
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  FetchSubClassById() {
    fetch(
      `http://localhost:8080/library/getAllSubClassById/` +
        this.props.match.params.subClassId
    )
      .then(response => response.json())
      .then(data =>
        this.setState({
          subClassId: data.subClassId,
          subClassName: data.subClassName,
          mainClassId: data.mainClassification.mainClassId,
          mainClassName: data.mainClassification.mainClassName,
          isLoading: false
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }
  componentDidMount() {
    this.FetchSubClassById(this.subClassId);
    this.FetchMainClassId();
  }

  handleUpdate = e => {
    // console.log(subClassId);
    const subClassUpdate = {
      subClassId: this.state.subClassId,
      subClassName: this.state.subClassName,
      mainClassification: {
        mainClassId: this.state.mainClassId
      }
    };
    SubClass.UpdateSubClass(subClassUpdate);
    console.log(subClassUpdate);
    this.props.history.push(`/`);
    // window.location.reload();
  };

  txtOnChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
    // console.log(e.target.value);
  };

  render() {
    return (
      <div>
        <h1>Edit sub class</h1>
        Subclass Id:
        <input
          type="text"
          id="subClassId"
          name="subClassId"
          value={this.state.subClassId || ""}
          readOnly
        />{" "}
        <br />
        Subclass Name:
        <input
          type="text"
          id="subClassName"
          name="subClassName"
          value={this.state.subClassName || ""}
          onChange={e => this.txtOnChange(e)}
        />{" "}
        <br />
        Mainclass Id:
        <select id="mainClassId" onChange={e => this.txtOnChange(e)}>
          <option value={this.state.mainClassId || ""}>
            {this.state.mainClassName}
          </option>
          {this.state.getMainClassId.map(e => (
            <option key={e.mainClassId} value={e.mainClassId}>
              {e.mainClassName}
            </option>
          ))}
        </select>
        <br />
        <button type="submit" onClick={e => this.handleUpdate(e)}>
          Update
        </button>
      </div>
    );
  }
}
