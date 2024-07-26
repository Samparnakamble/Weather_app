import React, { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

function WeatherApp() {
  const [weatherInfo, setWetherInfo] = useState({
    cityName: "Wnaderland",
    feelsLike: 30.57,
    humidity: 65,
    temp: 28.31,
    tempMax: 28.31,
    tempMin: 28.31,
    weather: "few clouds",
  });

  let updateInfo = (newInfo) => {
    setWetherInfo(newInfo);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App By Samparna</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}

export default WeatherApp;
