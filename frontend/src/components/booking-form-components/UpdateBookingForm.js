/** TAC SERVICE BOOKING APP - UPDATE BOOKING FORM COMPONENT **/
/*
 * This component represents the form for updating a service booking in the TAC Service Booking App.
 * Users can modify booking details.
 */

/* Importing the necessary dependencies */
import { Link, useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useAuthContext } from "../../hooks/useAuthContext";
import { fetchBookings } from "../../redux/bookingsSlice";
import { openHelpModal } from "../../redux/helpModalSlice";
import services from "../sub-component-files/services";
import statusFlags from "../sub-component-files/statusFlags";
import { v4 as uuid4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleLeft,
  faInfoCircle,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import * as moment from "moment";

const UpdateBookingForm = () => {
  // Destructuring the 'id' parameter from the URL using React Router's useParams hook.
  const { id } = useParams();

  /* Getting and destructuring/extracting user information from authentication context */
  const { user } = useAuthContext();

  /* Initializing Redux toolkit dispatch hook */
  const dispatch = useDispatch();

  /* Destructuring the react-hook-form library useForm hook for form handling and validation */
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: async () => {
      const response = await fetch(`/api/bookings/${id}`, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const json = await response.json();

      return {
        _id: json.booking._id,
        status: json.booking.status,
        customerFirstName: json.booking.customerFirstName,
        customerLastName: json.booking.customerLastName,
        customerEmail: json.booking.customerEmail,
        customerContactNumber: json.booking.customerContactNumber,
        vehicleMake: json.booking.vehicleMake,
        vehicleModel: json.booking.vehicleModel,
        vehicleReg: json.booking.vehicleReg,
        serviceOption: json.booking.serviceOption,
        bookingDate: moment(
          json.booking.bookingDate,
          "dddd, MMMM D, YYYY HH:mmA"
        ).format("YYYY-MM-DDTHH:mm"),
        addInfo: json.booking.addInfo,
      };
    },
  });

  /* Regular expression pattern variables for email, mobile, and calendar year validation */
  const emailRegexPattern = new RegExp(
    /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
  );
  const mobileRegexPattern = new RegExp(/^[0-9]{10}$/);
  const calenderYearRegexPattern = new RegExp(/^[1-9]\d{3}$/);

  /* Function to validate the entered vehicle model year as a 4-digit calendar year, ensuring it falls within the range from 1980 to the current calendar year. */
  const isValidCalYear = (year) => {
    const currentCalYear = new Date().getFullYear();
    const minCalYear = 1980;
    const maxCalYear = currentCalYear;

    return (
      calenderYearRegexPattern.test(year) &&
      year >= minCalYear &&
      year <= maxCalYear
    );
  };

  /* Function to trigger the display of the help menu modal */
  const showModal = () => {
    dispatch(openHelpModal());
  };

  /* Navigation hook for redirecting to dashboard after booking submission */
  const navigate = useNavigate();

  /* Function to format and update an existing booking */
  const updateBooking = async (updatedBooking) => {
    // Formatting booking date using moment.js library
    updatedBooking._id = id;
    updatedBooking.bookingDate = moment(updatedBooking.bookingDate).format(
      "dddd, MMMM D, YYYY HH:mmA"
    );
    try {
      const response = await fetch(`/api/bookings/update-booking/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify(updatedBooking),
      });

      const json = await response.json();

      if (response.ok) {
        dispatch(fetchBookings(json.bookings));
        toast("Work order updated!", { type: "success" });
      }
      reset();
      navigate("/");
    } catch (error) {
      console.error("Error updating work order:", error);
    }
  };

  return (
    <section className="booking-form-section">
      <div className="title-container">
        <h2 className="title">Update Booking</h2>
      </div>
      <div className="nav-link-container">
        <Link to="/" className="link-btn">
          <FontAwesomeIcon icon={faArrowCircleLeft} />
          Booking Dashboard
        </Link>
        <button className="link-btn" onClick={showModal}>
          <FontAwesomeIcon icon={faInfoCircle} />
          Help
        </button>
      </div>
      <div className="form-container">
        <div className="booking-form-container">
          <form
            className="booking-form"
            onSubmit={handleSubmit(updateBooking)}
            noValidate
          >
            {/* <h1 className="form-title">Update Booking</h1> */}
            <div className="booking-form-group-container">
              {/* Work Order No./Booking ID information */}
              <div className="booking-form-group">
                <h3 className="work-order-num">Work Order Number</h3>
                <input
                  type="text"
                  {...register("_id", {
                    disabled: true,
                  })}
                />
              </div>
            </div>

            {/* Booking status Drop-Down Field */}
            <div className="booking-form-group status-drop-down-menu">
              <label>Status:</label>
              <select {...register("status")}>
                <option value="" disabled>
                  STATUS*
                </option>
                {statusFlags.map((flag) => (
                  <option key={uuid4()} value={flag}>
                    {flag}
                  </option>
                ))}
              </select>

              {/* Drop-Down Arrow Icon */}
              <FontAwesomeIcon
                className="status-custom-drop-down-arrow"
                icon={faAngleDown}
              />
            </div>

            {/* Updated Customer Information Details */}

            {/* Updated Customer First Name Field */}
            <div className="booking-form-group-container">
              <h3>Customer Information</h3>
              <div className="booking-form-group">
                <label>Customer Name:</label>
                <input
                  type="text"
                  placeholder="Enter customer's first name (e.g., Kelvin)"
                  {...register("customerFirstName", {
                    required: {
                      value: true,
                      message: "Customer's first name is required",
                    },
                  })}
                />
                {errors.customerFirstName && (
                  <p className="error-message">
                    {errors.customerFirstName.message}
                  </p>
                )}
              </div>

              {/* Updated Customer Last Name Field */}
              <div className="booking-form-group">
                <label>Customer Last Name:</label>
                <input
                  type="text"
                  placeholder="Enter customer's last name (e.g., Harris)"
                  {...register("customerLastName", {
                    required: {
                      value: true,
                      message: "Customer's last name is required",
                    },
                  })}
                />
                {errors.customerLastName && (
                  <p className="error-message">
                    {errors.customerLastName.message}
                  </p>
                )}
              </div>

              {/* Updated Customer Email Address Field */}
              <div className="booking-form-group">
                <label>Customer Email Address:</label>
                <input
                  type="text"
                  placeholder="Enter customer's email address (e.g., kelvin@company.co.za)"
                  {...register("customerEmail", {
                    required: {
                      value: true,
                      message: "Customer's email address is required",
                    },
                    pattern: {
                      value: emailRegexPattern,
                      message: "Please enter a valid email Address",
                    },
                  })}
                />
                {errors.customerEmail && (
                  <p className="error-message">
                    {errors.customerEmail.message}
                  </p>
                )}
              </div>

              {/* Updated Customer Mobile Contact Number Field */}
              <div className="booking-form-group">
                <label>Customer Contact Number:</label>
                <input
                  type="text"
                  placeholder="Enter customer's mobile contact number (e.g., 072XXXXXXX)"
                  maxLength="10"
                  {...register("customerContactNumber", {
                    required: {
                      value: true,
                      message: "Customer's mobile contact number is required",
                    },
                    pattern: {
                      value: mobileRegexPattern,
                      message: "Please enter a valid mobile number",
                    },
                    minLength: {
                      value: 10,
                      message: "Mobile number should be at least 10 digits",
                    },
                  })}
                />
                {errors.customerContactNumber && (
                  <p className="error-message">
                    {errors.customerContactNumber.message}
                  </p>
                )}
              </div>
            </div>

            {/* Updated Vehicle Details */}
            <div className="booking-form-group-container">
              <h3>Vehicle Details</h3>

              {/* Updated Vehicle Make Field */}
              <div className="booking-form-group">
                <label>Vehicle Make:</label>
                <input
                  type="text"
                  placeholder="Enter vehicle make (e.g., Toyota Yaris)"
                  {...register("vehicleMake", {
                    required: {
                      value: true,
                      message: "Vehicle make is required",
                    },
                  })}
                />
                {errors.vehicleMake && (
                  <p className="error-message">{errors.vehicleMake.message}</p>
                )}
              </div>

              {/* Updated Vehicle Model Year Field */}
              <div className="booking-form-group">
                <label>Vehicle Model:</label>
                <input
                  type="text"
                  placeholder="Enter model year (1980 or newer, e.g., 2010)"
                  maxLength="4"
                  {...register("vehicleModel", {
                    required: {
                      value: true,
                      message: "Vehicle model year is required",
                    },
                    minLength: {
                      value: 4,
                      message:
                        "Vehicle model year is too short. Please enter a valid 4 digit year value",
                    },
                    validate: {
                      validCalYear: (year) =>
                        isValidCalYear(year) ||
                        "Please enter a valid 4 digit calender model year",
                    },
                  })}
                />
                {errors.vehicleModel && (
                  <p className="error-message">{errors.vehicleModel.message}</p>
                )}
              </div>

              {/* Updated Vehicle Registration Number Field */}
              <div className="booking-form-group">
                <label>Vehicle Registration:</label>
                <input
                  type="text"
                  placeholder="Enter vehicle registration number (e.g., GP67124)"
                  {...register("vehicleReg", {
                    required: {
                      value: true,
                      message: "Vehicle registration number is required",
                    },
                  })}
                />
                {errors.vehicleReg && (
                  <p className="error-message">{errors.vehicleReg.message}</p>
                )}
              </div>
            </div>

            {/* Updated Service Details */}
            <div className="booking-form-group-container">
              <h3>Service Details</h3>

              {/* Service Option Drop-Down Field */}
              <div className="booking-form-group service-drop-down-menu">
                <select
                  {...register("serviceOption", {
                    required: {
                      value: true,
                      message: "Service option is required",
                    },
                  })}
                >
                  <option value="" disabled>
                    Service Option*
                  </option>
                  {services.map((service) => (
                    <option key={uuid4()} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                {errors.serviceOption && (
                  <p className="error-message">
                    {errors.serviceOption.message}
                  </p>
                )}
                {/* Drop-Down Arrow Icon */}
                <FontAwesomeIcon
                  className="custom-drop-down-arrow"
                  icon={faAngleDown}
                />
              </div>

              {/* Service Booking Date - Date/Time Picker */}
              <div className="booking-form-group">
                <label>Service Date:</label>
                <input
                  type="datetime-local"
                  {...register("bookingDate", {
                    required: {
                      value: true,
                      message: "Service booking date is required",
                    },
                  })}
                />
                {errors.bookingDate && (
                  <p className="error-message">{errors.bookingDate.message}</p>
                )}
              </div>
            </div>

            {/* Additional Information related to the service booking */}
            <div className="booking-form-group-container">
              <div className="booking-form-group">
                <textarea
                  rows={6}
                  cols={55}
                  placeholder="Additional Information.."
                  {...register("addInfo")}
                ></textarea>
              </div>
            </div>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "UPDATING BOOKING..." : "UPDATE BOOKING"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UpdateBookingForm;
