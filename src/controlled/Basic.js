import React, { Component } from "react";

export class Basic extends Component {
  state = { value: "" };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    alert("this.state.value = " + this.state.value);
    event.preventDefault();
  };

  render = () => (
    <React.Fragment>
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <span>this.state.value = "{this.state.value}"</span>
    </React.Fragment>
  );
}
