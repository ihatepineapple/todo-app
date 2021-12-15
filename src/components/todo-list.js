import React from 'react';
import ToDo from './todo';

function TodoList({todoList}) {
    return (
        <div>
            {todoList.map(todo => {
               return (
                   <ToDo todo={todo} />
               )
           })}
            
        </div>
    )
}

export default TodoList
