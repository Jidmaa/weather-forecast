import WeatherCard from "./WeatherCard";
export default function WeatherState({ currentWeather }) {
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
      <WeatherCard currentWeather={currentWeather} />
      <div>
        <h1> This week </h1>
      </div>
    </div>
  );
}
