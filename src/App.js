import React, { useState } from 'react';
import data from './data.json';

import Header from './components/todo-header';
import TodoList from './components/todo-list';
// import Input from './components/todo-input';

import './App.css';
import './assets/stylesheets/styles.css';



function App() {
  const [ todoList, setTodoList ] = useState(data);

  
  
  const handleToggleComplete = (id) => {
    let mapped = todoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setTodoList(mapped);
  }

  const deleteItem = (id) => {
    const index = todoList.map(todo => todo.id).indexOf(Number(id))
    const updatedList = [...todoList];
    updatedList.splice(index, 1)
    setTodoList(updatedList)
  }



  return (
    <div className="App">

            <Header />
            <TodoList todoList={todoList} handleToggleComplete={handleToggleComplete} deleteItem={deleteItem}/>

    </div>
  );
}

export default App;


