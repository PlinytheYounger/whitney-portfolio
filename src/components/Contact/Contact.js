import React from 'react';
import '../../css/contact.css';
import Input from './ContactInputs';
import Button from './Button';

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
                valid: false,
                touched: false
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
                valid: false,
                minLength: 5,
                touched: false
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
                valid: false,
                touched: false
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
                valid: false,
                touched: false
            }
        },
        formIsValid: false
        
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
        // update touched key to true as user is typing in the form
        updatedFormElement.touched = true;
        // update the specific element to the updated form element declared
        updatedContactForm[inputIdentifier] = updatedFormElement;
        console.log(updatedFormElement);

        // want to check if all elements are valid
        let formIsValid = true;
        // check all elements for their validity
        for (let inputIdentifier in updatedContactForm) {
            formIsValid = updatedContactForm[inputIdentifier].valid && formIsValid;
        }
        // set state to equal the updated contact form with the new values
        this.setState({
            contactForm: updatedContactForm, 
            formIsValid: formIsValid
        })
    }

    checkValidity(value, rules) {
        // add "validation" key to all elements & set required: true or false, depending on the need
        // add "valid" key to all elements and set to true or false (should be false initially)
        // set isValid to false, since the form is initially empty
        let isValid = true;
        // check to see whether valid is truthy
        if (rules.required) {
            // if value is not equal to an empty string return true and set that equal to isValid
            // add check to see if isValid is already true - if it's not than the input field is not valid
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }
        // return true or false to changeHandler function
        console.log(isValid)
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

        this.setState({
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
                                        value={object.config.value} 
                                        key={object.id} 
                                        changed={(event) => this.inputChangedHandler(event, object.id)}
                                        invalid={!object.config.valid}
                                        shouldValidate={object.config.validation}
                                        touched={object.config.touched}
                                    />
                                )
                            })}
                            
                            <Button btnType="Success" disabled={!this.state.formIsValid} />
                        </form>
                        <div id="bottom-border"></div>
                    </div>
                </>
            )
        }
    }
    

export default Contact;