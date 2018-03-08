import React, { Component } from 'react';
import { validators } from "../validators";

export class Input extends Component {
    state = {
        errors: []
    };



    componentDidMount() {
        // this.props.registerValidator(validators[this.props.validators[0]]);

    }

    render() {
        return (
            <label>
                {this.props.label}
                {this.props.children( { ...this.props})}
                {}
            </label>
        );
    }
}