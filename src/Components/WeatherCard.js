import { FiEye, FiDroplet, FiWind, FiThermometer } from "react-icons/fi";
import Lottie from "react-lottie";

import { generateIconFromWeather, animations } from "../Utils/utils_functions";
export default function WeatherCard({ weather, details, date }) {
  //In this component, the details prop specifies if the rendered Card is a big one with details or not, thanks to that we can tweak some things such as styles and details presence.
  return (
    <div
      className={"card " + (details ? null : "mr")}
      id={details ? "big-card" : null}
    >
      <div className={"weather-today " + (details ? null : "column")}>
        {/*  Using the lightweight library, Lottie, that gives nicely done animations */}
        <Lottie
          options={
            animations.filter(
              (animation) =>
                animation.name ==
                generateIconFromWeather(weather?.weather[0]?.id)
            )[0].options
          }
          height={details ? 150 : 60}
          width={details ? 150 : 60}
          style={{ margin: "unset" }}
        />
        <div className="weather">
          <span> {date && date}</span>
          <div className="weather-state">
            <span>{weather?.weather[0]?.main}</span>
          </div>

          {weather && (
            <>
              <div className="temp">
                {details
                  ? Math.floor(weather?.temp)
                  : Math.floor(weather?.temp?.day)}
                °C
              </div>
              <span>
                Feels like{" "}
                {details
                  ? Math.floor(weather?.feels_like)
                  : Math.floor(weather?.feels_like.day)}
                °C.
              </span>
            </>
          )}
        </div>
      </div>
      {/* If it's the big card, show the details such as humidity, wind speed ... */}
      {details && (
        <div className=" weather-properties small">
          <span className="weather-property">
            <FiDroplet className="property-icon" /> Humidity :{" "}
            {weather?.humidity} %{" "}
          </span>
          <span className="weather-property">
            <FiWind className="property-icon" /> Wind speed :{" "}
            {Math.floor(weather?.wind_speed)} m/s{" "}
          </span>
          <span className="weather-property">
            <FiEye className="property-icon" /> Visibility :{" "}
            {(weather?.visibility / 1000).toFixed(1)} Km
          </span>
          <span className="weather-property">
            <FiThermometer className="property-icon" /> Dew point :{" "}
            {Math.floor(weather?.dew_point)} °C
          </span>
        </div>
      )}
    </div>
  );
}
