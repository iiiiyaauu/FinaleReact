import { useState } from 'react';
import './App.css';
import PlusIcon from './icons/Plus.svg';

function App() {
  const [task, setTask] = useState();
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
      <form className='form' onSubmit={handleSubmit}>
        <input type="text" className='input' placeholder='Add a new task' value={task} onChange={handleChange}/>
        <button type='submit' className='button'>
          <img src={PlusIcon} alt='plus'/>
        </button>
      </form>
      <h3 className='tasks-title'>Tasks to do - {tasks.length}</h3>
      {
        tasks.map(function(item, index) {
          return <div className='task' key={index}>{item}</div>
        })
      }
    </div>
  )
}

export default App
