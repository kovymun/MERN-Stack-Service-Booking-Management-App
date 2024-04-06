/** TAC SERVICE BOOKING APP HELP MODAL SLICE **/
/* This Redux Toolkit slice manages the state for the help modal in the TAC Service Booking App. */

import { createSlice } from "@reduxjs/toolkit";

/* Creating a Redux Toolkit slice for managing the modal state and specifying the name of the slice */
export const helpModalSlice = createSlice({
  name: "helpModal",
  //Initial state for the help modal slice
  initialState: {
    isHelpModalOpen: false,
  },
  //Defining the help modal reducers
  reducers: {
    openHelpModal: (state) => {
      state.isHelpModalOpen = true;
    },
    closeHelpModal: (state) => {
      state.isHelpModalOpen = false;
    },
  },
});

/* Destructuring/Extracting action creators from the slice for opening and closing the help modal */
export const { openHelpModal, closeHelpModal } = helpModalSlice.actions;

export default helpModalSlice.reducer;
