import React from "react";
import FormattedDate from "./formattedDate.js";
import WeatherTemperature from "./WeatherTemperature.js";
import WeatherIcon from "./WeatherIcons";

export default function WeatherInfo(props) { 
    return (
      <div className="weatherInfo">
            <h1 className="City"> {props.data.city}</h1>
        <div>
            <p id="dateTime"><FormattedDate date={props.data.date}/></p>
        </div>
        <div className="row">
            <div className="col-6">
          <ul>
            <li className="text-capitalize">{props.data.description}</li>
            <li>Precipitation: 70%</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
        </div>
        <div className="col-6">
          <div>
            <span className="degree">{Math.round(props.data.temperature)}°</span>
            <span className="unit">
              C|F
            </span>
            <div>
            <WeatherIcon code={props.data.icon} />
            </div>
        </div> 
    </div>
  );
  }
