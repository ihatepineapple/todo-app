import React, { useState } from 'react';
import data from './data.json';

import Header from './components/todo-header';
import TodoList from './components/todo-list';
import Input from './components/todo-input';

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

  const handleFilterActive = () => {
    console.log("hey")

  }

  const handleDeleteComplete = () => {
    let deleteCompleteList = todoList.filter(task => {
      return !task.complete;
    });
    setTodoList(deleteCompleteList);
  }

  const addTask = (userInput) => {
    let copyList = [...todoList];
    copyList = [...copyList, { id: todoList.length + 1, task: userInput, complete: false }];
    setTodoList(copyList);
  }

  return (
    <div className="App">

            <Header />
            <Input addTask={addTask} />
            <TodoList todoList={todoList} handleFilterActive={handleFilterActive} handleToggleComplete={handleToggleComplete} handleDeleteComplete={handleDeleteComplete} deleteItem={deleteItem}/>

    </div>
  );
}

export default App;


