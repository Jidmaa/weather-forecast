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
  const [currentWeather, setCurrentWeather] = useState(null);
  const [currentGradient, setCurrentGradient] = useState("Default");
  useEffect(
    () =>
      getWeather(currentLocation.lat, currentLocation.lon).then((data) => {
        console.log("current weather id", currentGradient);
        setCurrentWeather(data);
        setCurrentGradient(data?.current?.weather[0]?.main);
      }),
    [currentLocation]
  );
  console.log("this is current location", currentLocation);
  console.log("this is current weather", currentWeather);

  const style = {
    Snow: {
      background:
        "-webkit-linear-gradient(90deg, hsla(224, 6%, 50%, 1) 0%, hsla(205, 12%, 71%, 1) 100%)",
    },
    Clear: {
      background:
        "-webkit-linear-gradient(90deg, hsla(217, 96%, 81%, 1) 0%, hsla(199, 88%, 87%, 1) 100%)",
    },
    Thunderstorm: {
      background:
        "-webkit-linear-gradient(90deg, hsla(214, 75%, 14%, 1) 0%, hsla(206, 28%, 45%, 1) 100%)",
    },
    Drizzle: {
      background:
        "-webkit-linear-gradient(90deg, hsla(219, 34%, 56%, 1) 0%, hsla(218, 38%, 80%, 1) 100%);",
    },
    Rain: {
      background:
        "-webkit-linear-gradient(90deg, hsla(186, 33%, 94%, 1) 0%, hsla(216, 41%, 79%, 1) 100%)",
    },
    Atmosphere: {
      background:
        " -webkit-linear-gradient(90deg, hsla(220, 3%, 77%, 1) 0%, hsla(220, 4%, 87%, 1) 51%, hsla(0, 0%, 92%, 1) 100%)",
    },
    Clouds: {
      background:
        "-webkit-linear-gradient(90deg, hsla(220, 3%, 77%, 1) 0%, hsla(220, 4%, 87%, 1) 51%, hsla(0, 0%, 92%, 1) 100%)",
    },
    Default: {
      background:
        "-webkit-linear-gradient(90deg, hsla(217, 96%, 81%, 1) 0%, hsla(199, 88%, 87%, 1) 100%)",
    },
  };
  const chooseGradientFromWeather = (id) => {
    console.log("this is id in choosegradient", id);
    switch (id) {
      case id >= 200:
        return "Thunderstorm";
      case id >= 300:
        return "Drizzle";
      case id >= 500:
        return "Rain";
      case id >= 600:
        return "Snow";
      case id >= 700:
        return "Atmosphere";
      case id === 800:
        return "Clear";
      case id > 800:
        return "Clouds";
      default:
        return "Default";
    }
  };

  return (
    <>
      <div
        className="main_frame"
        // style={style[String(currentWeather?.current.weather[0]?.id).charAt(0)]}
        style={style[currentGradient]}
      >
        <div className="left_side">
          <PopularCities />
          <SearchBar
            currentLocation={currentLocation}
            setCurrentLocation={setCurrentLocation}
          />
          <Map />
        </div>
        <WeatherState currentWeather={currentWeather} />
      </div>
    </>
  );
}

export default App;
