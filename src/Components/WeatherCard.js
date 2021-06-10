import { FiEye, FiDroplet, FiWind, FiThermometer } from "react-icons/fi";
import Lottie from "react-lottie";
import sunnyAnimation from "../sunny.json";
import rainyAnimation from "../rainy.json";
export default function WeatherCard({ currentWeather }) {
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
    <div className="card">
      <div className="weather-today">
        <Lottie
          options={animations[0].options}
          height={150}
          width={150}
          style={{ margin: "unset" }}
        />
        <div className="weather">
          <div className="weather-state">
            <span>{currentWeather?.current?.weather[0]?.main}</span>
          </div>

          {/* <span className="weather-state">
        {currentWeather?.current?.temp} °C,{" "}
        {currentWeather?.current?.weather[0].description}.
      </span>
      Feels like {currentWeather?.current?.feels_like} °C. */}
          {currentWeather && (
            <>
              {" "}
              <div className="temp">
                {Math.floor(currentWeather?.current?.temp)} °C
              </div>
              <span>
                {" "}
                Feels like {Math.floor(
                  currentWeather?.current?.feels_like
                )} °C.{" "}
              </span>{" "}
            </>
          )}
        </div>
      </div>

      <div className=" weather-properties small">
        <span className="weather-property">
          <FiDroplet className="property-icon" /> Humidity :{" "}
          {currentWeather?.current.humidity} %{" "}
        </span>
        <span className="weather-property">
          <FiWind className="property-icon" /> Wind speed :{" "}
          {Math.floor(currentWeather?.current.wind_speed)} m/s{" "}
        </span>
        <span className="weather-property">
          <FiEye className="property-icon" /> Visibility :{" "}
          {(currentWeather?.current?.visibility / 1000).toFixed(1)} Km
        </span>
        <span className="weather-property">
          <FiThermometer className="property-icon" /> Dew point :{" "}
          {Math.floor(currentWeather?.current?.dew_point)} °C
        </span>
      </div>
    </div>
  );
}
