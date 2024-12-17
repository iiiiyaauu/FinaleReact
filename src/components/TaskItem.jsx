import React from 'react'

function TaskItem(props) {
  return (
    <div className="task">
      {props.item}
    </div>
  );
}

export default TaskItem