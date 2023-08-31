import React, { useState } from 'react';

export default function App() {
  const [name, setName] = useState('Amir');

  function updateName() {
    // document.getElementById("title").innerHTML = "Amir"
    setName(document.getElementById('name').value);
  }

  return (
    <div>
      <h1 id="title">Welcome {name}</h1>
      <input id="name" type="text" placeholder="Enter Your Name" />
      <button onClick={updateName}>Submit</button>
    </div>
  );
}
