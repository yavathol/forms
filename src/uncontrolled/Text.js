import React, { Component } from "react";

export class Text extends Component {
  handleSubmit = event => {
    alert("this.input.value = " + this.input.value);
    event.preventDefault();
  };

  render = () => (
    <React.Fragment>
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
            type="text"
            defaultValue={"Paweł"} // or defaultChecked for radio and checkbox
            ref={input => (this.input = input)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </React.Fragment>
  );
}
