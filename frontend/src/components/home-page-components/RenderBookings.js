/**TAC SERVICE BOOKING APP RENDER BOOKINGS REACT COMPONENT**/
/**KINDLY REFER TO THE END OF THIS DOCUMENT FOR ALL REFERENCES**/

import { v4 as uuidv4 } from "uuid";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

/*
TAC Service Booking App: Render Booking component:
The RenderBookings component renders all the service bookings on the TAC Service Booking App. By using the array map function, the booking information is mapped,
from the "bookings" state variable and then rendered on the App. In addition, for users with administrative access rights, this component is configured 
with "UPDATE and CANCEL" buttons as part of each individual booking rendered on the App. This allows the user with administrative access rights 
to UPDATE or CANCEL a booking on demand.
*/

export default function RenderBookings({ bookings, deleteBooking }) {
  const bookingsDisplay = bookings.map((booking) => {
    return (
      <div className="booking-display" key={uuidv4()}>
        <ul>
          <li>Booking ID: {booking._id}</li>
          <li>Customer: {booking.customer}</li>
          <li>Customer Contact No. : {booking.customerContactNumber}</li>
          <li>Vehicle Make: {booking.vehicleMake}</li>
          <li>Vehicle Model: {booking.vehicleModel}</li>
          <li>Vehicle Reg: {booking.vehicleReg}</li>
          <li>Date: {booking.bookingDate}</li>
          <li>Service: {booking.service}</li>
        </ul>

        {/* Link to re-route the user with administrative access rights to the update booking page */}
        <Link
          to={`/admin/update-booking/${booking._id}`}
          className="btn btn-dark me-2 mb-3"
          variant="dark"
        >
          UPDATE
        </Link>

        {/* Button allowing the user with administrative access rights to the cancel(delete) a booking */}
        <Button
          className="me-2 mb-3"
          variant="dark"
          onClick={() => {
            deleteBooking(booking._id);
          }}
        >
          CANCEL
        </Button>
      </div>
    );
  });
  return bookingsDisplay;
}

/**REFERENCES**/
/*
Researched and utilized the 'uuid' package to generate unique key props ID in the JavaScript map function.
Referenced the NPM package manager for installation and usage information.
https://www.npmjs.com/package/uuid

Javascript Map Method:
Utilized the .map() method to render the tasks stored in the "bookings" state array variable.
Referenced the MDN Dev Docs website for this information.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
*/
