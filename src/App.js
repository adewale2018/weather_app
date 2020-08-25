import React from "react";

import WeatherCard from "./components/weathercard/WeatherCard";
import "./App.css";

function App() {
  const data = async () => {
    let apiRes = await fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=607701753c55594d0ba0e53bbe97a85b"
    );
    const resJSON = await apiRes.json();
    return resJSON;
  };
  data().then(res => console.log('RES', res));
  return (
    <div className='App'>
      <WeatherCard temp={30} country='NG' city='Lagos' />
      <WeatherCard temp={20} country='GM' city='Lucaca' />
      <WeatherCard temp={-20} country='KNY' city='Nairobi' />
      <WeatherCard temp={0} country='SUD' city='Mecca' />
    </div>
  );
}

export default App;
