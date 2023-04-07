import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import L from "leaflet";
import "./App.css";
import LeafletGeocoder from "./LeafletGeocoder";
import LeafletRoutingMachine from "./LeafletRoutingMachine";
import { useState } from "react";

function App() {
  const position = [23.746640828661445, 90.4283764417992];
  const [startingPoint, setStartingPoint] = useState("");
  const [endingPoint, setEndingPoint] = useState("");
  const handleStaringPoint = (e) => {
    e.preventDefault();
    setStartingPoint(e.target.value);
  };
  console.log(startingPoint);
  const handleEndingPoint = (e) => {
    e.preventDefault();
    setEndingPoint(e.target.value);
    
  };
  console.log("The app ending point is :-",endingPoint);
  console.log(endingPoint);
  return (
    <div className="">
      <MapContainer center={position} zoom={14} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LeafletGeocoder />
        <LeafletRoutingMachine startingPoint={startingPoint} endingPoint={endingPoint}/>
      </MapContainer>

      <section>
        <form>
          <label>starting Point:</label>
          <br />
          <input onChange={handleStaringPoint} type="text" />
          <br />
          <label>Destination Place:-</label>
          <br />
          <input onChange={handleEndingPoint} type="text" />
          <br />
        </form>
      </section>
    </div>
  );
}

let DefaultIcon = L.icon({
  iconUrl: require("./red.png"),
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
});
L.Marker.prototype.options.icon = DefaultIcon;
export default App;
