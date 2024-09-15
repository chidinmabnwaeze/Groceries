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

  // const [recipe , setRecipe] = useState("")
  // axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
  // .then((res)=>{
  //   console.log(res.data);
  // })

  const [name , setName]= useState("")
  const [predictedAge ,setPredictedAge] = useState("")
  const [isLoading , setIsLoading] = useState(true)

  const fetchNameData = () =>{
    axios.get(`https://api.agify.io/?name=${name}`)
    .then((res) =>{
      setPredictedAge(res.data)
      try{

      }
      finally{
        setIsLoading(false)
      }
    })

    setInterval(()=>{
      (async () => await fetchNameData())();
    },2000)
  }


  return (
    <>
     <h1 className='text-4xl text-purple-500'>Predict Your Age</h1>

     <input type="text" placeholder='E.g name' 
     value={name}
     onChange={(event) =>{setName(event.target.value)}}
     />
     <button onClick={fetchNameData}>Predict Age</button>
     
     {isLoading && <p>...Loading data</p>}
     {!isLoading && 
     <table>
     <tr>
      <th>Name</th>
      <th>Predicted Age</th>
      <th>Counts</th>
     </tr>
     <tr>
      <td>{predictedAge.name}</td>
      <td>{predictedAge.age}</td>
      <td>{predictedAge.count}</td>
     </tr>
     </table>
      }
     
    </>
  )
}

export default App
