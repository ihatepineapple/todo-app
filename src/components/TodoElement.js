import React from "react";
import CustomCheckbox from "./CustomCheckbox.js";

import { ReactComponent as DeleteIcon } from "../assets/icons/icon-cross.svg";

function Todo(props) {
  return (
    <li>
      <div className="inline_task">
          <div className="inline_task__info">
        <CustomCheckbox data={props} />
        <p className={props.completed ? "task strike" : "task"}>{props.name}</p>

          </div>

        <span className="btn__delete">
          <DeleteIcon
            height="12px"
            onClick={() => props.deleteTask(props.id)}
            fill="var(--text-color)"
          />
        </span>
      </div>
    </li>
  );
}

export default Todo;
