import React from 'react';
import '../../css/contact.css';

const Input = (props) => {
    let inputElement = null;

    switch ( props.elementType ) {
        case ('input'):
            inputElement = 
                <input 
                    {...props.elementConfig} 
                    value={props.value} 
                    onChange={props.changed}
                />;
            break;
        case ('textarea'):
            inputElement = <input {...props.elementConfig} value={props.value} onChange={props.changed}/>;
            break;
        default:
            inputElement = <input {...props.elementConfig} value={props.value} onChange={props.changed}/>;
    }

    return (
        <div className="contact-form-elements">
            <label>{inputElement.props.placeholder}</label>
            {inputElement}
        </div>
    )
}

export default Input;