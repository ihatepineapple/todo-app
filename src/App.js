import React, { useState } from 'react';
import data from './data.json';

import Header from './components/todo-header';
import TodoList from './components/todo-list';
import Input from './components/todo-input';

import './App.css';
import './assets/stylesheets/styles.css';



function App() {
  const [ todoList, setTodoList ] = useState(data);
  const [ filteredTodoList, setFilteredTodoList ] = useState();
  const [ filterState, setFilterState ] = useState(false);

  
  
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

  const handleFilter = (event) => {
    const stateCopy = [...todoList];
    switch (event.target.id) {
      case "active":
        const activeList = stateCopy.filter(task => !task.complete)
        console.log(activeList);
        setFilteredTodoList(activeList);
        setFilterState(true)
        break;

      case "complete":
        const completeList = stateCopy.filter(task => task.complete)
        console.log(completeList);
        setFilteredTodoList(completeList);
        setFilterState(true)
        break;

      default:
        console.log(todoList);
        setFilterState(false)
        return todoList;

      }


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
            <TodoList todoList={filterState ? filteredTodoList : todoList} handleFilter={handleFilter} handleToggleComplete={handleToggleComplete} handleDeleteComplete={handleDeleteComplete} deleteItem={deleteItem}/>

    </div>
  );
}

export default App;


