import React from 'react'
import Index from './ContactForm'

class ContactPage extends React.Component {
    submit = values => {
        // print the form values to the console
        console.log(values)
    }
    render() {
        return <Index onSubmit={this.submit} />
    }
}

export default ContactPage
