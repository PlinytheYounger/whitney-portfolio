import React from 'react';
import classes from '../../css/contact.css';

const Input = (props) => {
    let inputElement = null;
    const inputClasses = [classes.inputElement];

    if (props.invalid === true) {
        inputClasses.push(classes.invalid)
    }

    switch ( props.elementType ) {
        case ('input'):
            inputElement = 
                <input 
                    {...props.elementConfig} 
                    value={props.value} 
                    onChange={props.changed}
                    className={inputClasses.join(' ')}
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

    return (
        <div className="contact-form-elements">
            <label>{inputElement.props.placeholder}</label>
            {inputElement}
        </div>
    )
}

export default Input;