import React, { useEffect, useState } from "react";
import axios from "axios";
import "tailwindcss/tailwind.css"
// import bootstrap from "bootstrap/dist/css/bootstrap.min.css";

export default function body() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        console.log(res.data);

        setItems(res.data.meals);
      })
      .catch((err) => {});
  }, []);

  const itemsList = items.map((obj) => {
    return (
      <div>
        <p>{obj.strMeal}</p>
        <p>{obj.strMealThumb}</p>
      </div>
    );
  });

  return (
    <div>
      <div className="row"></div>
      <div class="shadow-sm ..."></div>
    </div>
  );
}
