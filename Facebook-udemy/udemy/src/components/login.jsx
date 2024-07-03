import React from "react";

const login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  return (
    <div className="login-form">
      <h2>Login</h2>

      <form action="">
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </form>
    </div>
  );
};

export default login;
