import React, {useEffect} from "react";
import axios from 'axios'
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";

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

      <button className="btn btn-primary">A bootsrap button</button>
    </div>
  );
}
