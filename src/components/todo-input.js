import React, { useEffect, useState } from 'react';



function Input() {
    const [todoList, setTodoList] = useState([]);
    const [todo, setTodo] = useState("");

    // const todoInput = document.getElementById('todo-input');

    
    useEffect(() => {
        document
        .getElementById("todo-input")
        .addEventListener("keydown", function (event) {
            if (event.code === "Enter" || event.code === "NumpadEnter") {
                event.preventDefault();
                getInput();
            }
        });
    }, []);

    function getInput() {
        const value = document.getElementById("todo-input").value 
        console.log(value)
        setTodo(value)

        const todoArray = [...todoList]

        todoArray.push(todo)
        setTodoList(todoArray)
        console.log(todo)
        console.log(todoList)

    }

    return (
        <div>
            <form>
                <input type="text" id="todo-input" />
            </form>
        </div>
    )
}

export default Input
