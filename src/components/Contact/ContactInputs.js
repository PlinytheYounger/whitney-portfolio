import React from 'react';
import Form from 'react-bootstrap/Form';
import '../../css/contact.css';


const Input = (props) => {
    
    let inputElement = null;
    const inputClasses = ['inputElement'];
    
    // create dynamic label based on name (no placeholder)
    let label = props.elementConfig.name.charAt(0).toUpperCase() + props.elementConfig.name.slice(1);

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push("Invalid")
    }

    switch ( props.elementType ) {
        case ('input'):
            inputElement = 
                <Form.Control 
                    {...props.elementConfig} 
                    type={props.elementConfig.type}
                    value={props.value} 
                    onChange={props.changed}
                    className={inputClasses.join(', ')}
                />;
            break;
        case ('textarea'):
            inputElement = 
                <Form.Control 
                    {...props.elementConfig} 
                    value={props.value} 
                    onChange={props.changed}
                    className={inputClasses.join(' ')}
                />;
            break;
        default:
            inputElement = 
                <Form.Control
                    {...props.elementConfig} 
                    value={props.value} 
                    onChange={props.changed}
                    className={inputClasses.join(' ')}
                />;
    }

    // TODO: add class for error message
    let validationError = null;
    if(props.invalid && props.touched) {
        validationError = <p>Please enter a valid {props.elementConfig.name}</p>
    }

    return (
        <Form.Group controlId={`formBasic${inputElement.name}`}>
            <Form.Label>{label}</Form.Label>
            {inputElement}
            {validationError}
        </Form.Group>
    )
};

export default Input;