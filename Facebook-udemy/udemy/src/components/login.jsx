import { useState } from "react";
import React from "react";

const login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  function log (){
    alert("login successful")
  }
  return (
    <div className="login-form">
      <h2>Login</h2>

      <form action="">
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => {setUsername(e.target.value)}}
        />
        <input
          type="text"
          placeholder="Enter username"
          value={password}
          onChange={(e) => {setPassword(e.target.value)}}
        />
       <button 
       type="submit"
       className="login-button"
       onClick={log}>
        LOGIN
        </button>
      </form>
    </div>
  );
};

export default login;
