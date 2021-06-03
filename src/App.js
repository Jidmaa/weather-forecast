import "./App.css";
import { useState, useEffect } from "react";
import Map from "./Components/Map";
import SearchBar from "./Components/SearchBar";
import PopularCities from "./Components/PopularCities";
import WeatherState from "./Components/WeatherState";
import { getWeather } from "./API/open_weather.instance";

function App() {
  const [currentLocation, setCurrentLocation] = useState({ lat: 20, lon: 2 });
  const [currentWeather, setCurrentWeather] = useState(null);
  useEffect(
    () =>
      getWeather(currentLocation.lat, currentLocation.lon).then((data) =>
        setCurrentWeather(data)
      ),
    [currentLocation]
  );
  console.log("this is current location", currentLocation);
  console.log("this is current weather", currentWeather);
  return (
    <>
      <div className="main_frame">
        <div className="left_side">
          <SearchBar
            currentLocation={currentLocation}
            setCurrentLocation={setCurrentLocation}
          />
          <PopularCities />
          <Map />
        </div>
        <WeatherState currentWeather={currentWeather} />
      </div>
    </>
  );
}

export default App;
