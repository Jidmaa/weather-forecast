import "./App.css";
import { useState, useEffect } from "react";
import Map from "./Components/Map";
import SearchBar from "./Components/SearchBar";
import PopularCities from "./Components/PopularCities";
import WeatherState from "./Components/WeatherState";
import { getWeather } from "./API/open_weather.instance";

function App() {
  const [currentLocation, setCurrentLocation] = useState({
    lat: 64.0003,
    lon: -150.0,
  });
  const [currentCity, setCurrentCity] = useState("Mostaganem, Algeria");
  const [currentWeather, setCurrentWeather] = useState(null);
  useEffect(
    () =>
      getWeather(currentLocation.lat, currentLocation.lon).then((data) => {
        setCurrentWeather(data);
      }),
    [currentLocation]
  );
  console.log("this is current location", currentLocation);
  console.log("this is current weather", currentWeather);

  return (
    <>
      <div
        className="main_frame"
        // style={style[String(currentWeather?.current.weather[0]?.id).charAt(0)]}
      >
        <div className="left_side">
          <PopularCities />
          <SearchBar
            setCurrentLocation={setCurrentLocation}
            setCurrentCity={setCurrentCity}
          />
          <Map
            setCurrentLocation={setCurrentLocation}
            setCurrentCity={setCurrentCity}
            currentLocation={currentLocation}
          />
        </div>
        <WeatherState
          currentWeather={currentWeather}
          currentLocation={currentLocation}
          currentCity={currentCity}
        />
      </div>
    </>
  );
}

export default App;
