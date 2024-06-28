import React, { useState } from 'react'

const localStorage = () => {
const [formInput ,setFormInput] =useState("")
const [username, setUsernmae] = useState("")

const newInput =() =>{

}
const handleSubmit =(e)=>{
e.preventDefault()
}

function registerUser (){
    
}

  return (
    <div className='form'>
        <form action="" onSubmit={registerUser} >
<input type="text" placeholder='Enter your username' className='form-control' value={username}
onChange={(e)=>{setUsernmae(e.target.value)}}
/>
<input type="text" placeholder='Enter your password' className='form-control' value={password}/>
<input type="submit"  placeholder='Submit' className='form-control' value={submit}/>
        </form>
        
    </div>
  )
}

export default localStorage