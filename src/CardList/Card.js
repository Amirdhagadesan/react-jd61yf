import React from 'react';
import './App.css';

export default function Card(props) {
  return (
    <div className="column">
      <div className="card">
        <h2>{props.key}</h2>
        <h3>{props.title}</h3>
        <img src={props.img} alt="HTML Image" style={{ width: '40%' }} />
        <p>{props.desc}</p>
      </div>
    </div>
  );
}

//Used the new header component
//Replace the hard coded components with imported Header component
// Create new image component and pass the values as props
// Create Description component
