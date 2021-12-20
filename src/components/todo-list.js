import React from 'react';
import ToDo from './todo';

function TodoList({todoList, handleToggleComplete, deleteItem, handleDeleteComplete,  handleFilter}) {
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
                    <a href="#" onClick={event => handleFilter(event)} id="all">All</a>
                    <a href="#" onClick={event => handleFilter(event)} id="active">Active</a>
                    <a href="#" onClick={event => handleFilter(event)} id="complete">Complete</a>
                   

               </div>

               <button onClick={handleDeleteComplete}>Clear Complete</button>
           </div>
            
        </div>
    )
}

export default TodoList
