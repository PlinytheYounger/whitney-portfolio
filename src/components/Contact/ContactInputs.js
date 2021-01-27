import React from 'react';
import '../../css/contact.css';

const Input = (props) => {


    let inputElement = null;
    const inputClasses = ['inputElement'];
    let label = props.elementConfig.name.charAt(0).toUpperCase() + props.elementConfig.name.slice(1);

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push("Invalid")
    }

    switch ( props.elementType ) {
        case ('input'):
            inputElement = 
                <input 
                    {...props.elementConfig} 
                    value={props.value} 
                    onChange={props.changed}
                    className={inputClasses.join(', ')}
                />;
            break;
        case ('textarea'):
            inputElement = 
                <input 
                    {...props.elementConfig} 
                    value={props.value} 
                    onChange={props.changed}
                    className={inputClasses.join(' ')}
                />;
            break;
        default:
            inputElement = 
                <input 
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
        <div className="contact-form-elements">
            <label>{label}</label>
            {inputElement}
            {validationError}
        </div>
    )
};

export default Input;