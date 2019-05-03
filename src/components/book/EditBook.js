import React, { Component } from "react";
import BookService from "./BookService";

export default class EditBook extends Component {
  state = {
    getBook: [],
    getMainClass: [],
    getSubClass: []
  };
  getBook = {
    id: "",
    bookName: "",
    mainClassification: {
      mainClassId: "",
      mainClassName: ""
    },
    subClassification: {
      subClassId: "",
      subClassName: ""
    }
  };

  FetchMainClassId() {
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

  CbOnChange = e => {
    this.setState({
      mainClassId: e.target.value,
      subClassId: "",
      subClassName: ""
    });

    fetch(
      `http://localhost:8080/library/getAllSubClassByMainClassId/` +
        e.target.value
    )
      .then(response => response.json())
      .then(
        data =>
          this.setState({
            getSubClass: data,
            isLoading: false
          })
        // console.log(data),
        // console.log(e.subClassId)
      )
      .catch(error => this.setState({ error, isLoading: false }));

    console.log(e.target.value);
  };

  txtOnChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
    console.log(e.target.value);
  };

  handleUpdate = e => {
    // console.log(subClassId);
    const bookUpdate = {
      id: this.state.id,
      bookName: this.state.bookName,
      mainClassification: {
        mainClassId: this.state.mainClassId
      },
      subClassification: {
        subClassId: this.state.subClassId
      }
    };
    BookService.UpdateBook(bookUpdate);
    console.log(bookUpdate);
    this.props.history.push(`/`);
  };

  FetchBookById() {
    fetch(
      `http://localhost:8080/library/getBookById/` + this.props.match.params.id
    )
      .then(response => response.json())
      .then(
        data =>
          this.setState({
            id: data.id,
            bookName: data.bookName,
            mainClassId: data.mainClassification.mainClassId,
            mainClassName: data.mainClassification.mainClassName,
            subClassId: data.subClassification.subClassId,
            subClassName: data.subClassification.subClassName,
            isLoading: false
          })
        // console.log(data),
        // console.log(data.mainClassification.mainClassId)
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.FetchMainClassId();
    this.FetchBookById();
  }

  render() {
    return (
      <div>
        <h3>Edit Book</h3>
        <input
          type="text"
          id="bookId"
          name="bookId"
          value={this.state.id || ""}
          readOnly
        />{" "}
        <br />
        <input
          type="text"
          id="bookName"
          name="bookName"
          value={this.state.bookName || ""}
          onChange={e => this.txtOnChange(e)}
        />{" "}
        <br />
        <select id="mainClassId" onChange={e => this.CbOnChange(e)}>
          <option value={this.state.mainClassId || ""}>
            {" "}
            {this.state.mainClassName || ""}{" "}
          </option>
          {this.state.getMainClass.map(e => (
            <option key={e.mainClassId} value={e.mainClassId}>
              {e.mainClassName}
            </option>
          ))}
        </select>
        <br />
        <select id="subClassId" onChange={e => this.txtOnChange(e)}>
          <option value={this.state.subClassId || ""}>
            {" "}
            {this.state.subClassName || ""}{" "}
          </option>
          {this.state.getSubClass.map(e => (
            <option key={e.subClassId} value={e.subClassId}>
              {e.subClassName}
            </option>
          ))}
        </select>
        <button onClick={e => this.handleUpdate(e)}>Update</button>
      </div>
    );
  }
}
