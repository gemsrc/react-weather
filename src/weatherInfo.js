import React from "react";
import FormattedDate from "./formattedDate";
import WeatherIcon from "./WeatherIcons";
import WeatherTemperature from"./WeatherTemperature";
import "./Weather.css"


export default function WeatherInfo(props) { 
    return (
      <div className="weatherInfo">
        <h1 className="City"> {props.data.city}</h1>
        <div>
          <p id="dateTime">
            <FormattedDate date={props.data.date} />
          </p>
        </div>
        <div className="row">
          <div className="col-6">
            <ul>
              <li className="text-capitalize">{props.data.description}</li>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind} km/h</li>
              <li></li>
            </ul>
          </div>
          <div className="col-6">
            <div id="WeatherIcon">
              <WeatherIcon code={props.data.icon} />
            </div>
            <div id="degree">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
      </div>
    );}