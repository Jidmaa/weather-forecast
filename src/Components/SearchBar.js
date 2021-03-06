import { BiSearchAlt } from "react-icons/bi";
import { useState } from "react";
import { getCityByName } from "../API/open_weather.instance";
import AutoComplete from "./AutoComplete";

export default function SearchBar({
  setCurrentLocation,
  setCurrentCity,
  makeCityName,
  currentCity,
}) {
  const [suggestedCities, setSuggestedCities] = useState([]);
  const [hint, setHint] = useState(null);
  const validateInput = (e) => {
    // A query that has less than three characters is invalid in Openweathermap API
    if (e.target.value.length < 3) {
      setHint("Write at least three letters");
      setSuggestedCities([]);
    } else
      getCityByName(e.target.value).then((data) => {
        setHint(null);
        setSuggestedCities(data);
      });
  };
  return (
    <div className="right-side-heading">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Type a city/country name"
          className="search"
          onChange={validateInput}
        />
        <BiSearchAlt className="search-icon" />
      </div>
      <AutoComplete
        suggestedCities={suggestedCities}
        hint={hint}
        setCurrentLocation={setCurrentLocation}
        setSuggestedCities={setSuggestedCities}
        setCurrentCity={setCurrentCity}
        makeCityName={makeCityName}
      />
      <h1 className="city-name"> {currentCity}</h1>
    </div>
  );
}
