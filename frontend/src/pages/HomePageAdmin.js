/**TAC SERVICE BOOKING APP - ADMIN USER HOME PAGE**/

import RenderBookings from "../components/home-page-components/RenderBookings";
import Header from "../components/header-components/Header";
import ScheduleBookingFormAdmin from "../components/home-page-components/ScheduleBookingFormAdmin";

export default function HomePageAdmin({
  bookings,
  handleAddBooking,
  addBooking,
  handleServiceType,
  handleDate,
  deleteBooking,
  customerValue,
  numValue,
  vehMake,
  vehModel,
  vehReg,
}) {
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
            <ScheduleBookingFormAdmin
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
            <RenderBookings bookings={bookings} deleteBooking={deleteBooking} />
          </div>
          <div className="schedule-booking-form-container">
            <ScheduleBookingFormAdmin
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
