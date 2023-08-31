import React, { useState } from 'react';
//With onChange
export default function App() {
  const [name, setName] = useState('User');
  function updateName() {
    console.log('Button Clicked ', document.getElementById('name').value);
    setName(document.getElementById('name').value);
  }

  function handleChange(event) {
    console.log('OnChange: ', event.target.value);
    setName(event.target.value);
  }

  return (
    <div>
      <h1 id="title">Welcome {name}</h1>
      <input
        onChange={handleChange}
        id="name"
        type="text"
        placeholder="Enter Your Name"
      />
      <button onClick={updateName}>Submit</button>
    </div>
  );
}
