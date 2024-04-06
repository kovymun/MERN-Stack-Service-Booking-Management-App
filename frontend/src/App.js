/** TAC SERVICE BOOKING APP.JS FILE **/

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import LandingPage from "./pages/LandingPage";
import CreateAccPage from "./pages/CreateAccPage";
import ScheduleBookingPage from "./pages/ScheduleBookingPage";
import UpdateBookingPage from "./pages/UpdateBookingPage";
import DashboardPage from "./pages/DashboardPage";

export default function App() {
  /* Getting and destructuring/extracting user information from authentication context */
  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Route for creating a new user account page */}
          <Route
            path="/create-account"
            element={!user ? <CreateAccPage /> : <Navigate to="/" />}
          />
          {/* Route for the login page */}
          <Route
            path="/login"
            element={!user ? <LandingPage /> : <Navigate to="/" />}
          />

          {/* Route for the user's service booking dashboard */}
          <Route
            exact={true}
            path="/"
            element={user ? <DashboardPage /> : <Navigate to="/login" />}
          />

          {/* Route for the new service booking page*/}
          <Route
            path="/schedule-booking"
            element={user ? <ScheduleBookingPage /> : <Navigate to="/login" />}
          />

          {/* Route for a updating a service booking page*/}
          <Route
            path="/update-booking/:id"
            element={user ? <UpdateBookingPage /> : <Navigate to="/login" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
