import React from 'react'
import TaskItem from './TaskItem'

function TasksList(props) {
  return (
    <>
      <h3 className='tasks-title'>Tasks to do - {props.tasks.length}</h3>
      {
        props.tasks.map(function(item, index) {
          return <TaskItem item={item} key={index}/>
        })
      }
    </>
  )
}

export default TasksList