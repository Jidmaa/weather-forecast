import axios from "axios";
export const getWeather = () => {
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=minutely&lang=fr&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    )
    .then((res) => {
      console.log(res);
      return res;
    });
};
