import { getWeather, getCityByName } from "../API/open_weather.instance";
import Lottie from "react-lottie";
import animationData from "../sunny.json";

import { FiEye, FiDroplet, FiWind, FiThermometer } from "react-icons/fi";
export default function WeatherState({ currentWeather }) {
  const animations = [
    {
      name: "Sunny",
      options: {
        animationData,
        loop: true,
        autoplay: true,
        rendererSettings: {
          preserveAspectRatio: "xMaxYMax slice",
        },
      },
    },
  ];

  console.log("current weather in weatherstate", currentWeather);
  const makeDate = () => {
    var dateObj = new Date();
    var days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
    var day = dateObj.getUTCDay();
    var date = dateObj.getUTCDate();
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    var month = dateObj.getUTCMonth();
    var full_date = days[day] + ", " + date + " " + months[month];
    return full_date;
  };
  return (
    <div className="right_side">
      <div>
        <h1> Today </h1>
      </div>
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
                  )}{" "}
                  °C.{" "}
                </span>{" "}
              </>
            )}
          </div>
        </div>

        <div className=" weather-properties small">
          <span className="weather-property">
            <FiDroplet style={{ fontSize: "1rem", marginRight: ".5rem" }} />{" "}
            Humidity : {currentWeather?.current.humidity} %{" "}
          </span>
          <span className="weather-property">
            <FiWind style={{ fontSize: "1rem", marginRight: ".5rem" }} /> Wind
            speed : {Math.floor(currentWeather?.current.wind_speed)} m/s{" "}
          </span>
          <span className="weather-property">
            <FiEye style={{ fontSize: "1rem", marginRight: ".5rem" }} />{" "}
            Visibility :{" "}
            {(currentWeather?.current?.visibility / 1000).toFixed(1)} Km
          </span>
          <span className="weather-property">
            <FiThermometer style={{ fontSize: "1rem", marginRight: ".5rem" }} />{" "}
            Dew point : {Math.floor(currentWeather?.current?.dew_point)} °C
          </span>
        </div>
      </div>
    </div>
  );
}
