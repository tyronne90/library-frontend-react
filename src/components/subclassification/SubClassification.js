import React, { Component } from "react";
import SubClass from "./SubClass";

export default class AddSubClassification extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      subClassId: "",
      subClassName: "",
      mainClassId: "",
      getMainClassId: []
    };
  }

  txtOnChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
    console.log(e.target.value);
  };

  handleChange = e => {
    this.setState({
      mainClassId: e.target.value
    });
    console.log(e.target.value);
  };

  handleClick = e => {
    e.preventDefault();
    // console.log("hello");
    const subClass = {
      subClassId: this.state.subClassId,
      subClassName: this.state.subClassName,
      mainClassId: this.state.mainClassId
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

  componentDidMount() {
    this.FetchMainClassId();
  }

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

          {/* onChange={e => this.handleChange(e)} */}
          <select id="mainClassId" onChange={e => this.handleChange(e)}>
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
      </div>
    );
  }
}
