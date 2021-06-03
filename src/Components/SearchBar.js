import { BiSearchAlt } from "react-icons/bi";
import { useState } from "react";
import { getCityByName } from "../API/open_weather.instance";
import AutoComplete from "./AutoComplete";

export default function SearchBar() {
  const [suggestedCities, setSuggestedCities] = useState([]);
  const [hint, setHint] = useState(null);
  const validateInput = (e) => {
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
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Type a city/country name"
          className="search"
          onChange={validateInput}
        />
        <BiSearchAlt className="search-icon" />
      </div>
      <AutoComplete suggestedCities={suggestedCities} hint={hint} />
    </>
  );
}
