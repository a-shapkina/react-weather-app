import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />

        <footer>
          <a
            href="https://github.com/a-shapkina/react-weather-app"
            target="_blank"
            rel="noreferrer"
            autoFocus="on"
          >
            GitHub
          </a>{" "}
          © 2022 <a href="https://ashapkina.com">Alexandra Shapkina</a>
        </footer>
      </div>
    </div>
  );
}
