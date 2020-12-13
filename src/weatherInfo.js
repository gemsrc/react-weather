import React from "react";
import FormattedDate from "./formattedDate.js";
import WeatherIcon from "./WeatherIcons";
import WeatherTemperature from"./WeatherTemperature";
export default function WeatherInfo(props) { 
    return (
      <div className="weatherInfo">
        <div>
          <h1 className="City"> {props.data.city}</h1>
        </div>
        <div>
          <p id="dateTime">
            <FormattedDate date={props.data.date} />
          </p>
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
            <WeatherTemperature celsius={props.data.temperature} />
            <div>
              <WeatherIcon code={props.data.icon} />
            </div>
          </div>
        </div>
      </div>
    );}