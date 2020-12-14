import React, { useState } from "react";
import "./Weather.css";
import WeatherInfo from "./weatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
    
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
     function handleSubmit(event) {
       event.preventDefault();
       search();
     }

     function handleCityChange(event) {
       setCity(event.target.value);
     }
    function search() {
    const apiKey = `51b4052e87957ee96238e364a7c4709c`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
 
    if (weatherData.ready) {
        return (
          <div className="Weather">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
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
                    className="btn btn-light"
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
