import { useContext } from "react";
import TrashIcon from "../icons/TrashSimple.svg";
import TaskContext from "../context/TaskContext";

function TaskItem(props) {
  const { deleteTask } = useContext(TaskContext);
  return (
    <div className="task">
      {props.item.body}
      <button
        className="button-delete"
        onClick={function () {
          deleteTask(props.item.id);
        }}
      >
        <img src={TrashIcon} alt="trash" />
      </button>
    </div>
  );
}

export default TaskItem;
