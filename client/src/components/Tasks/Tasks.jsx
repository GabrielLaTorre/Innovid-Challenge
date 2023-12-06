import { useState, useEffect } from "react";

import CreateTask from './CreateTask'
import TaskList from './TaskList'

import '../../App.css'

const BASE_URL = 'http://localhost:4000'

export default function Tasks(){
  
const [tasks, setTasks] = useState([])

useEffect(() => {
  getTasks()
}, [])

const getTasks = async () => {
  const data = await fetch(`${BASE_URL}/tasks`).then(res => res.json())
  setTasks(data)
}
const onAddTask = async (taskContent) => {
  const data = await fetch(`${BASE_URL}/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: crypto.randomUUID(),
      text: taskContent
    })
  }).then(res => res.json())

  setTasks([...tasks, data])
}

const onRemoveTask = async(id) => {
  const data = await fetch(`${BASE_URL}/tasks/${id}`, {
    method: 'DELETE'
  }).then(res => res.json())

  if(data) {
    console.log("TO ELIMINATE", id)
    console.log("TASKS HERE", tasks)
    const newTasks = tasks.filter((task) => task.id !== id)
    console.log("NEW TASK", newTasks)
    setTasks(newTasks)
  }
}

  return (
    <div>
      <CreateTask
      onAddTask={onAddTask}
      />
      <TaskList
      tasks={tasks}
      onRemoveTask={onRemoveTask}
      />
    </div>
  )
}