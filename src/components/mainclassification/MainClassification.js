import React, { Component } from "react";
// import axios from "axios";
import MainClass from "./MainClass";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default class extends Component {
  state = {
    mainClassName: "",
    getMainClass: []
  };

  txtOnChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
    // console.log(e.target.value);
  };

  fetchMainClass() {
    fetch(`http://localhost:8080/library/getAllMainClass`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          getMainClass: data,
          isLoading: false
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchMainClass();
  }

  // Without the fetchMainClass function we can use this alone
  // async componentDidMount() {
  //   const url = "http://localhost:8080/library/getAllMainClass";
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   console.log(data);
  //   this.setState({ getMainClass: data });
  // }

  handleClick = e => {
    e.preventDefault();
    // console.log("hello");
    console.log(this.state.mainClassName);
    const mainClass = {
      mainClassName: this.state.mainClassName
    };
    let newMainClass = [...this.state.getMainClass, mainClass];
    this.setState({
      mainClassName: "",
      getMainClass: newMainClass
    });

    MainClass.AddMainClass(mainClass);
    console.log(mainClass);

    // This steps to add mainclassification by using axios 3rd party
    //   axios
    //     .post(`http://localhost:3000/mainclassification`, {
    //       mainClass
    //     })
    //     .then(res => {
    //       console.log(res);
    //       console.log(res.data);
    //     });
  };

  handleEdit = mainClassId => {
    // this.props.history.push(`/EditSubClass`);
    this.props.history.push(`/EditMainClass/${mainClassId}`);
    console.log(mainClassId);
  };

  handleDelete = mainClassId => {
    MainClass.DeleteMainClass(mainClassId);
    console.log(" Successfully deleted " + mainClassId);
    const getMainClass = this.state.getMainClass.filter(getMainClass => {
      return getMainClass.mainClassId !== mainClassId;
    });
    this.setState({
      getMainClass
    });
  };

  render() {
    return (
      <div>
        <h3>Main Classification </h3>
        <form>
          <input
            type="text"
            ref="mainClassName"
            onChange={e => this.txtOnChange(e)}
            value={this.state.mainClassName}
            id="mainClassName"
          />
          <button type="submit" onClick={e => this.handleClick(e)}>
            Add
          </button>
        </form>

        {/* {this.state.getMainClass.map(e => (
          <p>
            {e.mainClassName}
          </p>
        ))} */}

        {this.state.getMainClass.map(fetchMainClassification => {
          const { mainClassId, mainClassName } = fetchMainClassification;
          return (
            <div key={mainClassId}>
              <table border="1">
                <tbody width="20%">
                  <tr>
                    {/* <td> {mainClassId} </td> */}
                    <td width="60%"> {mainClassName} </td>
                    <td align="right">
                      <button
                        type="submit"
                        onClick={() => this.handleEdit(mainClassId)}
                      >
                        <i className="fa fa-pencil-alt" />
                      </button>

                      <button
                        type="submit"
                        onClick={() => this.handleDelete(mainClassId)}
                      >
                        <i className="fas fa-trash-alt" />
                      </button>
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
