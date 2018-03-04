import React, {Component} from 'react';

export class MultiSelect extends Component {
    state = {value: ['react']};

    handleChange = event => {
        console.log(event.target.options);
        this.setState({
            value: Array.from(event.target.options)
                .filter(o => o.selected)
                .map(o => o.value)
        });
    };

    handleSubmit = event => {
        alert('this.state.value = ' + this.state.value.toString());
        event.preventDefault();
    };

    render = () => (
        <React.Fragment>
            <form onSubmit={this.handleSubmit}>
                <label>
                    <select
                        multiple
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue.js">Vue.js</option>
                    </select>
                </label>
                <input type="submit" value="Submit"/>
            </form>
            <span>this.state.value = "{this.state.value.toString()}"</span>
        </React.Fragment>
    );
}
