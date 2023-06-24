/**TAC SERVICE BOOKING APP.JS FILE**/
/**KINDLY REFER TO THE END OF THIS DOCUMENT FOR ALL REFERENCES**/

import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import HomePageAdmin from "./pages/HomePageAdmin";
import HomePageUser from "./pages/HomePageUser";
import UpdateBookingPage from "./pages/UpdateBookingPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import * as moment from "moment";
import LandingPage from "./pages/LandingPage";

/*
The TAC Service Booking Web Application is designed for internal use and will primarily be used by the service booking department within the TAC organization. 
The app affords the users/booking department of Tyler’s Auto Clinic to carry out their daily responsibilities, which are to monitor, review, schedule, update, 
and cancel customer service bookings.

Functional use of the app will have authorized access/restrictions based on the roles and responsibilities of the employees/users within the department. 
The manager of the department will have administrative access rights to the app, allowing monitoring, reviewing, scheduling, updating, and cancellation of all 
service bookings. The service booking agents (normal users) within the department will have access rights for monitoring, reviewing, and scheduling bookings only.

Utilized React-Router-DOM "BrowserRouter, Routes and Route" components to create routes/paths for each page. The Route component has two props 
defined, i.e, the "path" and "element" props. Each route displays the component passed to the "element" props in the URL contained in the string passed to 
the "path" props.
*/

