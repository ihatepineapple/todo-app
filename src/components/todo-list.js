import React from 'react';
import ToDo from './todo';

function TodoList({todoList, handleToggleComplete, deleteItem}) {
    return (
        <div>
            {todoList.map(todo => {
               return (
                   <ToDo todo={todo} handleToggleComplete={handleToggleComplete} deleteItem={deleteItem}/>
               )
           })}
            
        </div>
    )
}

export default TodoList
