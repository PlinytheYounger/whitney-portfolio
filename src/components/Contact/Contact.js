import React from 'react';

class Contact extends React.Component {
    state = {
        name: '',
        email: '',
        subject: '',
        message: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target);
    }

    handleChange = (event) => {
        this.setState({
            name: event.target.name,
            email: event.target.email,
            subject: event.target.subject,
            message: event.target.message
        })
    }

    render() {
        return(
            <>
                <div className="title">
                    <h2>Contact</h2>
                </div>
                <div>
                    <form className="contact-me-form" onSubmit={this.handleSubmit} onChange={this.handleChange} >
                        <div>
                            <label>Name</label>
                            <input type="text" value={this.state.name} onChange={this.handleChange} placeholder="Name" />
                        </div>

                        <div>
                            <label>Email</label>
                            <input type="text" value={this.state.email} onChange={this.handleChange} placeholder="Email" />
                        </div>
                        
                        <div>
                            <label>Subject</label>
                            <input type="text" value={this.state.subject} onChange={this.handleChange} placeholder="Subject" />
                        </div>

                        <div>
                            <label>Message</label>
                            <textarea value={this.state.message} onChange={this.handleChange} placeholder="Message" />
                        </div>

                        <div>
                            <input type="submit" value="Send" />
                        </div>
                    </form>
                </div>
            </>
        )
    }
}

export default Contact;