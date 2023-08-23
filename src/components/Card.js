import React from 'react';
import '../style.css';

export default function Card(props) {
  return (
    <div class="column">
      <div class="card">
        <h3>{props.title}</h3>
        <img src={props.img} alt="HTML Image" style={{ width: '40%' }} />
        <p>{props.desc}</p>
      </div>
    </div>
  );
}
