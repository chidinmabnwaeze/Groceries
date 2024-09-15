import React, { useState } from 'react'

const localStorage = () => {
// const [formInput ,setFormInput] =useState("")
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")

// const newInput =() =>{

// }
// const handleSubmit =(e)=>{
// e.preventDefault()
// }





function registerUser(){
   alert("new message")
   
   
}

  return (
    <div className='form'>
        <form action="" onSubmit={registerUser} >
<input type="text" placeholder='Enter your username' className='form-control' value={username}
onChange={(e)=>{setUsername(e.target.value)}}
/>
<input type="text" placeholder='Enter your password' className='form-control' value={password}/>
<input type="submit"  placeholder='Submit' className='form-control' value={submit}/>
        </form>
        
    </div>
  )
}

export default localStorage