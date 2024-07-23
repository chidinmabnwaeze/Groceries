import React, {useEffect} from "react";
import axios from 'axios'

export default function body() {
  useEffect(() => {

    axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
    .then(res =>{

        console.log(res.data)
    }).catch(err =>{

    })
  
    }, []);

  return (
    <div>
      <h1>body component</h1>
    </div>
  );
}
