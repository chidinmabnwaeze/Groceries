import { data } from 'autoprefixer'
import './App.css'

function App() {

  fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
  .then((res)=> res.json())
  .then((data)=> {
    console.log(data);
  })

  return (
    <>
     <h1 className='text-4xl text-purple-500'>Meals</h1>

     
    </>
  )
}

export default App
