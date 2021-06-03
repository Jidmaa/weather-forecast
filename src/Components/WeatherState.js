import { getWeather, getCityByName } from "../API/open_weather.instance";

export default function WeatherState({ currentWeather }) {
  console.log("current weather in weatherstate", currentWeather);
  return <div className="right_side">{currentWeather?.current?.temp} °C</div>;
}
