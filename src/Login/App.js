import React from 'react';
import './style.css';
let isLogged = true;

export default function App() {
  return (
    <div class="login-wrapper">
      <h1>Welcome Amir</h1>
      <form action="" class="form">
        <h2>Login</h2>
        <input
          type="text"
          name="loginUser"
          id="loginUser"
          placeholder="User Name"
          required
        />
        <input
          type="password"
          name="loginPassword"
          id="loginPassword"
          placeholder="Password"
          required
        />
        <input type="submit" value="Login" class="submit-btn" />
      </form>
    </div>
  );
}
