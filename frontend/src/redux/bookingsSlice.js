/** TAC SERVICE BOOKING APP BOOKINGS SLICE **/
/* This Redux Toolkit slice manages the state related to bookings in the TAC Service Booking App. */

import { createSlice } from "@reduxjs/toolkit";

/* Creating a Redux Toolkit slice for managing bookings state and specifying the name of the slice */
export const bookingsSlice = createSlice({
  name: "bookings",
  //Initial state for the bookings slice
  initialState: {
    bookingsList: [],
  },
  //Defining the bookings reducers
  reducers: {
    fetchBookings: (state, action) => {
      state.bookingsList = action.payload;
    },
    addBooking: (state, action) => {
      state.bookingsList.push(action.payload);
    },
  },
});

/* Destructuring/Extracting action creators from the bookings slice for dispatching actions */
export const { fetchBookings, addBooking } = bookingsSlice.actions;

export default bookingsSlice.reducer;
