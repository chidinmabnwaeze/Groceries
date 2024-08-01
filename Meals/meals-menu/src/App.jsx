import { data } from 'autoprefixer'
import axios from 'axios'
import React, {useState} from 'react'
import './App.css'

function App() {

  // fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
  // .then((res)=> res.json())
  // .then((data)=> {
  //   console.log(data);
  // })

  const [recipe , setRecipe] = useState("")

  axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
  .then((res)=>{
    console.log(res.data);
  })
  return (
    <>
     <h1 className='text-4xl text-purple-500'>Meals</h1>

     
    </>
  )
}

export default App
