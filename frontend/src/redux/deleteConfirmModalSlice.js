/** TAC SERVICE BOOKING APP DELETE CONFIRMATION MODAL SLICE **/
/* This Redux Toolkit slice manages the state for a delete confirmation modal in the TAC Service Booking App. */

import { createSlice } from "@reduxjs/toolkit";

/* Creating a Redux Toolkit slice for managing the modal state and specifying the name of the slice */
export const deleteConfirmModalSlice = createSlice({
  name: "deleteConfirmModal",
  //Initial state for the delete confirmation modal slice
  initialState: {
    isDcModalOpen: false,
    bookingId: null, //Initializing bookingId to null
  },
  //Defining the delete confirmation modal reducers
  reducers: {
    openDcModal: (state, action) => {
      state.isDcModalOpen = true;
      state.bookingId = action.payload; //Set the bookingId from the action payload
    },
    closeDcModal: (state) => {
      state.isDcModalOpen = false;
      state.bookingId = null; //Clear the bookingId when closing the modal
    },
  },
});

/* Destructuring/Extracting action creators from the delete confirmation modal slice for dispatching actions */
export const { openDcModal, closeDcModal } = deleteConfirmModalSlice.actions;

export default deleteConfirmModalSlice.reducer;
