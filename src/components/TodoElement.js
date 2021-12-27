import React from "react";
import CustomCheckbox from "./CustomCheckbox.js";

import { ReactComponent as DeleteIcon } from "../assets/icons/icon-cross.svg";

function Todo(props) {
    console.log(props)
  return (
    <li className="todo stack-small">
      <div className="inline_task">
        <CustomCheckbox data={props} />

        <p className={props.completed ? "strike" : ""}>{props.name}</p>
        <DeleteIcon height="18px" onClick={() => props.deleteTask(props.id)} />
      </div>

    </li>
  );
}

export default Todo;
