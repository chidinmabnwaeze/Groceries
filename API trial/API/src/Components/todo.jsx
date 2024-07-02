import React from 'react'
import { useState } from 'react'

const todo = () => {
const [todolist, setTodolist] = useState("")

const handleTodoSubmit = (e) => {
e.preventDefault();
if (handleTodoSubmit === true){
console.log("todo submitted")
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