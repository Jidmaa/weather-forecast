import { marker } from "leaflet";
import { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import { getCityByCoordinates } from "../API/open_weather.instance";
export default function Map({
  setCurrentLocation,
  setCurrentCity,
  currentLocation,
}) {
  let regionNames = new Intl.DisplayNames(["en"], { type: "region" });
  const [markers, setMarkers] = useState([{ lat: 51.505, lng: -0.09 }]);
  useEffect(() => {
    setMarkers([{ lat: currentLocation.lat, lng: currentLocation.lon }]);
  }, [currentLocation.lat, currentLocation.lon]);
  // useEffect(() => {
  //   setCurrentLocation({ lat: markers[0].lat, lon: markers[0].lng });

  // }, [markers]);

  function AddMarkerToClick() {
    const map = useMapEvents({
      click(e) {
        const newMarker = e.latlng;
        setMarkers([newMarker]);
        console.log("hey");
        setCurrentLocation({ lat: newMarker.lat, lon: newMarker.lng });
        getCityByCoordinates(newMarker.lng, newMarker.lat)
          .then((city) => {
            console.log("CITYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY", city);
            setCurrentCity(
              city[0].name +
                (city[0].country
                  ? ", " + regionNames.of(city[0].country)
                  : null)
            );
          })
          .catch(() => setCurrentCity("Unkown"));
      },
    });

    return (
      <>
        {markers.map((marker) => (
          <Marker position={marker}></Marker>
        ))}
      </>
    );
  }

  return (
    <div style={{ height: "65vh" }}>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "100%", marginTop: "2rem" }}
        id="mapbox.dark"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <AddMarkerToClick />
      </MapContainer>
    </div>
  );
}
