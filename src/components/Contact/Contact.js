import React, { useState } from 'react';
import '../../css/contact.css';
import Input from './ContactInputs';
import Button from './Button';
import axios from 'axios';
const BASE_URL = 'http://localhost:3001';


const Contact = (props) => {

    const [ formState, setFormState ] = useState({
        contactForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
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
        formIsValid: false,
    });

    const [ resultState, setResultState ] = useState()

    const sendForm = () => {
        axios
         .post(BASE_URL + '/send', { ...formState })
         .then(response => {
            setResultState(response.data);
            setFormState({ 
            contactForm: {
                name: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
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
            });
         })
         .catch(() => {
           setResultState({ success: false, message: 'Something went wrong. Try again later'});
       });
    }

    const inputChangedHandler = (event, inputIdentifier) => {
        // clone state
        const updatedContactForm = {
            ...formState.contactForm
        }
        // deep clone
        const updatedFormElement = {...updatedContactForm[inputIdentifier]}
        // set the state element value to the value of the event target value
        updatedFormElement.value = event.target.value;
        // checking each element is valid using the checkValidity function written below that takes 2 arguments [value of the updated element, validation rules of the updated element]
        updatedFormElement.valid = checkValidity(updatedFormElement.value, updatedFormElement.validation);
        // update touched key to true as user is typing in the form
        updatedFormElement.touched = true;
        // update the specific element to the updated form element declared
        updatedContactForm[inputIdentifier] = updatedFormElement;
        // want to check if all elements are valid
        let formIsValid = true;
        // check all elements for their validity
        for (let inputIdentifier in updatedContactForm) {
            formIsValid = updatedContactForm[inputIdentifier].valid && formIsValid;
        }
        // set state to equal the updated contact form with the new values
        setFormState({
            contactForm: updatedContactForm, 
            formIsValid: formIsValid
        })
    }

    const checkValidity = (value, rules) => {
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
        return isValid;
    }

    const submitHandler = (event) => {
        event.preventDefault();
        // declare new object variable
        const formData = {};
        // iterate through the contact form and pull the key name
        for (let formElementIdentifier in formState.contactForm) {
            // use the key name to set the new object equal to the new value
            formData[formElementIdentifier] = formState.contactForm[formElementIdentifier].value
        }
        const contact = {
            contactData: formData
        }
        sendForm(contact);


        setFormState({
            contactForm: {
                name: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
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
        })
    }


    const formElementsArr = [];

    for (let key in formState.contactForm) {
        formElementsArr.push({
            id: key,
            config: formState.contactForm[key] 
        })
    }

    
        // ************************************* //
        // RETURN //
        // ************************************* //
    
    return(
            <>
                <div id="contact-me-container">
                    {resultState && (
                        <p className={`${resultState.success ? 'success' : 'error'}`}>
                            {resultState.message}
                        </p>
                    )}
                    <form className="contact-me-form" onSubmit={submitHandler} >
                        <h2>Contact</h2>
                        {formElementsArr.map((object) => {
                            return(
                                <Input 
                                    elementType={object.config.elementType} 
                                    elementConfig={object.config.elementConfig} 
                                    value={object.config.value} 
                                    key={object.id} 
                                    changed={(event) => inputChangedHandler(event, object.id)}
                                    invalid={!object.config.valid}
                                    shouldValidate={object.config.validation}
                                    touched={object.config.touched}
                                />
                            )
                        })}
                        
                        <Button clicked={submitHandler} btnType="Success" disabled={!formState.formIsValid} />
                    </form>
                    <div id="bottom-border"></div>
                </div>
            </>
        )};
    

export default Contact;