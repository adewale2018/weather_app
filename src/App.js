import React from "react";

import WeatherCard from "./components/weathercard/WeatherCard";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <WeatherCard temp={30} />
      <WeatherCard temp={20} />
    </div>
  );
}

export default App;
