import sunnyAnimation from "../Utils/sunny.json";
import rainyAnimation from "../Utils/rainy.json";
import drizzleAnimation from "../Utils/drizzle.json";
import thunderAnimation from "../Utils/thunderstorm.json";
import snowAnimation from "../Utils/snow.json";
import windAnimation from "../Utils/wind.json";
import cloudAnimation from "../Utils/clouds.json";

// A function that makes a date with UTC format to show like "Sun, 24 June"

export const makeDate = (date) => {
  var dateObj = new Date(new Date().setDate(new Date().getDate() + 1 + date));
  var days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
  var day = dateObj.getUTCDay();
  var dateNum = dateObj.getUTCDate();
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
  var full_date = days[day] + ", " + dateNum + " " + months[month];
  return full_date;
};

// Gives the weather name according to the openweathermap IDs in order to choose a Lottie animation when rendering the card

export const generateIconFromWeather = (id) => {
  switch (true) {
    case id >= 200 && id < 300:
      return "Thunderstorm";
    case id >= 300 && id < 500:
      return "Drizzle";
    case id >= 500 && id < 600:
      return "Rain";
    case id >= 600 && id < 700:
      return "Snow";
    case id >= 700 && id < 800:
      return "Atmosphere";
    case id === 800:
      return "Clear";
    case id > 800:
      return "Clouds";
    default:
      return "Clear";
  }
};
// The list of animations, Can be more in the future !
export const animations = [
  {
    name: "Clear",
    options: {
      animationData: sunnyAnimation,
      loop: true,
      autoplay: true,
      rendererSettings: {
        preserveAspectRatio: "xMaxYMax slice",
      },
    },
  },
  {
    name: "Drizzle",
    options: {
      animationData: drizzleAnimation,
      loop: true,
      autoplay: true,
      rendererSettings: {
        preserveAspectRatio: "xMaxYMax slice",
      },
    },
  },
  {
    name: "Thunderstorm",
    options: {
      animationData: thunderAnimation,
      loop: true,
      autoplay: true,
      rendererSettings: {
        preserveAspectRatio: "xMaxYMax slice",
      },
    },
  },
  {
    name: "Rain",
    options: {
      animationData: rainyAnimation,
      loop: true,
      autoplay: true,
      rendererSettings: {
        preserveAspectRatio: "xMaxYMax slice",
      },
    },
  },
  {
    name: "Snow",
    options: {
      animationData: snowAnimation,
      loop: true,
      autoplay: true,
      rendererSettings: {
        preserveAspectRatio: "xMaxYMax slice",
      },
    },
  },
  {
    name: "Atmosphere",
    options: {
      animationData: windAnimation,
      loop: true,
      autoplay: true,
      rendererSettings: {
        preserveAspectRatio: "xMaxYMax slice",
      },
    },
  },
  {
    name: "Clouds",
    options: {
      animationData: cloudAnimation,
      loop: true,
      autoplay: true,
      rendererSettings: {
        preserveAspectRatio: "xMaxYMax slice",
      },
    },
  },
];

// If you research a continent, the opeanweathermap API won't give a country code, so we'll show the continent's name instead

export const makeCityName = (city) => {
  let regionNames = new Intl.DisplayNames(["en"], { type: "region" });
  return (
    city.name + (city.country ? ", " + regionNames.of(city.country) : null)
  );
};
