import { useState } from "react";

function useTaskManager() {
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    setTasks(function (prevTasks) {
      return [...prevTasks, task];
    });
  }

  function deleteTask(id) {
    console.log(id);
    setTasks(function (prevTasks) {
      return prevTasks.filter(function (task) {
        return task.id !== id;
      });
    });
  }

  function getTasks() {
    return tasks;
  }

  return { addTask, deleteTask, getTasks };
}

export default useTaskManager;
