import React, { useState } from "react";

const facebook = () => {
  const [userTable, setUserTable] = useState([
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    }
  ]);

let url = "https://jsonplaceholder.org/users/"

let userInfo ;

getAllUsers = async () =>{
    users = await fetch(url).then((res) => res.json())
    console.log(userInfo);
}


  return (
    <div className="facebook">
      <table>
        <tr>
          <th> User Id</th>
          <th> Id</th>
          <th> Title</th>
          <th> Completed</th>
        </tr>

        {userTable.map((user, index) => {
          <tr className="table-body" key={index}>
            
            <td>{user.id}</td>
            <td>{user.userId}</td>
            <td>{user.userId}</td>
          </tr>;
        })}
        <td>user</td>
      </table>
    </div>
  );
};

export default facebook;
