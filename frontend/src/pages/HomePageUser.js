/**TAC SERVICE BOOKING APP - NORMAL USER (SERVICE BOOKING AGENT) HOME PAGE**/

import { v4 as uuidv4 } from "uuid";
import Header from "../components/header-components/Header";
import ScheduleBookingFormUser from "../components/home-page-components/ScheduleBookingFormUser";

export default function HomePageUser({
  bookings,
  handleAddBooking,
  addBooking,
  handleServiceType,
  handleDate,
  customerValue,
  numValue,
  vehMake,
  vehModel,
  vehReg,
}) {
  const bookingsDisplay = bookings.map((booking) => {
    return (
      <div className="booking-display" key={uuidv4()}>
        <ul>
          <li>Booking ID: {booking._id}</li>
          <li>Customer: {booking.customer}</li>
          <li>Customer Contact No.: {booking.customerContactNumber}</li>
          <li>Vehicle Make: {booking.vehicleMake}</li>
          <li>Vehicle Model: {booking.vehicleModel}</li>
          <li>Vehicle Reg: {booking.vehicleReg}</li>
          <li>Date: {booking.bookingDate}</li>
          <li>Service: {booking.service}</li>
        </ul>
      </div>
    );
  });

  return (
    <div className="home-page-display">
      <Header />
      {bookings.length === 0 ? (
        <div className="home-withoutData-content">
          <div className="no-data-message-container">
            <p className="no-data-message text-center">
              No Bookings Scheduled!
            </p>
          </div>
          <div className="schedule-booking-form-container">
            <ScheduleBookingFormUser
              handleAddBooking={handleAddBooking}
              handleServiceType={handleServiceType}
              handleDate={handleDate}
              customerValue={customerValue}
              numValue={numValue}
              vehMake={vehMake}
              vehModel={vehModel}
              vehReg={vehReg}
              addBooking={addBooking}
            />
          </div>
        </div>
      ) : (
        <div className="home-withData-content">
          <div className="booking-display-container">
            <h5 className="booking-dashboard-heading">Bookings Dashboard:</h5>
            {bookingsDisplay}
          </div>
          <div className="schedule-booking-form-container">
            <ScheduleBookingFormUser
              handleAddBooking={handleAddBooking}
              handleServiceType={handleServiceType}
              handleDate={handleDate}
              customerValue={customerValue}
              numValue={numValue}
              vehMake={vehMake}
              vehModel={vehModel}
              vehReg={vehReg}
              addBooking={addBooking}
            />
          </div>
        </div>
      )}
    </div>
  );
}
