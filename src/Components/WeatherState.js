import WeatherCard from "./WeatherCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function WeatherState({ currentWeather, currentCity }) {
  console.log("current weather in weatherstate", currentWeather);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };
  const makeDate = (date) => {
    var dateObj = new Date(new Date().setDate(new Date().getDate() + 1 + date));
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
    <>
      <h1 style={{ alignSelf: "center" }}> {currentCity}</h1>
      <div>
        <h1> Today </h1>
      </div>
      <WeatherCard weather={currentWeather?.current} details={true} />
      <h1> This week </h1>
      {/* <div className="weekly-cards"> */}
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
      {/* </div> */}
    </>
  );
}
