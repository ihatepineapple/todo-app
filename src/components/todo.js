import React from 'react'

const ToDo = ({todo, handleToggleComplete}) => {

    const handleClick = (event) => {
        event.preventDefault()
        handleToggleComplete(event.currentTarget.id)
    }


    return (
        <div id={todo.id} onClick={handleClick} className={todo.complete ? "todo strike" : "todo"}>
            {todo.task}
        </div>
    );
 };

export default ToDo
