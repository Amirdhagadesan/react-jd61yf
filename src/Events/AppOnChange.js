import React, { useState } from 'react';

export default function App() {
    const [name, setName] = useState("User")
    const [title, setTitle] = useState("");

    function updateName() {
        setTitle(name)
    }

    function handleChange(event) {
        console.log("OnChange: ", event.target.value);
        setName(event.target.value);
    }

    return (
        <div>
            <h1 id="title">Welcome {title}</h1>
            <input onChange={handleChange} id="name" type="text" placeholder="Enter Your Name" />
            <button onClick={updateName}>Submit</button>
        </div>
    );
}