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
  const styles = {
    backgroundImage:
      "linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)), url('https://images.unsplash.com/photo-1558418294-9da149757efe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80')",
  };
  console.log("current weather in weatherstate", currentWeather);
  return (
    <div className="right_side" style={styles}>
      <div className="weather-today">
        <Lottie options={animations[0].options} height="auto" width="auto" />
        <div className="weather">
          <span className="weather-state">
            {currentWeather?.current?.temp} °C,{" "}
            {currentWeather?.current?.weather[0].description}.
          </span>
          Feels like {currentWeather?.current?.feels_like} °C.
        </div>
      </div>
    </div>
  );
}
