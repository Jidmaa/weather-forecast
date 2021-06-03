import "./App.css";
import { getWeather, getCityByName } from "./API/open_weather.instance";
import Map from "./Components/Map";
import SearchBar from "./Components/SearchBar";
import PopularCities from "./Components/PopularCities";
import WeatherState from "./Components/WeatherState";
function App() {
  getCityByName("Africa");
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
