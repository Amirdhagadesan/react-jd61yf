import React from 'react';
import './style.css';
import Form from './Form';
import Header from './Header';

var isLogged = false;
var isRegistered = false;

function checkLoggedState() {
  if (isLogged === true) {
    return <Header title="Welcome User" />;
  } else {
    return <Form isRegistered={isRegistered} />;
  }
}

export default function App() {
  return <div class="login-wrapper">{checkLoggedState()}</div>;
}
