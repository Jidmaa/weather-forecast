import { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  useMap,
} from "react-leaflet";

export default function Map({ setCurrentLocation, currentLocation }) {
  //Use the current location as a marker

  const [markers, setMarkers] = useState([
    { lat: currentLocation.lat, lng: currentLocation.lon },
  ]);

  //Watching the currentlocation changes to set the marker in the map

  useEffect(() => {
    setMarkers([{ lat: currentLocation.lat, lng: currentLocation.lon }]);
  }, [currentLocation.lat, currentLocation.lon]);

  // Marker component that updates the marker and current location on click

  function AddMarkerToClick() {
    //Using the provided MapEvents hook to set the marker when clicking and setting the new location, which then gets the weather of said location

    const mapEvents = useMapEvents({
      click(e) {
        const newMarker = e.latlng;
        setMarkers([newMarker]);
        setCurrentLocation({ lat: newMarker.lat, lon: newMarker.lng });
      },
      locationfound(e) {
        const newMarker = e.latlng;
        setMarkers([newMarker]);
        setCurrentLocation({ lat: newMarker.lat, lon: newMarker.lng });
      },
    });
    useEffect(() => {
      mapEvents.locate();
    }, []);
    // Using the provided map hook to watch the location and fly to it whenever search/accessed with gps data
    const map = useMap();

    useEffect(() => {
      map.flyTo(
        { lat: currentLocation.lat, lng: currentLocation.lon },
        map.getZoom()
      );
    }, [currentLocation.lat, currentLocation.lon]);

    return (
      <>
        {markers.map((marker) => (
          <Marker position={marker}></Marker>
        ))}
      </>
    );
  }

  return (
    <div style={{ height: "100%" }}>
      <MapContainer
        center={markers[0]}
        zoom={9}
        scrollWheelZoom={true}
        style={{ height: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <AddMarkerToClick />
      </MapContainer>
    </div>
  );
}
