import React, { useState } from "react";
import { nanoid } from "nanoid";

import Header from "./components/Header.js";
import Todo from "./components/TodoElement.js";
import Form from "./components/InputForm.js";
import FilterButton from "./components/FilterButton.js";

import "./assets/stylesheets/styles.css";

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.complete,
  Completed: (task) => task.complete,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState("All");

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      console.log(tasks[0]);
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return { ...task, complete: !task.complete };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map((task) => (
      <Todo
        id={task.id}
        name={task.name}
        completed={task.complete}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
      />
    ));

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  function addTask(name) {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }

  const tasksNoun = taskList.length !== 1 ? "items" : "item";
  const headingText = `${taskList.length} ${tasksNoun} left`;
  
  const handleDeleteComplete = () => {
    const updatedTasks = tasks.filter((task) => !task.complete)
    setTasks(updatedTasks);
  }

  return (
    <div className="todoapp stack-large">
      <Header />
      <Form addTask={addTask} />
    

      <section className="list">
        <ul className="todo_list">{taskList}</ul>
      </section>



      <section className="filters">
        <p className="filters__info">{headingText}</p>
        <div className="filters__button_group">{filterList}</div>
        <button
          type="button"
          className="filter__btn"
          aria-pressed="false"
          onClick={handleDeleteComplete}
        >
          Clear Complete
        </button>
      </section>
    </div>
  );
}

export default App;
