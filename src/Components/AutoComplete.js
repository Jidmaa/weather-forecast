export default function AutoComplete({ suggestedCities, hint }) {
  let regionNames = new Intl.DisplayNames(["en"], { type: "region" });

  return (
    <>
      {suggestedCities.length !== 0 && (
        <div className="suggestions">
          <ul>
            {suggestedCities.map((city, index) => (
              <li
                onClick={() => console.log("clicked!")}
                key={index}
                className="suggestion-item"
              >
                {city.name}, {regionNames.of(city.country)}.
              </li>
            ))}
          </ul>
        </div>
      )}
      {hint && <div style={{ opacity: 0.5 }}> {hint} </div>}
    </>
  );
}
