import React from "react";
import { useState } from "react";
// import addItems from "../components/addItems";

const Practice = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "one bag of rice"
    },
    {
      id: 2,
      checked: false,
      item: "one bag of beans"
    },
    {
      id: 3,
      checked: false,
      item: "one bag of garri"
    }
  ]);

  const handleCheck = (id) => {
    const listItems = items.map((item)=> item.id === id ? {...item,checked: !item.checked} : item);
    setItems(listItems);
    console.log(`key: ${id}`);
    localStorage.setItem('grocerieslist', JSON.stringify(listItems));
  };

  const handleDelete = (id) =>{
    const listItems = items.filter((item)=> item.id !==id);
    setItems(listItems)
    localStorage.setItem('groceries', JSON.stringify(listItems))
  }

const [submit, setsubmit] =useState([])

  const handleSubmit =(a) =>{
    console.log('submitted')
  }
 
  return (
    <main>
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input 
              type="checkbox" 
              name="input" 
              onChange={() => handleCheck(item.id)}
              checked={item.checked}
            />
            <span
            style={(item.checked)? {color: "blue"} :null}
            onDoubleClick={()=>handleCheck(item.id)}
            >{item.item}</span>
            <button
            onClick={()=>handleDelete(item.id)}
            >Delete</button>
          </li>
        ))}
      </ul>
    </main>
  );
};


export default Practice;
