import React, { useEffect, useState } from "react";
import L, { icon } from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useMap } from "react-leaflet";


// let customeMarkIcon = L.icon({
//     iconUrl: require('./carIcon.png'),
//     iconSize: [25, 41],
//   });

const LeafletRoutingMachine = ({ startingPoint, endingPoint }) => {
  const map = useMap();

  console.log("The endingPoint is :-",endingPoint);

  const [valueOne, setValueOne] = useState("");
  const [valueTwo, setValueTwo] = useState("");

  const [valueThree, setValueThree] = useState("");
  const [valueFour, setValueFour] = useState("");

  console.log("The valueThree & valueFour is ",valueThree,valueFour);

  //this is for finding origin lat & lng
  useEffect(() => {
    const apiKey = "e16171bb732c4d82b1bfe075d57ea900";
    const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
      startingPoint
    )}&key=${apiKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const lat = data.results[0].geometry.lat;
        const lng = data.results[0].geometry.lng;
        setValueOne(lat);
        setValueTwo(lng);

        console.log("The place lat & lng is :-", lat, lng);
      })
      .catch((error) => console.error(error));
  }, [startingPoint]);

  //this is for finding destination lat & lng
  useEffect(() => {
    const apiKey = "e16171bb732c4d82b1bfe075d57ea900";
    const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
        endingPoint
    )}&key=${apiKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const lat = data.results[0].geometry.lat;
        const lng = data.results[0].geometry.lng;
        setValueThree(lat);
        setValueFour(lng);
      })
      .catch((error) => console.error(error));
  }, [endingPoint]);


  /// this is overall routing showing and calculation
  useEffect(() => {
    var marker1 = L.marker([valueOne,valueTwo]).addTo(map);
    L.Routing.control({
      waypoints: [
        L.latLng(valueOne, valueTwo), //starting point
        L.latLng(valueThree,valueFour), //destination point
      ],
      routeWhileDragging: true,
      geocoder: L.Control.Geocoder.nominatim(),
      addWaypoints: true,
      draggableWaypoints: false,
      fitSelectedRoutes: true,
      showAlternatives: true,
    })
      .on("routesfound", function (e) {
        console.log("The routes are :", e);
        e.routes[0].coordinates.forEach((c, i) => {
          setTimeout(() => {
            marker1.setLatLng([c.lat, c.lng]);
          }, 1000 * i);
        });
      })
      .addTo(map);
  }, [valueOne, valueThree]);
  return null;
};

export default LeafletRoutingMachine;




/// this for when click one then destination will set 

// var marker1 = L.marker([23.746640828661445, 90.4283764417992], ).addTo(
//     map
//   );
//   map.on("click", function (e) {
//     L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
//     L.Routing.control({
//       waypoints: [
//         L.latLng(23.746640828661445, 90.4283764417992),
//         L.latLng(e.latlng.lat, e.latlng.lng),
//       ],
//       lineOptions: {
//         styles: [
//           {
//             color: "red",
//             weight: 2,
//             opacity: 0.7,
//           },
//         ],
//       },
//       routeWhileDragging: false,
//       geocoder: L.Control.Geocoder.nominatim(),
//   addWaypoints: false,
//   draggableWaypoints: false,
//   fitSelectedRoutes: true,
//   showAlternatives: true,
//     })
//       .on("routesfound", function (e) {
//         e.routes[0].coordinates.forEach((c, i) => {
//           setTimeout(() => {
//             marker1.setLatLng([c.lat, c.lng]);
//           }, 1000 * i);
//         });
//       })
//       .addTo(map);
//   });
