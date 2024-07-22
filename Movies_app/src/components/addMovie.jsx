import React, {useState} from 'react'
import { Moviesprovider } from './movieContent'


const addMovie = () => {

    const [movieName , setMovieName] =useState("")
    const [directorName , setDirectorName]= useState('')

    const obj= useContext(Moviesprovider)

    function add (){

        var movie ={
            movieName:movieName,
            directorName:directorName
        }
        obj.addmovie(movie)
    }

  return (
    <div>addMovie

        <input type="text" placeholder='Moviename' 
        value={movieName}
         onChange={(e)=>{setMovieName(e.target.value)}}/>
        <input type="text" placeholder='DirectorName' 
        value={directorName}
        onChange={(e)=>{setDirectorName(e.target.value)}}/>

        <button> ADD MOVIE</button>
    </div>
  )
}

export default addMovie
