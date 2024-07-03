import React from 'react'
import { useState } from 'react'

const todo = () => {
const [todolist, setTodolist] = useState("")
const [newInput, setNewInput] = useState("")

const handleTodoSubmit = (e) => {
e.preventDefault();
if (handleTodoSubmit === true){
console.log("todo submitted")
}
}

const API_URL ="https://jsonplaceholder.org/users/"

const fetch = async() => {
try{
    const response = await fetch(API_URL)
    if(!response.ok){
throw Error("Wasn't able to get data") = await response.json()
    }
}
catch{
setNewInput(err)
}
}

  return (
    <form className='todo' onSubmit={handleTodoSubmit}>
        
       <input 
       autoFocus
       type="text" 
       className='form-control'
       placeholder='Add new todo'
       value={todolist}
       onChange={(e)=> setTodolist(e.target.value)}
       /> 
       <button>Add todo</button>
       
    </form>


  )
}

export default todo