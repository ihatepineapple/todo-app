import React, { useState } from "react";

function Form(props) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.addTask(name);
    setName("");
  }

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <div className="input">
      <form onSubmit={handleSubmit} className="input__form">
        <div className="input__checkbox--notChecked"></div>
        <input
          type="text"
          id="new-todo-input"
          className="input__form_field"
          name="text"
          autoComplete="off"
          placeholder="Create a new todo..."
          value={name}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default Form;
