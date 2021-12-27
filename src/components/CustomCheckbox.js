import React from "react";

function CustomCheckbox(props) {

  return (
    
      <label className="cb__container" id={props.data.id}>
        <input
          type="checkbox"
          defaultChecked={props.data.completed}
          onChange={() => props.data.toggleTaskCompleted(props.data.id)}
        />
        <div className="checkmark"></div>
      </label>
  
  );
}

export default CustomCheckbox;
