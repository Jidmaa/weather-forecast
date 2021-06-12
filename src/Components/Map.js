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

  // A hook to Check if the map has loaded or not, unfortunately the react-leaflet "load" event never worked, so I had to find a workaround...

  const [loaded, setLoaded] = useState(false);

  //Watching the currentlocation changes to set the marker in the map

  useEffect(() => {
    setMarkers([{ lat: currentLocation.lat, lng: currentLocation.lon }]);
  }, [currentLocation.lat, currentLocation.lon]);

  // Marker component that updates the marker and current location on click

  function AddMarkerToClick({ currentLocation }) {
    //Using the provided MapEvents hook to set the marker when clicking and setting the new location, which then gets the weather of said location

    const mapEvents = useMapEvents({
      click: (e) => {
        const newMarker = e.latlng;
        setMarkers([newMarker]);
        setCurrentLocation({ lat: newMarker.lat, lon: newMarker.lng });
      },
    });

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
  const LocateInStart = () => {
    // The component that does the trick, basically it performs the locationFound event (that's when the user clicks "authorize" for the app to know its location).

    const mapEvents = useMapEvents({
      locationfound(e) {
        console.log("location found", e.latlng);
        const newMarker = e.latlng;
        setMarkers([newMarker]);
        setCurrentLocation({ lat: newMarker.lat, lon: newMarker.lng });
      },
    });

    // then it checks if the map has loaded, if it's the case it flies to the located area
    loaded == true && mapEvents.locate();

    // Setting the loaded to false to break the flow (so everything executes only on load/when the use authorizes)
    setLoaded(false);
    return null;
  };
  return (
    <div style={{ height: "100%" }}>
      <MapContainer
        center={markers[0]}
        zoom={9}
        scrollWheelZoom={true}
        style={{ height: "100%" }}
        whenReady={() => {
          //Setting the Loaded to true when the Map is ready
          setLoaded(true);
        }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <AddMarkerToClick currentLocation={currentLocation} />
        <LocateInStart />
      </MapContainer>
    </div>
  );
}
