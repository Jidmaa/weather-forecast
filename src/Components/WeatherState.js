import { getWeather, getCityByName } from "../API/open_weather.instance";
import Lottie from "react-lottie";
import animationData from "../sunny.json";
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
              <div className="temp">{currentWeather?.current?.temp} °C</div>
              <span>
                {" "}
                Feels like {currentWeather?.current?.feels_like} °C.{" "}
              </span>{" "}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
