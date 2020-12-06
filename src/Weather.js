import React from "react";
export default function Weather(){
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
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
          <ul>
            <li>Sunday 6th December </li>
            <li> 23:30</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <h2>
              6<sup>°</sup>
              <small>C|F</small>
            </h2>

            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt="Light Rain"
            ></img>
          </div>

          <div className="col-6">
            <ul>
              <li>Light Rain</li>
              <li>feels like 5°C</li>
              <li>Precipitation: 70%</li>
              <li>Humidity: 25%</li>
              <li>Wind: 15 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
}