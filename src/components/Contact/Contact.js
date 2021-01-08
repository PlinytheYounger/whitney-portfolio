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
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
    
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Email',
                    name: 'email'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
    
            subject: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Subject',
                    name: 'subject'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
    
            message: {
                elementType: 'input',
                elementConfig: {
                    type: 'textarea',
                    placeholder: 'Message',
                    name: 'message'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
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
        // checking each element is valid using the checkValidity function written below that takes 2 arguments [value of the updated element, validation rules of the updated element]
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        // update the specific element to the updated form element declared
        updatedContactForm[inputIdentifier] = updatedFormElement;
        console.log(updatedFormElement);
        // set state to equal the updated contact form with the new values
        this.setState({
            contactForm: updatedContactForm
        })
    }

    checkValidity(value, rules) {
        // add "validation" key to all elements & set required: true or false, depending on the need
        // add "valid" key to all elements and set to true or false (should be false initially)
        // set isValid to false, since the form is initially empty
        let isValid = false;
        // check to see whether valid is truthy
        if (rules.required) {
            // if value is not equal to an empty string return true and set that equal to isValid
            isValid = value.trim() !== '';
        }
        // return true or false to changeHandler function

        return isValid;
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
                                    <Input 
                                        elementType={object.config.elementType} 
                                        elementConfig={object.config.elementConfig} 
                                        value={object.value} 
                                        key={object.id} 
                                        changed={(event) => this.inputChangedHandler(event, object.id)}
                                        invalid={object.valid}
                                    />
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