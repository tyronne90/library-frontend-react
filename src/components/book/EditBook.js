import React, { Component } from "react";

export default class EditBook extends Component {
  render() {
    return (
      <div>
        <h3>Edit Book</h3>
        <input
          type="text"
          id="bookId"
          name="bookId"
          value={this.state.bookId || ""}
          readOnly
        />{" "}
        <br />
        <input
          type="text"
          id="bookName"
          name="bookName"
          value={this.state.bookName || ""}
          readOnly
        />{" "}
        <br />
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
          id="subClassId"
          name="subClassId"
          value={this.state.subClassId || ""}
          onChange={e => this.txtOnChange(e)}
        />{" "}
        <br />
        <button onClick={e => this.handleUpdate(e)}>Update</button>
      </div>
    );
  }
}
