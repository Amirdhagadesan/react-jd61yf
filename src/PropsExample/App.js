import React from 'react';
import './style.css';
import Heading from './Heading';
import List from './List';

export default function App() {
  return (
    <div style={{ align: 'center' }}>
      <Heading />
      <List />
      <List />
      <List />
    </div>
  );
}
