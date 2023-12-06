import { useState, useEffect } from "react";

import '../../App.css'
import Task from "./Task";

export default function TaskList({ tasks, onRemoveTask }){


  return (
    <div className='w-full max-h-max p-0.5 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500'>
        <ul className='bg-slate-100/75 w-full h-96 overflow-auto'>
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