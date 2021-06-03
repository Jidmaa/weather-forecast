import "./App.css";
import { useState, useEffect } from "react";
import Map from "./Components/Map";
import SearchBar from "./Components/SearchBar";
import PopularCities from "./Components/PopularCities";
import WeatherState from "./Components/WeatherState";
function App() {
  return (
    <>
      <div className="main_frame">
        <div className="left_side">
          <SearchBar />
          <PopularCities />
          <Map />
        </div>
        <WeatherState />
      </div>
    </>
  );
}

export default App;
