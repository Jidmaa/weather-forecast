import axios from "axios";
export const getWeather = () => {
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=28&lon=3&exclude=minutely&lang=fr&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    )
    .then((res) => {
      console.log(res);
      return res;
    });
};
export const getCityByName = (city) => {
  return axios
    .get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    )
    .then((res) => {
      console.log(res);
      return res;
    });
};
