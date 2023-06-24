/**TAC SERVICE BOOKING APP - UPDATE BOOKING PAGE**/
/**KINDLY REFER TO THE END OF THIS DOCUMENT FOR ALL REFERENCES**/

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import * as moment from "moment";
import UpdateBookingForm from "../components/update-booking-components/UpdateBookingForm";
import Header from "../components/header-components/Header";

export default function UpdateBookingPage({ setBookings }) {
  const [dateUpdate, setDateUpdate] = useState("");
  const [serviceUpdate, setServiceUpdate] = useState("");
  const [updateBooking, setUpdateBooking] = useState({
    id: "",
    customer: "",
    customerContactNumber: "",
    vehicleMake: "",
    vehicleModel: "",
    vehicleReg: "",
  });
  const { user } = useAuthContext();

  /*Function to handle the "update booking" input changes and store it in the "updateBooking" state variable*/
  const handleUpdateBooking = (event) => {
    setUpdateBooking({
      ...updateBooking,
      [event.target.name]: event.target.value,
    });
  };

  /*
  handleServiceType function:
  Function to handle the updated service type selected by the user. Service Type selected by the user stored in the "serviceUpdate" state variable.
  */
  const handleServiceType = (event) => {
    setServiceUpdate(event.target.value);
  };

  /*
  handleDate function:
  Function to handle the updated service date and time selected by the user. Service date and time selected by the user stored in the "dateUpdate" state variable.
  */
  const handleDate = (event) => {
    const instDate = moment(event.target.value).format("LLLL");
    setDateUpdate(instDate);
  };

  const navigate = useNavigate();

  const updatedSingleBooking = {
    customer: updateBooking.customer,
    customerContactNumber: updateBooking.customerContactNumber,
    vehicleMake: updateBooking.vehicleMake,
    vehicleModel: updateBooking.vehicleModel,
    vehicleReg: updateBooking.vehicleReg,
    bookingDate: dateUpdate,
    service: serviceUpdate,
  };

  const updatingBooking = async (event) => {
    event.preventDefault();
    await fetch(`/api/bookings/update-booking/${updateBooking.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(updatedSingleBooking),
    })
      .then((res) => res.json())
      .then((data) => {
        setBookings(data.bookings);
      })
      .catch((error) => console.log("Error:", error));

    setUpdateBooking({
      id: "",
      customer: "",
      customerContactNumber: "",
      vehicleMake: "",
      vehicleModel: "",
      vehicleReg: "",
    });
    setDateUpdate("");
    setServiceUpdate("");
    navigate("/");
  };

  return (
    <div className="update-booking page">
      <Header />
      <div className="update-booking-form-container">
        <UpdateBookingForm
          idValue={updateBooking.id}
          customerUpdate={updateBooking.customer}
          numUpdate={updateBooking.customerContactNumber}
          vehMakeUpdate={updateBooking.vehicleMake}
          vehModelUpdate={updateBooking.vehicleModel}
          vehRegUpdate={updateBooking.vehicleReg}
          handleDate={handleDate}
          handleUpdateBooking={handleUpdateBooking}
          handleService={handleServiceType}
          updatingBooking={updatingBooking}
        />
      </div>
    </div>
  );
}

/**REFERENCES**/
/*
useNavigate React-Router Hook:
Utilized the useNavigate hook to re-direct the admin user to the home page once the booking has been updated.
Referenced the React-Router documentation website for this information.
https://reactrouter.com/en/main/hooks/use-navigate

MomentJS package:
Utilized moment.js npm package to format the display of the service booking date and time.
Referenced the moment.js documentation website and Stack Overflow guideline for information on how to install and use this package.
https://momentjs.com/
https://stackoverflow.com/questions/59853254/how-to-transfer-html-datetime-picker-datetime-local-to-moment-format
*/
