import React from 'react';
import './style.css';
import Form from './Form';
import Header from './Header';

var isLogged = true;
var isRegistered = false;

export default function App() {
  return (
    <div class="login-wrapper">
      {isLogged ? (
        <Header title="Welcome User" />
      ) : (
        <Form isRegistered={isRegistered} />
      )}
    </div>
  );
}
