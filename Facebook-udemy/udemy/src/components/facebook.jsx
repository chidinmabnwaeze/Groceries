import React from "react";
import { useState } from "react";

export default function facebook() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  function registerUser(event) {
    event.preventDefault();

    const user = JSON.parse(localStorage.getItem("users") || "[]");
    const newUser = {
      username: username,
      password: password,
    };
    user.push(newUser);

    localStorage.setItem("users", JSON.stringify(newUser));


    alert("registrstion is successfull")
  }

  return (
    <form className="form-control">
      <h2>Register</h2>
      <div className="input-section">
        <input
          autoFocus
          type="text"
          className="username"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => {setUsername(e.target.value)}}
        />
        <input
          type="text"
          className="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => {setPassword(e.target.value)}}
        />
        <input type="submit" onClick={registerUser} />
      </div>
    </form>
  );
}
