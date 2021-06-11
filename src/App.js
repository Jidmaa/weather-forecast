import "./App.css";
import { useState, useEffect } from "react";
import Map from "./Components/Map";
import SearchBar from "./Components/SearchBar";
import PopularCities from "./Components/PopularCities";
import WeatherState from "./Components/WeatherState";
import { getWeather, getCityByCoordinates } from "./API/open_weather.instance";

function App() {
  const [currentLocation, setCurrentLocation] = useState({
    lat: 51.505,
    lon: -0.09,
  });
  const [currentCity, setCurrentCity] = useState("Unkown");
  const [currentWeather, setCurrentWeather] = useState(null);
  const makeCityName = (city) => {
    let regionNames = new Intl.DisplayNames(["en"], { type: "region" });
    return (
      city[0].name +
      (city[0].country ? ", " + regionNames.of(city[0].country) : null)
    );
  };
  useEffect(() => {
    getWeather(currentLocation.lat, currentLocation.lon).then((data) => {
      setCurrentWeather(data);
    });
    getCityByCoordinates(currentLocation.lon, currentLocation.lat)
      .then((city) => {
        setCurrentCity(makeCityName(city));
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
          <Map
            setCurrentLocation={setCurrentLocation}
            setCurrentCity={setCurrentCity}
            currentLocation={currentLocation}
          />
        </div>
        <div className="right_side">
          <SearchBar
            setCurrentLocation={setCurrentLocation}
            setCurrentCity={setCurrentCity}
            makeCityName={makeCityName}
          />
          <WeatherState
            currentWeather={currentWeather}
            currentLocation={currentLocation}
            currentCity={currentCity}
          />
        </div>
      </div>
    </>
  );
}

export default App;
