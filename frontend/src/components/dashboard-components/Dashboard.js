/** TAC SERVICE BOOKING APP - DASHBOARD COMPONENT **/
/*
 * This component represents the dashboard section of the TAC Service Booking App.
 * It displays all information related to the service bookings, including functionality for searching, completing, cancelling and updating bookings.
 */

/* Importing the necessary dependencies */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchBookings } from "../../redux/bookingsSlice";
import { openHelpModal } from "../../redux/helpModalSlice";
import { openDcModal } from "../../redux/deleteConfirmModalSlice";
import { v4 as uuidv4 } from "uuid";
import columnDisplayHeadings from "../sub-component-files/displayHeadings";
import { useAuthContext } from "../../hooks/useAuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { toast } from "react-toastify";

const Dashboard = () => {
  /* Getting and destructuring/extracting user information from authentication context */
  const { user } = useAuthContext();
  const { firstName, lastName } = user;

  /* React state for search term and search result status */
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResultEmpty, setSearchResultEmpty] = useState(false);

  /* Initializing Redux toolkit dispatch hook and retrieving bookings global state from Redux toolkit store */
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.bookings.bookingsList);

  /* Function to trigger the display of the help menu modal */
  const showModal = () => {
    dispatch(openHelpModal());
  };

  /* Function to trigger the display of the delete confirmation modal - to effectively cancel or mark a booking as complete */
  const showDeleteConfirmModal = (id) => {
    dispatch(openDcModal(id));
  };

  /* Function to generate status flag CSS class names based on the current status value */
  const statusClass = (status) => {
    switch (status) {
      case "SCHEDULED":
        return "scheduled";
      case "IN-PROGRESS":
        return "in-progress";
      case "ON-HOLD":
        return "pending";
      case "WAITING FOR PARTS":
        return "waiting";
      default:
        return "";
    }
  };

  /* useEffect hook to fetch service bookings from the server */
  useEffect(() => {
    if (user) {
      const fetchData = async () => {
        const response = await fetch("/api/bookings", {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        const json = await response.json();

        if (response.ok) {
          // Handle search filtering if searchTerm is present
          let bookingsResponse = json.bookings;

          if (searchTerm) {
            const refinedSearchTerm = searchTerm.toLowerCase().trim();

            // Split the refined search term into individual search terms
            const searchItems = refinedSearchTerm.split(/\s+/).filter(Boolean);

            if (searchItems.length > 0) {
              const filteredData = bookingsResponse.filter((booking) => {
                const refinedBookingValues = Object.values(booking).filter(
                  (value) => typeof value === "string"
                );

                return searchItems.every((searchItem) =>
                  refinedBookingValues.some((value) =>
                    value.toLowerCase().includes(searchItem)
                  )
                );
              });

              // Check if the search result is empty
              if (filteredData.length === 0) {
                setSearchResultEmpty(true);
              } else {
                setSearchResultEmpty(false);
              }

              dispatch(fetchBookings(filteredData));
            } else {
              // If no search term, set bookings as is as stored in the redux toolkit store
              setSearchResultEmpty(false); // Reset searchResultEmpty to false
              dispatch(fetchBookings(bookingsResponse));
            }
          } else {
            // If search term is empty, set bookings as is and reset searchResultEmpty
            setSearchResultEmpty(false);
            dispatch(fetchBookings(bookingsResponse));
          }
        }
      };

      fetchData();
    }
  }, [user, dispatch, searchTerm]);

  /* Function to handle changes in the search input */
  const handleSearchTerm = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
  };

  /* Function to handle search when the user pastes a term into the search input field */
  const searchOnPaste = (event) => {
    event.preventDefault();
    const pastedSearchText = event.clipboardData.getData("text");
    setSearchTerm(pastedSearchText);
  };

  /* Function to handle the cancellation/completion of a booking */
  const deleteBooking = async (id, action) => {
    try {
      // Send a DELETE request to the server to remove the specified booking
      const response = await fetch(`/api/bookings/remove-booking/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      const json = await response.json();
      const bookingsData = json.bookings;
      const filteredBookings = bookingsData.filter(
        (booking) => booking._id !== id
      );

      if (response.ok) {
        dispatch(fetchBookings(filteredBookings));
        if (action === "cancel") {
          toast("Work order cancelled!", { type: "success" });
        } else if (action === "complete") {
          toast("Work order completed!", { type: "success" });
        }
      }
    } catch (error) {
      console.error("Error", error);
      if (action === "cancel") {
        toast("Cancellation unsuccessful!", { type: "error" });
      } else if (action === "complete") {
        toast("Mark work order complete unsuccessful!", { type: "error" });
      }
    }
  };

  return (
    <section className="dashboard-display-section">
      <div className="title-container">
        <h2 className="title">Booking Dashboard</h2>
      </div>
      <div className="nav-link-container">
        <Link to="/schedule-booking" className="link-btn">
          <FontAwesomeIcon icon={faPlusCircle} />
          Schedule Booking
        </Link>
        <button className="link-btn" onClick={showModal}>
          <FontAwesomeIcon icon={faInfoCircle} />
          Help
        </button>
      </div>

      <div className="data-available">
        <form className="dashboard-search-bar-container">
          <input
            type="text"
            name="searchTerm"
            placeholder="Search Booking"
            value={searchTerm}
            onChange={handleSearchTerm}
            onPaste={searchOnPaste}
          />
        </form>
        <div className="dashboard-display-container">
          {searchResultEmpty ? (
            <div className="no-data-message">
              <p>No matching bookings found!</p>
            </div>
          ) : bookings.length === 0 ? (
            <div className="no-data-message">
              <p>No Bookings Scheduled!</p>
            </div>
          ) : (
            <div className="dashboard-display-table">
              <table>
                <thead>
                  <tr>
                    {columnDisplayHeadings.map((heading) => (
                      <th key={uuidv4()}>{heading}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking) => {
                    return (
                      <tr key={uuidv4()}>
                        <td>{booking._id}</td>
                        <td>
                          <span
                            className={`status-flag status-${statusClass(
                              booking.status
                            )}`}
                          >
                            {booking.status}
                          </span>
                        </td>
                        <td>{booking.customerFirstName}</td>
                        <td>{booking.customerLastName}</td>
                        <td>{booking.customerEmail}</td>
                        <td>{booking.customerContactNumber}</td>
                        <td>{booking.vehicleMake}</td>
                        <td>{booking.vehicleModel}</td>
                        <td>{booking.vehicleReg}</td>
                        <td>{booking.serviceOption}</td>
                        <td>{booking.bookingDate}</td>
                        <td className="add-info-display">{booking.addInfo}</td>
                        <td>
                          {firstName} {lastName}
                        </td>
                        <td className="action-items">
                          <div className="delete-icon-container">
                            <ReactTooltip
                              place="top"
                              content="Cancel"
                              anchorId={`delete-icon-${booking._id}`}
                              variant="info"
                            ></ReactTooltip>
                            <CloseIcon
                              id={`delete-icon-${booking._id}`}
                              className="icon delete-icon"
                              onClick={() => {
                                showDeleteConfirmModal(booking._id);
                              }}
                            />
                          </div>
                          <div className="update-icon-container">
                            <ReactTooltip
                              place="top"
                              content="Update"
                              anchorId={`update-icon-${booking._id}`}
                              variant="info"
                            ></ReactTooltip>
                            <Link to={`/update-booking/${booking._id}`}>
                              <EditIcon
                                id={`update-icon-${booking._id}`}
                                className="icon update-icon"
                              />
                            </Link>
                          </div>
                          <div className="complete-icon-container">
                            <ReactTooltip
                              place="top"
                              content="Complete"
                              anchorId={`complete-icon-${booking._id}`}
                              variant="info"
                            ></ReactTooltip>
                            <DoneIcon
                              id={`complete-icon-${booking._id}`}
                              className="icon complete-icon"
                              onClick={() => {
                                deleteBooking(booking._id, "complete");
                              }}
                            />
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
