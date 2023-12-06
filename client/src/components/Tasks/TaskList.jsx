import { useState, useEffect } from "react";

import '../../App.css'
import Task from "./Task";

export default function TaskList({ tasks, onRemoveTask }){

  console.log("TASKS", tasks)
  return (
    <div className='box-container'>
        <ul className='box'>
          {
            tasks.map((task) => (
                <Task
                text={task.text}
                id={task.id}
                onRemoveTask={onRemoveTask}
                />
              ))
          }
        </ul>
    </div>
  )
}