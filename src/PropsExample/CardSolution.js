import React from 'react';
import './style.css';

export default function Card(props) {
  console.log(props);
  return (
    <div class="column">
      <div class="card">
        <h3>{props.title}</h3>
        <img src={props.img} alt="" style={{ width: '40%' }} />
        <p>{props.text}</p>
      </div>
    </div>
  );
}
