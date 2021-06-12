import { makeCityName } from "../API/open_weather.instance";
export default function AutoComplete({
  suggestedCities,
  hint,
  setCurrentLocation,
  setSuggestedCities,
  makeCityName,
}) {
  return (
    <>
      {suggestedCities.length !== 0 && (
        <div className="suggestions">
          <ul>
            {suggestedCities.map((city, index) => (
              <li
                onClick={() => {
                  setCurrentLocation({ lon: city.lon, lat: city.lat });
                  setSuggestedCities([]);
                }}
                key={index}
                className="suggestion-item"
              >
                {makeCityName(city)}
              </li>
            ))}
          </ul>
        </div>
      )}
      {hint && <div style={{ opacity: 0.5 }}> {hint} </div>}
    </>
  );
}
