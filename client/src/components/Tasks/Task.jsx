import { useState, useEffect } from "react";

import '../../App.css'

export default function Task({ id, text, onRemoveTask }){

  console.log(id, text)
  return (
    <li key={id}>
      <p> {text} </p>
      <button 
      onClick={() => {
        onRemoveTask(id)
      }}>
        X
      </button>
    </li>
  )
}