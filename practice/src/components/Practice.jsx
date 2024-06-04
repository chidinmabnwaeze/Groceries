import React from "react";
import { useState } from "react";
import AddItems from "./AddItems";
import SearchItem from "./SearchItem";

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

  const [newSubmit, setNewSubmit] =useState('')

  const [search, setSearch] = useState('')

  const addItem =(item)=>{
    const id =items.length ? items[items.length -1].id + 1 : 1;
    const myNewSubmit ={id, checked :false, item};
    const listItems =[...items, myNewSubmit];
  }

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

  const handleSubmit =(e) =>{
    e.preventDefault();
   if(!newSubmit) return;
   setNewSubmit('')
    console.log('submitted')
  }
 
  return (
    <main>
        <SearchItem
        search={search}
        setSearch ={setSearch}
        />
        <AddItems
         newSubmit ={newSubmit}
         setNewSubmit ={setNewSubmit}
         handleSubmit ={handleSubmit}
        />
        {/* items={items.filter(item =>((item.item).toLowerCase()))} */}
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
