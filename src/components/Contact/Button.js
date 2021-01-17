import React from 'react';
import classes from '../../css/contact.css';

const Button = (props) => {


    return (
        <button
            className={[classes.Button, classes[props.btnType]].join(' ')}
            onClick={props.clicked}
            disabled={props.disabled}
        >
            Contact Whitney 
        </button>
    )
}

export default Button;