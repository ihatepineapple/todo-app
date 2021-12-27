import React from "react";

function CustomCheckbox(props) {
//   console.log(props.data);

  return (
    <div id={props.data.id}>
      <label className="cb__container">
        <input
          type="checkbox"
          defaultChecked={props.data.completed}
          onChange={() => props.data.toggleTaskCompleted(props.data.id)}
        />
        <span className="checkmark"></span>
      </label>
    </div>
  );
}

export default CustomCheckbox;
