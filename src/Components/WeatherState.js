import WeatherCard from "./WeatherCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeDate } from "../Utils/utils_functions";

export default function WeatherState({ currentWeather }) {
  // Using the slick library to get a nice slider for the weekly weather
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    dotsClass: "slick-dots white",
  };
  return (
    <>
      <div>
        <h1> Today </h1>
        <WeatherCard weather={currentWeather?.current} details={true} />
      </div>
      <div>
        <h1> This week </h1>
        <Slider {...settings}>
          {currentWeather?.daily.map((weather, index) => (
            <WeatherCard
              key={index}
              weather={weather}
              details={false}
              date={makeDate(index)}
            />
          ))}
        </Slider>
      </div>
      {/* </div> */}
    </>
  );
}
