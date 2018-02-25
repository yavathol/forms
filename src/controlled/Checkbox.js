import React, { Component } from "react";

export class Checkbox extends Component {
  state = { isChecked: false };

  handleCheckboxChange = event => {
    this.setState({ isChecked: event.target.checked });
  };

  handleSubmit = event => {
    alert("this.state.isChecked = " + this.state.isChecked);
    event.preventDefault();
  };

  render = () => (
    <React.Fragment>
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
            type="checkbox"
            checked={this.state.checkbox}
            onChange={this.handleCheckboxChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <span>this.state.isChecked = {this.state.isChecked.toString()}</span>
    </React.Fragment>
  );
}
