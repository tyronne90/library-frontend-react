import React, { Component } from "react";
import SubClass from "./SubClass";

import "@fortawesome/fontawesome-free/css/all.min.css";

export default class AddSubClassification extends Component {
  state = {
    subClassId: "",
    subClassName: "",
    mainClassId: "",
    getMainClassId: [],
    getAllSubClassification: []
  };

  txtOnChange = e => {
    this.setState({
      [e.target.id]: e.target.value
      // mainClassId: e.target.value
    });
    // console.log(e.target.value);
  };

  // handleChange = e => {
  //   this.setState({
  //     mainClassId: e.target.value
  //   });
  //   console.log(e.target.value);
  // };

  handleClick = e => {
    e.preventDefault();
    // console.log("hello");
    const subClass = {
      subClassId: this.state.subClassId,
      subClassName: this.state.subClassName,
      mainClassification: {
        mainClassId: this.state.mainClassId
      }
    };

    this.setState({
      subClassId: "",
      subClassName: "",
      mainClassId: ""
    });

    SubClass.AddSubClass(subClass);
    console.log(subClass);
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

  fetchAllMainClass() {
    fetch(`http://localhost:8080/library/getAllSubClass`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          getAllSubClassification: data,
          isLoading: false
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.FetchMainClassId();
    this.fetchAllMainClass();
  }

  handleDelete = subClassId => {
    SubClass.DeleteSubClass(subClassId);
    console.log(" Successfully deleted " + subClassId);
  };

  handleEdit = subClassId => {
    // this.props.history.push(`/EditSubClass`);
    this.props.history.push(`/EditSubClass/${subClassId}`);
    console.log(subClassId);
  };
  handleUpdate = subClassId => {
    console.log(subClassId);
    const subClassUpdate = {
      subClassId: "S05", //this.state.subClassId,
      subClassName: "aa", //this.state.subClassName,
      mainClassification: {
        mainClassId: "2" //this.state.mainClassId
      }
    };
    SubClass.UpdateSubClass(subClassUpdate);
    console.log(subClassUpdate);
  };

  render() {
    return (
      <div>
        <h2>Sub Classification</h2>
        <form>
          <input
            type="text"
            onChange={e => this.txtOnChange(e)}
            value={this.state.subClassId}
            id="subClassId"
          />
          <input
            type="text"
            onChange={e => this.txtOnChange(e)}
            value={this.state.subClassName}
            id="subClassName"
          />

          <select id="mainClassId" onChange={e => this.txtOnChange(e)}>
            <option>--select--</option>
            {this.state.getMainClassId.map(e => (
              <option key={e.mainClassId} value={e.mainClassId}>
                {e.mainClassName}
              </option>
            ))}
          </select>

          <button type="submit" onClick={e => this.handleClick(e)}>
            Add
          </button>
        </form>

        {this.state.getAllSubClassification.map(fetchSubClassification => {
          const {
            subClassId,
            subClassName,
            mainClassification: { mainClassName }
          } = fetchSubClassification;
          return (
            <div key={subClassId}>
              <table border="0" width="40%">
                <tbody>
                  <tr>
                    <td width="20%"> {subClassId} </td>
                    <td width="30%"> {subClassName} </td>
                    <td width="10%"> {mainClassName} </td>
                    <td align="right">
                      <button
                        type="submit"
                        onClick={() => this.handleEdit(subClassId)}
                      >
                        <i className="fa fa-pencil-alt" />
                      </button>

                      <button
                        type="submit"
                        onClick={() => this.handleDelete(subClassId)}
                      >
                        <i className="fas fa-trash-alt" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="4">
                      {" "}
                      <hr />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
    );
  }
}
