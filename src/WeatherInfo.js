import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      {" "}
      <div className="row">
        <div className="col-6">
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              <span>
                <FormattedDate date={props.data.date} />
              </span>
              , {props.data.description}
            </li>
            <li>
              Humidily: <strong>{props.data.humidity}%</strong>, Wind:{" "}
              <strong>{props.data.wind} km/h</strong>
            </li>
          </ul>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-8">
          <div className="temperature-container d-flex justify-content-end">
            <WeatherIcon code={props.data.icon} size={52} />

            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
      </div>
    </div>
  );
}
