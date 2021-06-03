export default function AutoComplete({ suggestedCities }) {
  return (
    <div className="suggestions">
      <ul>
        {suggestedCities.length != 0 &&
          suggestedCities.map((city, index) => (
            <li
              onClick={() => console.log("clicked!")}
              key={index}
              className="suggestion-item"
            >
              {city.name}{" "}
            </li>
          ))}
      </ul>
    </div>
  );
}
