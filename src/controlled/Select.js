import React, {Component} from 'react';

export class Select extends Component {
    state = {value: 'react'};

    handleChange = event => {
        this.setState({value: event.target.value});
    };

    handleSubmit = event => {
        alert('this.state.value = ' + this.state.value);
        event.preventDefault();
    };

    render = () => (
        <React.Fragment>
            <form onSubmit={this.handleSubmit}>
                <label>
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue.js">Vue.js</option>
                    </select>
                </label>
                <input type="submit" value="Submit"/>
            </form>
            <span>this.state.value = "{this.state.value}"</span>
        </React.Fragment>
    );
}
