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
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          cursor: "pointer",
        }}
      >
        <h3 style={{ color: "white" }}> Today </h3>
        <h3 className="primary" style={{ opacity: 0.5 }}>
          This week
        </h3>
      </div>
      <div className="weather-today">
        <div className="weather">
          <div className="weather-state">
            <Lottie
              options={animations[0].options}
              height={50}
              width={50}
              style={{ margin: "unset" }}
            />
            <span>{makeDate()}</span>
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
                {currentWeather?.current?.temp?.substring(0, 2)} °C
              </div>
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
