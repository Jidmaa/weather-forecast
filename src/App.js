import "./App.css";
import { useState, useEffect } from "react";
import Map from "./Components/Map";
import SearchBar from "./Components/SearchBar";
import PopularCities from "./Components/PopularCities";
import WeatherState from "./Components/WeatherState";
import { getWeather, getCityByCoordinates } from "./API/open_weather.instance";
import { makeCityName } from "./Utils/utils_functions";
function App() {
  // Location is longitude and latitude

  const [currentLocation, setCurrentLocation] = useState({
    lat: 51.505,
    lon: -0.09,
  });

  // Placeholder when openweathermap API doesn't find the city name (or when the API key is invalid)

  const [currentCity, setCurrentCity] = useState("Unkown");
  const [currentWeather, setCurrentWeather] = useState(null);

  // Watching the location change to set its current weather and update the city's name

  useEffect(() => {
    const getCurrentWeather = async () => {
      const weather = await getWeather(
        currentLocation.lat,
        currentLocation.lon
      );
      setCurrentWeather(weather);
    };
    getCurrentWeather();
    const getCurrentCityByCoordinates = async () => {
      try {
        const city = await getCityByCoordinates(
          currentLocation.lon,
          currentLocation.lat
        );
        setCurrentCity(makeCityName(city));
      } catch (err) {
        setCurrentCity("Unkown");
      }
    };
    getCurrentCityByCoordinates();
  }, [currentLocation]);

  return (
    <>
      <div className="main_frame">
        {/* Left side is the map  */}
        <div className="left_side">
          <PopularCities />
          <Map
            setCurrentLocation={setCurrentLocation}
            currentLocation={currentLocation}
          />
        </div>
        {/* Right Side is the search bar and the weather  */}
        <div className="right_side">
          <SearchBar
            setCurrentLocation={setCurrentLocation}
            setCurrentCity={setCurrentCity}
            makeCityName={makeCityName}
            currentCity={currentCity}
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
