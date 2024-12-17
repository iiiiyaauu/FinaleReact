import { useContext } from "react";
import TaskItem from "./TaskItem";
import TaskContext from "../context/TaskContext";

function TasksList() {
  const { getTasks } = useContext(TaskContext);
  const tasks = getTasks();
  return (
    <>
      <h3 className="tasks-title">Tasks to do - {tasks.length}</h3>
      {tasks.map(function (item) {
        return <TaskItem item={item} key={item.id} />;
      })}
    </>
  );
}

export default TasksList;
