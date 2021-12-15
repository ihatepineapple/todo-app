import React from 'react';
import ToDo from './todo';

function TodoList({todoList, handleToggleComplete}) {
    return (
        <div>
            {todoList.map(todo => {
               return (
                   <ToDo todo={todo} handleToggleComplete={handleToggleComplete}/>
               )
           })}
            
        </div>
    )
}

export default TodoList
