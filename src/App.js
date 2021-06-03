import logo from "./logo.svg";
import "./App.css";
import { getWeather } from "./API/open_weather.instance";
function App() {
  getWeather();
  return <h1> Hello world</h1>;
}

export default App;
