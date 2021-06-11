import { marker } from "leaflet";
import { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
export default function Map({ setCurrentLocation }) {
  const [markers, setMarkers] = useState([{ lat: 51, lng: 52 }]);
  useEffect(
    () => setCurrentLocation({ lat: markers[0].lat, lon: markers[0].lng }),
    [markers]
  );
  function AddMarkerToClick() {
    const map = useMapEvents({
      click(e) {
        const newMarker = e.latlng;
        setMarkers([newMarker]);
      },
    });

    return (
      <>
        {markers.map((marker) => (
          <Marker position={marker}>
            <Popup>Marker is at {marker}</Popup>
          </Marker>
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
