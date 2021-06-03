import logo from "./logo.svg";
import "./App.css";
import { getWeather, getCityByName } from "./API/open_weather.instance";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
function App() {
  return (
    <>
      <div className="main_frame">
        <div className="left_side"></div>
        <div className="right_side"></div>
      </div>

      {/* <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer> */}
    </>
  );
}

export default App;
