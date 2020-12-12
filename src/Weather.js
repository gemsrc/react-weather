import React, { useState } from "react";
import Axios from "axios";
import "./Weather.css";
import FormattedDate from "./formattedDate";
import weatherInfo from "./weatherInfo";

export default function Weather() {
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
    }
    function search() {
    const apiKey = `51b4052e87957ee96238e364a7c4709c`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
    if (weatherData.ready) {
        return (
          <div className="Weather">
            <form>
              <div className="row">
                <div className="col-9">
                  <input
                    type="Search"
                    placeholder="Enter a city..."
                    className="form-control"
                    autoFocus="on"
                    onChange={handleCityChange}
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
            <WeatherInfo data={weatherData} />
            <WeatherForecast city={weatherData.city} />
          </div>
        );
      } else {
    search();
    return "loading..";
  }
}
