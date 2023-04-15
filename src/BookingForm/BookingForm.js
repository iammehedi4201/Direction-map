import React from 'react';
import './style.css'
const BookingForm = ({handleSubmitValue}) => {
    return (
        <div className="container " style={{width:"20%"}}>
      {/* Booking form */}
      <div className="row">
        <section className="booking-form-section col-12 mx-auto">
          <div className="text-center my-5">
            <h1 style={{ color: "tomato" }}>BOOKING INFORMATION</h1>
            <hr style={{ width: "50%", margin: "0px auto" }} />
          </div>
          <form onSubmit={handleSubmitValue}>
            <div className="row">
              <div className="col-sm-6 ">
                <div className="form-group">
                  <span className="form-label">Name</span>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter your name"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <span className="form-label">Email</span>
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
            </div>
            <div className="form-group mt-2">
              <span className="form-label">Phone</span>
              <input
                className="form-control"
                type="tel"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="form-group mt-2">
              <span className="form-label">Pickup Location</span>
              {/* <span className="mx-4 leaflet-routing-remove-waypoint"></span> */}
              <input
                className="form-control"
                type="text"
                name="pickupLocation"
                placeholder="Enter ZIP/Location"
              />
            </div>
            <div className="form-group mt-2">
              <span className="form-label">Destination</span>
              <input
                className="form-control"
                type="text"
                name="destinationLocation"
                placeholder="Enter ZIP/Location"
              />
            </div>
            <div className="row">
              <div className="col-sm-5">
                <div className="form-group mt-2">
                  <span className="form-label">Pickup Date</span>
                  <input className="form-control" type="date" />
                </div>
              </div>
              <div className="col-sm-7">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="form-group mt-2">
                      <span className="form-label">Hour</span>
                      <select className="form-control">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                      </select>
                      <span className="select-arrow"></span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group mt-2">
                      <span className="form-label">Min</span>
                      <select className="form-control">
                        <option>05</option>
                        <option>10</option>
                        <option>15</option>
                        <option>20</option>
                        <option>25</option>
                        <option>30</option>
                        <option>35</option>
                        <option>40</option>
                        <option>45</option>
                        <option>50</option>
                        <option>55</option>
                      </select>
                      <span className="select-arrow"></span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group mt-2">
                      <span className="form-label">AM/PM</span>
                      <select className="form-control">
                        <option>AM</option>
                        <option>PM</option>
                      </select>
                      <span className="select-arrow"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-btn">
              <div className="d-grid mt-3">
                <button className="submit-btn btn btn-success">Find Car</button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
    );
};

export default BookingForm;