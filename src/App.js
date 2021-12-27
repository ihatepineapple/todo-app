import React, { useState } from "react";
// import { nanoid } from "nanoid";

import Todo from "./components/todo.js";
import Form from "./components/form.js";
import FilterButton from "./components/FilterButton.js";

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  console.log(tasks);
  const taskList = tasks.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.complete}
      key={task.id}
    />
  ));

  function addTask(name) {
    const newTask = { id:`${tasks.length + 1}`, name: name, completed: false };
    setTasks([...tasks, newTask]);
  }

  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  return (
    <div className="todoapp stack-large">
      <h1>Todo App</h1>
      <Form addTask={addTask} />

      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>

      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;
