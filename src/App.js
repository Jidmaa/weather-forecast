import "./App.css";
import { getWeather, getCityByName } from "./API/open_weather.instance";
import Map from "./Components/Map";
import SearchBar from "./Components/SearchBar";
function App() {
  getCityByName("Africa");
  return (
    <>
      <div className="main_frame">
        <div className="left_side">
          <SearchBar />
          <h1 className="secondary">
            {" "}
            <span className="light-text "> Weather </span>
            Forecast{" "}
          </h1>
          <Map />
        </div>
        <div className="right_side"></div>
      </div>
    </>
  );
}

export default App;
