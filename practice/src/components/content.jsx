import React from "react";

 
const particulars = [
    {
        id : 1,
        checked : true,
        particular: "A bag of rice"
    },
    {
        id : 2,
        checked :false,
        particular: "Particular 2"  
    },
    {
        id : 3,
        checked : false,
        particular: "Particular 2"  
    }

]



export default function Groceries(){
    return(
        <main>
            <ul>
                {particulars.map((particular) =>{
                    <li className="list-item" key={particular.id}>
                        <input type="checkbox" />
                        <p>{particular.particular}</p>

                    </li>
                })}
            </ul>
        </main>
    )
}