import React from 'react'
import { Field, reduxForm } from 'redux-form'


let ContactForm = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Your name</label>
                <Field name="name"placeholder="Type your name here" component="input" type="text" />
            </div>
            <div>
                <label htmlFor="email">E-mail</label>
                <Field name="email" placeholder="Type your email here" component="input" type="email" />
            </div>
            <div>
                <label htmlFor="question">Question</label>
                <Field name="name"placeholder="Type your question here" component="textarea"/>
            </div>
            <div>
                <label htmlFor="canContactByPhone">Can contact by phone number?</label>
                <Field name="canContactByPhone" component="input" type="checkbox"/>
            </div>
            https://redux-form.com/7.3.0/examples/selectingformvalues/
            <br/>
            <button type="submit">Submit</button>
        </form>
    )
}

ContactForm = reduxForm({
    // a unique name for the form
    form: 'contact'
})(ContactForm)

export default ContactForm