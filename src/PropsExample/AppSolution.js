import React from 'react';
import './style.css';
import Heading from './Heading';
import List from './List';
import Card from './Card';

let response = {
  html: {
    title: 'HTML5',
    img: 'https://img.freepik.com/free-icon/html-5_318-566077.jpg',
    text: 'Markup Language',
  },
  css: {
    title: 'CSS3',
    img: 'https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png',
    text: 'Style Sheet',
  },
  js: {
    title: 'JavaScript',
    img: 'https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-hq-png-1.png',
    text: 'Scripting Language',
  },
};

export default function App() {
  return (
    <div style={{ align: 'center' }}>
      <Heading />
      <Card
        title="HTML5"
        img="https://img.freepik.com/free-icon/html-5_318-566077.jpg"
        text="Markup Language"
      />
      <Card {...response.css} />

      <Card
        title={response.js.title}
        img={response.js.img}
        text={response.js.text}
      />
    </div>
  );
}
