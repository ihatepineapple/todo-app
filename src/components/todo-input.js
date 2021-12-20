import React, { useEffect, useState } from 'react';



function Input({ addTask })  {
    const [ userInput, setUserInput ] = useState('');

    const handleChange = (event) => {
        setUserInput(event.currentTarget.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input value={userInput} type="text" onChange={handleChange} placeholder="Create a new todo..."/>
        </form>
    );
};

export default Input
