import React, { useState } from "react";

function Form(props) {
    const [name, setName] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        props.addTask(name);
        setName("");
    }

    function handleChange(e) {
        setName(e.target.value);
    }
      
    
  return (
    <form onSubmit={handleSubmit} className="input">
      
      <input
        type="text"
        id="new-todo-input"
        className="input__form"
        name="text"
        autoComplete="off"
        placeholder="Enter a task..."
        value={name}
        onChange={handleChange}
      />
    </form>
  );
}

export default Form;