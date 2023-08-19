import React from 'react';
import ReactDOM from 'react-dom';
import Heading from './components/Heading';
import List from './components/List';
//Convert each element into Components
ReactDOM.render(
  <>
    <Heading />
    <List />
    <List />
  </>,
  document.getElementById('root')
);
