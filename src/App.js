import React from "react";
import "./App.css";
import WeatherSearch from "./WeatherSearch";

export default function App() {
  return (
    <div className="App">
      <h1>React Weather App</h1>
      <WeatherSearch />
      <footer>
        <small>
          <a
            href="https://github.com/a-shapkina/react-weather-app"
            target="_blank"
          >
            GitHub
          </a>{" "}
          © 2022 <a href="https://ashapkina.com">Alexandra Shapkina</a>
        </small>
      </footer>
    </div>
  );
}
