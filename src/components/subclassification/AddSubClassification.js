import React, { Component } from "react";

export default class AddSubClassification extends Component {
  state = {
    subClassId: "",
    subClassName: "",
    mainClassId: ""
  };

  txtOnChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
    console.log(e.target.value);
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
          <input
            type="text"
            onChange={e => this.txtOnChange(e)}
            value={this.state.mainClassId}
            id="mainClassId"
          />
          <button type="submit" onClick={e => this.handleClick(e)}>
            Add
          </button>
        </form>
      </div>
    );
  }
}
