import { BiSearchAlt } from "react-icons/bi";
import { useState, useEffect } from "react";
import { getCityByName } from "../API/open_weather.instance";
import AutoComplete from "./AutoComplete";

export default function SearchBar() {
  const [suggestedCities, setSuggestedCities] = useState([]);
  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Entrez le nom d'un pays "
          className="search"
          onChange={(e) =>
            getCityByName(e.target.value).then((data) =>
              setSuggestedCities(data)
            )
          }
        />
        <BiSearchAlt className="search-icon" />
      </div>
      <AutoComplete suggestedCities={suggestedCities} />
    </>
  );
}
