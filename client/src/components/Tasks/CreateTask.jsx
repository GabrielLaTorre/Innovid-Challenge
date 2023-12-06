import { useState } from "react";

import Button from "../shared/Button";
import Input from "../shared/Input";
import '../../App.css'

export default function CreateTask({onAddTask}){

  const [taskContent, setTaskContent] = useState('')

  const handleAddTask = async () => {
    if(taskContent === '') {
      alert("The field cannot be empty!")
      return
    }
    onAddTask(taskContent)
    setTaskContent('')
  }

  const handleOnChange = (event) => {
    const value = event.target.value
    setTaskContent(value)
  }

  return (
    <header className="flex rounded-lg mb-5 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 p-0.5">
      <Input 
      taskContent={taskContent}
      handleOnChange={handleOnChange}
      />
      <Button 
      styles={"p-2.5 bg-green-500 hover:bg-green-500/75 rounded-md font-bold"}
      handleOnClick={handleAddTask}
      >
        ADD
      </Button>
    </header>
  )
}