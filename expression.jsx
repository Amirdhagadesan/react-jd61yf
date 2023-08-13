import React from 'react';
import ReactDOM from 'react-dom';

var name = 'Amir';
var gender = 'Male';
ReactDOM.render(
  <div>
    <h1>Hello {name}!</h1>
    <p>
      Gender: <b>{gender}</b>
    </p>
    <p>Age: {Math.floor(Math.random() * 40)}</p>
  </div>,
  document.getElementById('root')
);