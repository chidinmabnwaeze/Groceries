import { useState } from "react";
import React from "react";
import {useHistory } from "react-router-dom"

const login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const history = useHistory

  function log() {
    const users = JSON.parse(localStorage.getItem("users"));

    let i = 0;
    for (let user of users) {
      if (user.username == username && user.password == password) 
        {
         i++;
        }
    }

    if (i ==1) {
      alert("Login Successful");
      history.push
      localStorage.getItem("loggedIn")
    }
     else {
      alert("Invalid Login");
    }
  }

  return (
    <div className="login-form">
      <h2>Login</h2>
    <p>kindly log in here</p>

      <form action="">
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter username"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit" className="login-button" onClick={log}>
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default login;
