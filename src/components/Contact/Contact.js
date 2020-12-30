import React, {setState} from 'react';
import useContactForm from './CustomHooks';

const Contact = () => {
    const signup = (inputs) => {
        setState({
            ...inputs
        })
        console.log(`Form submitted! Name: ${inputs.name} Email: ${inputs.email}`);
    }

    // initialize the custom hook by destructuring
    const {inputs, handleChange, handleSubmit} = useContactForm(signup);


    // ************************************* //
    // RETURN //
    // ************************************* //

    return(
            <>
                <div className="title">
                    <h2>Contact</h2>
                </div>
                <div>
                    <form className="contact-me-form" onSubmit={handleSubmit}>
                        <div>
                            <label>Name</label>
                            <input type="text" name="name" placeholder="Name" onChange={handleChange} value={inputs.name} />
                        </div>

                        <div>
                            <label>Email</label>
                            <input type="text" name="email" placeholder="Email" onChange={handleChange} value={inputs.email} />
                        </div>
                        
                        <div>
                            <label>Subject</label>
                            <input type="text" name="subject" placeholder="Subject" onChange={handleChange} value={inputs.subject} />
                        </div>

                        <div>
                            <label>Message</label>
                            <textarea name="message" placeholder="Message" onChange={handleChange} value={inputs.message} />
                        </div>

                        <div>
                            <button type="submit">Contact Me</button>
                        </div>
                    </form>
                </div>
            </>
        )
    }

export default Contact;