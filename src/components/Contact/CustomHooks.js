import React, { useState } from 'react';

const useContactForm = (callback) => {
    // initialize a state variable and its setter function
    const [inputs, setInputs] = useState({});

    // create a function that manages the submit event & prevent the default behavior
    const handleSubmit = (event) => {
        if (event) {
            event.preventDefault();
        }
        callback();
    }

    // create a function to manage the event where the user gives some input, to be triggered every time the user enters some input and use setInputs to update the inputs state variable & user's input
    const handleChange = (event) => {
        event.persist();
        setInputs(inputs => (
            {...inputs, [event.target.name]: event.target.value}
        ));
    }

    return {
        handleSubmit,
        handleChange,
        inputs
    };
}

export default useContactForm;