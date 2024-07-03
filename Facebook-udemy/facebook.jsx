import React from "react";

export default function facebook() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="form-control">
      <h2>Register</h2>
      <div className="input-section">
        <input autoFocus type="text" className="username" placeholder="Enter Username" value={username} />
        <input type="text" className="password" placeholder="Enter Password" value={password} />
      </div>
    </form>
  );
}
