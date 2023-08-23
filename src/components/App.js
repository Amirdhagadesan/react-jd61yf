import React from 'react';
import '../style.css';
import Heading from './Heading';
import Card from './Card';

//<input id="name" placeHolder="Enter Name" type="text" value="Amir" lastname="Raj" />
let response = {
  html: {
    title: 'HTML5',
    img: 'https://img.freepik.com/free-icon/html-5_318-566077.jpg',
    desc: 'HTML is a Markup Language',
  },
  css: {
    title: 'CSS3',
    img: 'https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png',
    desc: 'Style Sheet',
  },
  js: {
    title: 'JavaScript',
    img: 'https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-hq-png-1.png',
    desc: 'Scripting Language',
  },
};

export default function App() {
  return (
    <div>
      <Heading title="React Prerequisites" />
      <Card
        title={response.html.title}
        img={response.html.img}
        desc={response.html.desc}
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
