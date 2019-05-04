import React, { Component } from "react";
import BookService from "./BookService";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default class Book extends Component {
  state = {
    id: "",
    bookName: "",
    subClassification: {
      subClassId: "",
      mainClassification: {
        mainClassId: ""
      }
    },
    getAllBook: [],
    getAllMainClass: [],
    getAllSubClass: []
  };

  txtOnChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
    console.log(e.target.value);
  };

  CbOnChange = e => {
    this.setState({
      mainClassId: e.target.value
    });

    fetch(
      `http://localhost:8080/library/getAllSubClassByMainClassId/` +
        e.target.value
    )
      .then(response => response.json())
      .then(data =>
        this.setState({
          getAllSubClass: data,
          isLoading: false
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));

    console.log(e.target.value);
  };

  handleClick = e => {
    e.preventDefault();
    // console.log("hello");
    const book = {
      id: this.state.id,
      bookName: this.state.bookName,
      subClassification: {
        subClassId: this.state.subClassId
      },
      mainClassification: {
        mainClassId: this.state.mainClassId
      }
    };
    let newBook = [...this.state.getAllBook, book];
    this.setState({
      id: "",
      bookName: "",
      mainClassification: {
        mainClassId: ""
      },
      subClassification: {
        subClassId: ""
      },
      getAllBook: newBook
    });

    BookService.AddBook(book);
    console.log(book);
  };

  handleEdit = id => {
    // this.props.history.push(`/EditSubClass`);
    this.props.history.push(`/EditBook/${id}`);
    console.log(id);
  };

  handleDelete = id => {
    BookService.DeleteBook(id);
    console.log(" Successfully deleted " + id);
    const getAllBook = this.state.getAllBook.filter(getAllBook => {
      return getAllBook.id !== id;
    });
    this.setState({
      getAllBook
    });
  };

  fetchAllMainClass = () => {
    fetch(`http://localhost:8080/library/getAllMainClass`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          getAllMainClass: data,
          isLoading: false
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  };

  fetchAllBook = () => {
    fetch(`http://localhost:8080/library/getBookTable`)
      .then(response => response.json())
      .then(
        data =>
          this.setState({
            getAllBook: data,
            isLoading: false
          })
        // console.log(data)
      )
      .catch(error => this.setState({ error, isLoading: false }));
  };

  componentDidMount() {
    this.fetchAllMainClass();
    this.fetchAllBook();
  }

  routeback = e => {
    this.props.history.push(`/`);
  };

  render() {
    return (
      <div>
        <h4> Book </h4>
        <button className="fa fa-success" onClick={e => this.routeback(e)}>
          Back
        </button>
        <form>
          <input
            type="text"
            onChange={e => this.txtOnChange(e)}
            value={this.state.id}
            id="id"
          />
          <input
            type="text"
            onChange={e => this.txtOnChange(e)}
            value={this.state.bookName}
            id="bookName"
          />

          <select id="mainClassId" onChange={e => this.CbOnChange(e)}>
            <option>--select--</option>
            {this.state.getAllMainClass.map(e => (
              <option key={e.mainClassId} value={e.mainClassId}>
                {e.mainClassName}
              </option>
            ))}
          </select>

          <select id="subClassId" onChange={e => this.txtOnChange(e)}>
            <option>--select--</option>
            {this.state.getAllSubClass.map(e => (
              <option key={e.subClassId} value={e.subClassId}>
                {e.subClassName}
              </option>
            ))}
          </select>

          <button type="submit" onClick={e => this.handleClick(e)}>
            Add
          </button>
        </form>

        {this.state.getAllBook.map(fetchBook => {
          const {
            id,
            bookName,
            mainClassification: { mainClassName },
            subClassification: { subClassName }
          } = fetchBook;
          return (
            <div key={id}>
              <table border="0" width="80%">
                <tbody>
                  <tr>
                    <td width="10%"> {id} </td>
                    <td width="30%"> {bookName} </td>
                    <td width="20%"> {mainClassName} </td>
                    <td width="20%"> {subClassName} </td>
                    <td width="30%" align="right">
                      <button type="submit" onClick={() => this.handleEdit(id)}>
                        <i className="fa fa-pencil-alt" />
                      </button>
                      <button
                        type="submit"
                        onClick={() => this.handleDelete(id)}
                      >
                        <i className="fas fa-trash-alt" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="5">
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
