import React, { useState } from 'react';
import data from './data.json';

import Header from './components/todo-header';
import TodoList from './components/todo-list';
// import Input from './components/todo-input';

import './App.css';

function App() {
  const [ todoList, setTodoList ] = useState(data);

  return (
    <div className="App">

            <Header />
            <TodoList todoList={todoList}/>

    </div>
  );
}

export default App;


