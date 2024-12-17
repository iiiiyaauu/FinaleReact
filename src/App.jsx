import { useState, useContext } from "react";
import AddTask from "./components/AddTask";
import TasksList from "./components/TasksList";
import TaskContext from "./context/TaskContext";
import "./App.css";

function App() {
  const { addTask, getTasks } = useContext(TaskContext);
  const [task, setTask] = useState("");
  function handleChange(event) {
    setTask(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    addTask({ id: Math.random(), body: task });
  }

  return (
    <div className="container">
      <AddTask
        task={task}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <TasksList />
    </div>
  );
}

export default App;
