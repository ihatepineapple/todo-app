import React from 'react'

const ToDo = ({todo, handleToggleComplete, deleteItem}) => {

    const handleClick = (event) => {
        event.preventDefault()
        handleToggleComplete(event.currentTarget.id)
    }

    const handleDelete = (event) => {
        event.preventDefault()
        deleteItem(event.currentTarget.parentNode.id)
    }


    return (
        <div id={todo.id} onClick={handleClick} className={todo.complete ? "todo strike" : "todo"}>
            {todo.task}
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
 };

export default ToDo
