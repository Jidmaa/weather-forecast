import axios from "axios";
export const getWeather = (lat, lon) => {
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    )
    .then((res) => {
      console.log(res.data);
      return res.data;
    });
};
export const getCityByName = (city) => {
  return axios
    .get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=3&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    )
    .then((res) => {
      console.log(res.data);
      return res.data;
    });
};
