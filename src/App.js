import React, { useState } from "react";
import BookingForm from "./BookingForm/BookingForm";
import Map from "./Map";


export const Locationcontext = React.createContext();

function App() {

  const [pickupPlace, setPickupPlace] = useState("");
  const [destinationPlace, setDestinationPlace] = useState("");
  
  const handleSubmitValue = (e) => {
    e.preventDefault();
    const form = e.target;
    const pickupLocation = form.pickupLocation.value;
    const destinationLocation = form.destinationLocation.value;
    setPickupPlace(pickupLocation);
    setDestinationPlace(destinationLocation);
  };

  const location = {
   pickupPlace,
   destinationPlace
   
  };


  return (
     <div className="d-flex justify-content-">
       <Locationcontext.Provider value={location}>
          <BookingForm handleSubmitValue={handleSubmitValue}></BookingForm>\
          <Map></Map>
       </Locationcontext.Provider>
     </div>
  );
}

export default App;