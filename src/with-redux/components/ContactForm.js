import React, {Component} from "react";
import {connect} from 'react-redux';
import {saveFormValue} from '../actions';
import {Input} from './Input';

class ContactForm extends Component {

    submitForm = () => {

    };

    isFormValid = (showErrors) => {
        return this.validations.every(isValidFunc => isValidFunc(showErrors));
    };

    render() {
        return (
            <form>
                <Input
                    label="Name"
                    value={this.props.contactForm["Name"]}
                    validation="['required']"
                    onChange={this.props.onChange}
                >
                    {({onChange, value}) => (<input value={value || ""}
                                                    onChange={e => onChange({name: "Name", value: e.target.value})}
                        />
                    )}
                </Input>

                <button onClick={this.submitForm}>Submit</button>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    contactForm: state.contactForm
});

const mapDispatchToProps = dispatch => {
    onChange: payload => dispatch(saveFormValue(payload));
};

export const ContactFormConnected = connect(mapStateToProps, mapDispatchToProps)(ContactForm);