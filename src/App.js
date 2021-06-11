import "./App.css";
import { useState, useEffect } from "react";
import Map from "./Components/Map";
import SearchBar from "./Components/SearchBar";
import PopularCities from "./Components/PopularCities";
import WeatherState from "./Components/WeatherState";
import { getWeather, getCityByCoordinates } from "./API/open_weather.instance";

function App() {
  let regionNames = new Intl.DisplayNames(["en"], { type: "region" });
  const [currentLocation, setCurrentLocation] = useState({
    lat: 51.505,
    lon: -0.09,
  });
  const [currentCity, setCurrentCity] = useState("Unkown");
  const [currentWeather, setCurrentWeather] = useState(null);

  useEffect(() => {
    getWeather(currentLocation.lat, currentLocation.lon).then((data) => {
      setCurrentWeather(data);
    });
    getCityByCoordinates(currentLocation.lon, currentLocation.lat)
      .then((city) => {
        setCurrentCity(
          city[0].name +
            (city[0].country ? ", " + regionNames.of(city[0].country) : null)
        );
      })
      .catch(() => setCurrentCity("Unkown"));
  }, [currentLocation]);
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
