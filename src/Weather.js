import React from "react";
import "./Weather.css";

export default function Weather() {
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
        <h1>Pontevedra</h1>
      </div>
      <div>
        <p id="dateTime">Sunday 6th December || 22:30</p>
      </div>
      <div className="row">
        <div className="col-6">
          <ul>
            <li>Light Rain</li>
            <li>Precipitation: 70%</li>
            <li>Humidity: 25%</li>
            <li>Wind: 15 km/h</li>
          </ul>
        </div>
        <div className="col-6">
          <div>
            <span className="degree">6° </span>
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
}
