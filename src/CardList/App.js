import React from 'react';
import './App.css';
import Heading from './Heading';
import Card from './Card';

let response =
  [
    {
      id: 1,
      title: 'HTML5',
      img: 'https://img.freepik.com/free-icon/html-5_318-566077.jpg',
      desc: 'HTML is a Markup Language',
    },
    {
      id: 2,
      title: 'CSS3',
      img: 'https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png',
      desc: 'Style Sheet',
    },
    {
      id: 3,
      title: 'JavaScript',
      img: 'https://www.freepnglogos.com/uploads/javascript/javascript-online-logo-for-website-0.png',
      desc: 'Scripting Language',
    }
  ];

export default function App() {
  return (
    <div>
      <Heading title="React Prerequisites" />

      <Card
        title={response[0].title}
        img={response[0].img}
        desc={response[0].desc}
      />
      <Card {...response[1]} />

      <Card {...response[2]}  />
    </div>
  );
}

//Instead of using response from this file, import response from the response.json file