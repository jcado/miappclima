import React from 'react';


export default function Card({name, min, max, img, onClose}) {
  // acá va tu código
    return (
    <>
      <h1>{name}</h1>
      <h3>MIN</h3>
      <h3>{min}</h3>
      <h3>MAX</h3>
      <h3>{max}</h3>

      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="weather image" />
      <button onClick={onClose}> X </button>
    </>
  )
};
