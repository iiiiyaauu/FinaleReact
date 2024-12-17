import React from 'react'
import TaskItem from './TaskItem'
import { useContext } from 'react'
import TaskContext from '../context/TaskContext'

function TasksList() {
  const tasks = useContext(TaskContext)
  return (
    <>
      <h3 className='tasks-title'>Tasks to do - {tasks.length}</h3>
      {
        tasks.map(function(item, index) {
          return <TaskItem item={item} key={index}/>
        })
      }
    </>
  )
}

export default TasksList