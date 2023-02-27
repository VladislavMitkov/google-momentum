import React, { useEffect, useState } from "react";
import axios from "axios";

// API url

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);

  // get current location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      if (position.coords.latitude && position.coords.longitude) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      }
    });
  }, [lat, long]);

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;
    if (lat && long) {
      axios
        .get(url)
        .then((res) => {
          if (res.status === 200) {
            setWeather(res.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [lat, long]);

  return (
    <div className="flex flex-col h-12 items-end text-xl font-bold text-zinc-100 ">
      <div className="flex flex-col items-end rounded-xl mr-2 mt-2 bg-sky-200 bg-transparent/20 shadow shadow-slate-700 hover:shadow-xl hover:shadow-zinc-100">
        <p className="m-2">{weather && weather.main.temp.toFixed(0)}&#176;</p>
        <p className="m-2">{weather && weather.name + "," + weather.sys.country}</p>
      </div>
    </div>
  );
};

export default Weather;
