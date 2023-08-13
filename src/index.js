import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <div>
    <h1>Hello World!</h1>
    <h6>My World</h6>
  </div>,
  document.getElementById('root')
);

var h1 = document.createElement('h1');
h1.className = 'Title';
h1.id = 'title';
h1.innerHTML = 'Hello World';
document.getElementById('root').appendChild(h1);
var h6 = document.createElement('h6');
h6.innerHTML = 'My World';
document.getElementById('root').appendChild(h6);
