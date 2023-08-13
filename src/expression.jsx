import React from 'react';
import ReactDOM from 'react-dom';

var name = 'Amir';
var last = 'Raj';
var gender = 'Male';
var year = new Date();
// year = year.getFullYear();
//Expression
//Template literal
ReactDOM.render(
  <div>
    <h1>Hello {name}!</h1>
    <h1>
      Hello {name} {last}!
    </h1>
    <h1>Hello {name + ' ' + last}!</h1>
    <h1>Hello {`${name} ${last}`}!</h1>
    <p>
      Gender: <b>{gender}</b>
    </p>
    <p>
      Age: {Math.floor(Math.random() * 40)} as on {year.getFullYear()}
    </p>
  </div>,
  document.getElementById('root')
);
