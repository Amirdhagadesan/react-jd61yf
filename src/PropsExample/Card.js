import React from 'react';
import './style.css';

export default function Card() {
  return (
    <div class="column">
      <div class="card">
        <h3>HTML5</h3>
        <img
          src="https://img.freepik.com/free-icon/html-5_318-566077.jpg"
          alt=""
          style={{ width: '40%' }}
        />
        <p>Markup Language</p>
      </div>
    </div>
  );
}
