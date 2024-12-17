import { useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import TasksList from './components/TasksList';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  function handleChange(event) {
    setTask(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setTasks(function(prev) {
      return [...prev, task];
    })
  }

  return (
    <div className='container'>
      <AddTask task={task} handleChange={handleChange} handleSubmit={handleSubmit}/>
      <TasksList tasks={tasks}/>
    </div>
  )
}

export default App
