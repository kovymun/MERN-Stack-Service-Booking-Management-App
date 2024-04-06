/** TAC SERVICE BOOKING APP DELETE CONFIRMATION MODAL COMPONENT **/
/* 

This component represents the Delete Confirmation Modal that pops up when a user selects a cancel action on a service booking. 
on using the service*/

/* Importing the necessary dependencies */
import { closeDcModal } from "../../redux/deleteConfirmModalSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { fetchBookings } from "../../redux/bookingsSlice";
import { useAuthContext } from "../../hooks/useAuthContext";

const DeleteConfirmModal = () => {
  /* Initializing Redux toolkit dispatch and authentication context hooks */
  const dispatch = useDispatch();
  const { user } = useAuthContext();

  /* Retrieving modal state and selected bookingId from Redux toolkit store */
  const isDcModalOpen = useSelector((state) => state.deleteModal.isDcModalOpen);
  const selectedBookingId = useSelector((state) => state.deleteModal.bookingId);

  /* Function to close the delete confirmation modal */
  const closeModal = () => {
    dispatch(closeDcModal());
  };

  /* Function to handle deletion a service booking */
  const deleteBooking = async (action) => {
    try {
      const response = await fetch(
        `/api/bookings/remove-booking/${selectedBookingId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      if (response.ok) {
        const json = await response.json();
        const bookingsData = json.bookings;
        const filteredBookings = bookingsData.filter(
          (booking) => booking._id !== selectedBookingId
        );

        // Close the modal and update bookings in the Redux toolkit store
        closeModal();

        dispatch(fetchBookings(filteredBookings));

        // Show success toast message based on the action type
        if (action === "cancel") {
          toast("Work order cancelled!", { type: "success" });
        } else if (action === "complete") {
          toast("Work order completed!", { type: "success" });
        }
      }
    } catch (error) {
      // Handle errors and display appropriate error toast message
      console.error("Error", error);
      if (action === "cancel") {
        toast("Cancellation unsuccessful!", { type: "error" });
      } else if (action === "complete") {
        toast("Mark work order complete unsuccessful!", { type: "error" });
      }
    }
  };

  return (
    <section
      className={`modal-section${isDcModalOpen ? "-visible" : "-hidden"}`}
    >
      <div className="cancel-confirmation-modal-container">
        <div className="title-container">
          <h2 className="title">Confirm Cancellation</h2>
        </div>
        <p className="confirmation-message">
          Are you sure you want to cancel the work order with ID:
          <strong>{selectedBookingId}</strong> ?
        </p>
        <div className="cancel-confirmation-button-container">
          <button className="link-btn" onClick={() => deleteBooking("cancel")}>
            Proceed with Cancellation
          </button>
          <button className="link-btn" onClick={closeModal}>
            Return to Dashboard
          </button>
        </div>
      </div>
    </section>
  );
};

export default DeleteConfirmModal;
