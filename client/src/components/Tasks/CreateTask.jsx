import { useState } from "react";

import Button from "../shared/Button";
import Input from "../shared/Input";
import '../../App.css'

export default function CreateTask({onAddTask}){

  const [taskContent, setTaskContent] = useState('')

  const handleAddTask = async () => {
    onAddTask(taskContent)
    setTaskContent('')
  }

  const handleOnChange = (event) => {
    const value = event.target.value
    setTaskContent(value)
  }

  return (
    <header className="action-bar">
      <Input 
      taskContent={taskContent}
      handleOnChange={handleOnChange}
      />
      <Button 
      handleOnClick={handleAddTask}
      />
    </header>
  )
}