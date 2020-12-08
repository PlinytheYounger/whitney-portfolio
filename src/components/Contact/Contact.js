import React from 'react';

class Contact extends React.Component {
    state = {
        value: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target);
    }

    handleChange = (event) => {
        this.setState({value: event.target.value})
    }

    render() {
        return(
            <div>
                <form className="contact-me-form" onSubmit={this.handleSubmit} onChange={this.handleChange} >
                    <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Name" />
                    <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Email" />
                    <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Subject" />
                    <textarea value={this.state.value} onChange={this.handleChange} placeholder="Message" />
                    <input type="submit" value="Send" />
                </form>
            </div>
        )
    }
}

export default Contact;