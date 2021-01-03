import React from 'react';
import '../../css/contact.css';
import Input from './ContactInputs';

class Contact extends React.Component {
    state = {
        contactForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Name',
                    name: 'name'
                },
                value: ''
            },
    
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Email',
                    name: 'email'
                },
                value: ''
            },
    
            subject: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Subject',
                    name: 'subject'
                },
                value: ''
            },
    
            message: {
                elementType: 'input',
                elementConfig: {
                    type: 'textarea',
                    placeholder: 'Message',
                    name: 'message'
                },
                value: ''
            }
        }
        
    };

    inputChangedHandler = (event, inputIdentifier) => {
        // clone state
        const updatedContactForm = {
            ...this.state.contactForm
        }
        // deep clone
        const updatedFormElement = {...updatedContactForm[inputIdentifier]}
        // set the state element value to the value of the event target value
        updatedFormElement.value = event.target.value;

        // update the specific element to the updated form element declared
        updatedContactForm[inputIdentifier] = updatedFormElement;

        // set state to equal the updated contact form with the new values
        this.setState({
            contactForm: updatedContactForm
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
        // declare new object variable
        const formData = {};
        // iterate through the contact form and pull the key name
        for (let formElementIdentifier in this.state.contactForm) {
            // use the key name to set the new object equal to the new value
            formData[formElementIdentifier] = this.state.contactForm[formElementIdentifier].value
        }
        const contact = {
            contactData: formData
        }
        console.log(contact);
        this.setState({

        })
    }

    // ************************************* //
    // RENDER //
    // ************************************* //

    render () {
    
        const formElementsArr = [];

        for (let key in this.state.contactForm) {
            formElementsArr.push({
                id: key,
                config: this.state.contactForm[key] 
            })
        }

    
        // ************************************* //
        // RETURN //
        // ************************************* //
    
        return(
                <>
                    <div id="contact-me-container">
                        <form className="contact-me-form" onSubmit={this.submitHandler} >
                            <h2>Contact</h2>
                            {formElementsArr.map((object) => {
                                return(
                                    <Input elementType={object.config.elementType} 
                                    elementConfig={object.config.elementConfig} 
                                    value={object.value} 
                                    key={object.id} 
                                    changed={(event) => this.inputChangedHandler(event, object.id)}/>
                                )
                            })}
                            
                            <button type="submit">Contact Whitney</button>
                        </form>
                    </div>
                </>
            )
        }
    }
    

export default Contact;