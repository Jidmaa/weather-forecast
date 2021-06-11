import { FiEye, FiDroplet, FiWind, FiThermometer } from "react-icons/fi";
import Lottie from "react-lottie";
import sunnyAnimation from "../sunny.json";
import rainyAnimation from "../rainy.json";
export default function WeatherCard({ weather, details, date }) {
  console.log("weather in weather card", weather);

  const animations = [
    {
      name: "Sunny",
      options: {
        animationData: sunnyAnimation,
        loop: true,
        autoplay: true,
        rendererSettings: {
          preserveAspectRatio: "xMaxYMax slice",
        },
      },
    },
  ];
  return (
    <div className="card" style={{ marginRight: "1rem" }}>
      <div className={details ? "weather-today" : "weather-today small"}>
        <Lottie
          options={animations[0].options}
          height={details ? 150 : 60}
          width={details ? 150 : 60}
          style={{ margin: "unset" }}
        />
        <div className="weather">
          <span> {date && date}</span>
          <div className="weather-state">
            <span>{weather?.weather[0]?.main}</span>
          </div>

          {/* <span className="weather-state">
        {currentWeather?.current?.temp} °C,{" "}
        {currentWeather?.current?.weather[0].description}.
      </span>
      Feels like {currentWeather?.current?.feels_like} °C. */}
          {weather && (
            <>
              {" "}
              <div className="temp">
                {details
                  ? Math.floor(weather?.temp)
                  : Math.floor(weather?.temp?.day)}{" "}
                °C
              </div>
              <span>
                {" "}
                Feels like{" "}
                {details
                  ? Math.floor(weather?.feels_like)
                  : Math.floor(weather?.feels_like.day)}{" "}
                °C.{" "}
              </span>{" "}
            </>
          )}
        </div>
      </div>

      {details && (
        <div className=" weather-properties fade-in small">
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