export default function App() {
  const [error, setError] = useState(null);
  const [bookings, setBookings] = useState([{}]);
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [admin, setAdmin] = useState(false);
  const [normalUser, setNormalUser] = useState(false);
  const [newBooking, setNewBooking] = useState({
    customer: "",
    customerContactNumber: "",
    vehicleMake: "",
    vehicleModel: "",
    vehicleReg: "",
  });
  const { user } = useAuthContext();

  /*
  Using the FETCH API, the useEffect hook is used to retrieve the list of all scheduled service bookings from the "bookingsDB" database. The response is then stored 
  in the "bookings" state variable, where the information is rendered on the app. See RenderBookings.js file.
  */
  useEffect(() => {
    if (user) {
      fetch("/api/bookings", {
        headers: { Authorization: `Bearer ${user.token}` },
      })
        .then((res) => res.json())
        .then(
          (response) => {
            setBookings(response.bookings);
          },
          /* Note: it's important to handle errors here instead of a catch() block so that we don't swallow exceptions from actual bugs in components. */
          (error) => {
            setError(error);
          }
        );
      if (user.role === "admin") {
        setAdmin(true);
        setNormalUser(false);
      } else if (user.role === "user") {
        setNormalUser(true);
        setAdmin(false);
      }
    }
  }, [user]);

  /*Function to handle the "add/schedule booking" input changes and store it in the "newBooking" state variable*/
  const handleAddBooking = (event) => {
    setNewBooking({
      ...newBooking,
      [event.target.name]: event.target.value,
    });
  };

  /*
  handleServiceType function:
  Function to handle the service type selected by the user. Service Type selected by the user stored in the "service" state variable.
  */
  const handleServiceType = (event) => {
    setService(event.target.value);
  };

  /*
  handleDate function:
  Function to handle the service date and time selected by the user. Service date and time selected by the user stored in the "date" state variable.
  */
  const handleDate = (event) => {
    const instDate = moment(event.target.value).format("LLLL");
    setDate(instDate);
  };

  /*
  Scheduling a New Booking:
  addBooking function to add a "new booking" to the bookings collection in the bookingsDB MongoDB database, VIA user input from the ReactJS front-end, in the back-end ExpressJS server.
  The updated response is then stored in the "bookings" state variable, where the data is rendered on the app.
  */

  const singleBooking = {
    customer: newBooking.customer,
    customerContactNumber: newBooking.customerContactNumber,
    vehicleMake: newBooking.vehicleMake,
    vehicleModel: newBooking.vehicleModel,
    vehicleReg: newBooking.vehicleReg,
    bookingDate: date,
    service: service,
  };

  const addBooking = (event) => {
    event.preventDefault();

    if (!user) {
      setError("You must be logged in");
      return;
    }

    fetch("/api/bookings/schedule-booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(singleBooking),
    })
      .then((res) => res.json())
      .then((response) => {
        setBookings(response.bookings);
      })
      .catch((error) => console.log("Error:", error));
    setNewBooking({
      customer: "",
      customerContactNumber: "",
      vehicleMake: "",
      vehicleModel: "",
      vehicleReg: "",
    });
    setDate("");
    setService("");
  };

  /*
  Cancelling a booking:
  deleteBooking function removes/cancels a booking from the database when the user clicks on the "CANCEL" button in the individual booking display. The updated 
  response is then stored in the "bookings" state variable, where the information is rendered on the app.
  */
  const deleteBooking = (id) => {
    fetch(`/api/bookings/remove-booking/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    })
      .then((res) => res.json())
      .then(() => {
        const filteredBookings = bookings.filter(
          (booking) => booking._id !== id
        );
        setBookings(filteredBookings);
      })
      .catch((error) => console.log(`Error: ${error}`));
  };

  if (error) {
    return <div className="error-message">Error: {error.message}</div>;
  } else {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/tyler's-auto-clinic" element={<LandingPage />} />
            <Route
              path="/sign-up"
              element={!user ? <SignUpPage /> : <Navigate to="/" />}
            />
            <Route
              path="/login"
              element={!user ? <LoginPage /> : <Navigate to="/" />}
            />
            <Route
              exact={true}
              path="/"
              element={
                user && admin ? (
                  <HomePageAdmin
                    bookings={bookings}
                    handleAddBooking={handleAddBooking}
                    addBooking={addBooking}
                    handleServiceType={handleServiceType}
                    handleDate={handleDate}
                    customerValue={newBooking.customer}
                    numValue={newBooking.customerContactNumber}
                    vehMake={newBooking.vehicleMake}
                    vehModel={newBooking.vehicleModel}
                    vehReg={newBooking.vehicleReg}
                    deleteBooking={deleteBooking}
                  />
                ) : user && normalUser ? (
                  <HomePageUser
                    bookings={bookings}
                    handleAddBooking={handleAddBooking}
                    addBooking={addBooking}
                    handleServiceType={handleServiceType}
                    handleDate={handleDate}
                    customerValue={newBooking.customer}
                    numValue={newBooking.customerContactNumber}
                    vehMake={newBooking.vehicleMake}
                    vehModel={newBooking.vehicleModel}
                    vehReg={newBooking.vehicleReg}
                  />
                ) : (
                  <Navigate to="/tyler's-auto-clinic" />
                )
              }
            />
            <Route
              path="/admin/update-booking/:id"
              element={
                user ? (
                  <UpdateBookingPage setBookings={setBookings} />
                ) : (
                  <Navigate to="/tyler's-auto-clinic" />
                )
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

/**REFERENCES**/
/*
React Router - BrowserRouter, Routes and Route components:
Researched and utilized the BrowserRouter, Routes and Route React-Router components to create page routes for this App.
Referenced the GeeksforGeeks website for this information.
https://www.geeksforgeeks.org/reactjs-router/

React useState Hook:
Researched and utilized React useState Hook to define variables for dynamic data in this app.
Referenced the w3schools website for this information.
https://www.w3schools.com/react/react_usestate.asp

React useEffect Hook:
Researched and utilized the React useEffect Hook in this app.
Referenced the ReactJS website for this information.
https://reactjs.org/docs/hooks-effect.html

Conditional Rendering in React:
Researched and utilized how to use a conditional ternary operator in ReactJS, and applied the logic to this project.
Referenced the ReactJS website for this information.
https://reactjs.org/docs/conditional-rendering.html

MomentJS package:
Utilized moment.js npm package to format the display of the service booking date and time.
Referenced the moment.js documentation website and Stack Overflow guideline for information on how to install and use this package.
https://momentjs.com/
https://stackoverflow.com/questions/59853254/how-to-transfer-html-datetime-picker-datetime-local-to-moment-format
*/
