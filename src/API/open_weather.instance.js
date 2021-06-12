import axios from "axios";
export const getWeather = async (lat, lon) => {
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
  );

  return res.data;
};
export const getCityByName = async (city) => {
  const res = await axios.get(
    `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=3&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
  );
  return res.data;
};
export const getCityByCoordinates = async (lon, lat) => {
  const res = await axios.get(
    `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
  );
  return res.data;
};
