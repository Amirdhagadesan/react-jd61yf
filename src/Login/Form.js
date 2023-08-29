import React from 'react';
import Input from './Input';
// import types from './InputTypes.json';
import Header from './Header';

var reg = true;

export default function Form(props) {
  return (
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
      <input
        type="submit"
        value="Login"
        class={reg ? 'submit-btn-grn' : 'submit-btn-red'}
      />
    </form>
  );
}

/*
        { <Header title="Login" />
            <Input {...types.usrName} required />
            <Input
                type="password"
                name="loginPassword"
                id="loginPassword"
                placeholder="Password"
                class="input-group"
                required
            />
        {/* <input type="submit" value="Login" class="submit-btn" style={isRegistered?{background:'green'}:null}/> }*/
/* <Input {...types.submit} class={props.isRegistered?'submit-btn-grn':'submit-btn-red'} /> }
 */
