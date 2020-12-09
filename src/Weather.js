import React, { useState } from "react";
import Axios from "axios";
import "./Weather.css";

export default function Weather() {
    const [ready, setReady]=useState(false)
    const [weatherData, setWeatherData] = useState({ ready: false });
    function handleResponse(response){
         setWeatherData({
           ready: true,
           temperature: response.data.main.temp,
           description: response.data.weather[0].description,
           wind: response.data.wind.speed,
           date: new Date(response.data.dt * 1000),
           humidity: response.data.main.humidity,
           city: response.data.name,
           icon: response.data.weather[0].icon,
         });
         setReady(true);
    }

    if (ready) {
        return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-outline-dark"
            />
          </div>
        </div>
      </form>

      <div className="City">
        <h1>{weatherData.city}</h1>
      </div>
      <div>
        <p id="dateTime">Sunday 6th December || 22:30</p>
      </div>
      <div className="row">
        <div className="col-6">
          <ul>
            <li>{weatherData.description}</li>
            <li>Precipitation: 70%</li>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} km/h</li>
          </ul>
        </div>
        <div className="col-6">
          <div>
            <span className="degree">{Math.round(weatherData.temperature)}°</span>
            <span className="unit">
              C|F
            </span>
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt="Light Rain"
              id="weatherImage"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
    } else {
      const apiKey = "51b4052e87957ee96238e364a7c4709c";
      let city = "Pontevedra";
      let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      Axios.get(apiUrl).then(handleResponse);

      return "Loading..." 
    }
}
