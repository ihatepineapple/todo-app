import React from 'react';
import ToDo from './todo';

function TodoList({todoList, handleToggleComplete, deleteItem, handleDeleteComplete, handleFilterActive}) {
    return (
        <div>
            {todoList.map(todo => {
               return (
                   <ToDo key={todo.id} todo={todo} handleToggleComplete={handleToggleComplete} deleteItem={deleteItem}/>
               )
           })}

           <div>
               <p><span>X</span> items left</p>

               <div>
                   <p>All</p>
                   <a href="#" onClick={handleFilterActive}>Active</a>
                   <p>Complete</p>

               </div>

               <button onClick={handleDeleteComplete}>Clear Complete</button>
           </div>
            
        </div>
    )
}

export default TodoList
