export default function AutoComplete({
  suggestedCities,
  hint,
  setCurrentLocation,
  setSuggestedCities,
  setCurrentCity,
}) {
  let regionNames = new Intl.DisplayNames(["en"], { type: "region" });

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
                {city.name}
                {/* If you research a continent, the opeanweathermap API won't give a country code, so we'll show the continent's name instead */}
                {city.country ? ", " + regionNames.of(city.country) : null}.
              </li>
            ))}
          </ul>
        </div>
      )}
      {hint && <div style={{ opacity: 0.5 }}> {hint} </div>}
    </>
  );
}
