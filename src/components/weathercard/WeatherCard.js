import React from "react";
import  styled  from "@emotion/styled";

import Location from './Location';

function WeatherCard(props) {
  const Card = styled.div`
    margin: 0 auto;
    background: linear-gradient(to bottom, blue, lightblue);
    width: 200px;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    -ms-border-radius: 15px;
    -o-border-radius: 15px;
  `;
  return (
    <Card className='card'>
      <Location />
      <img className='icon' src='' alt='Weather Icon' />
      <h1 className='temp'>20 °C</h1>
      <h3 className='condition'>Cloudy</h3>
    </Card>
  );
}

export default WeatherCard;
