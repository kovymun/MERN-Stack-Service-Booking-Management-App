/**TAC SERVICE BOOKING APP SCHEDULE BOOKING FORM REACT COMPONENT FILE - NORMAL USER (SERVICE BOOKING AGENT)**/
/**KINDLY REFER TO THE END OF THIS DOCUMENT FOR ALL REFERENCES**/

import { v4 as uuidv4 } from "uuid";
import { Button, Form, Col, Row, FormSelect } from "react-bootstrap";

/*
TAC Service Booking App: Schedule new service booking form component:
This component affords the service booking agents (normal user) the ability to schedule new customer service bookings. The information fields to be entered by 
the user are the following:
* The Customer Name.
* The Customer Contact Details.
* The Vehicle Make, Model and Registration number.
* Service booking date and time.
* Service to be delivered to the customer.
*/

/* Array containing objects representing each service type offered by Tyler's Auto Clinic. */
const services = [
  { serviceType: "Car: Battery Testing" },
  {
    serviceType: "Car: Full Details Vehicle Safety Assessment",
  },
  { serviceType: "Wheels: Wheel Balancing and Alignment" },
  {
    serviceType: "Wheels: Tyre Puncture Assessment and Repairs",
  },
  { serviceType: "Engine: Oil and Filter Replacement" },
];

export default function ScheduleBookingFormUser({
  handleAddBooking,
  handleServiceType,
  handleDate,
  customerValue,
  numValue,
  vehMake,
  vehModel,
  vehReg,
  addBooking,
}) {
  return (
    <div className="schedule-booking-form">
      <h5 className="schedule-booking-title">Schedule Booking</h5>
      <Form onSubmit={addBooking}>
        {/* Form input for the user to enter the name of the customer */}
        <Form.Group as={Row}>
          <h6 className="customer">Customer:</h6>
          <Col lg="12">
            <Form.Control
              name="customer"
              value={customerValue}
              onChange={handleAddBooking}
              className="mb-2"
              placeholder="Enter Customer Name e.g. Calvin Harris"
            />
          </Col>
        </Form.Group>

        {/* Form input for the user to enter the contact number of the customer */}
        <Form.Group as={Row}>
          <h6 className="contact-number">Customer Contact Number:</h6>
          <Col lg="12">
            <Form.Control
              name="customerContactNumber"
              value={numValue}
              onChange={handleAddBooking}
              className="mb-2"
              placeholder="Enter Customer Contact No. e.g. 083XXXXXXX"
            />
          </Col>
        </Form.Group>

        {/* Form input for the user to enter the make/manufacturer of the vehicle */}
        <Form.Group as={Row}>
          <h6 className="make">Vehicle Make:</h6>
          <Col lg="12">
            <Form.Control
              name="vehicleMake"
              value={vehMake}
              onChange={handleAddBooking}
              className="mb-2"
              placeholder="Enter Vehicle Make e.g. Ford Mustang"
            />
          </Col>
        </Form.Group>

        {/* Form input for the user to enter the model year of the vehicle */}
        <Form.Group as={Row}>
          <h6 className="model">Vehicle Model:</h6>
          <Col lg="12">
            <Form.Control
              name="vehicleModel"
              value={vehModel}
              onChange={handleAddBooking}
              className="mb-2"
              placeholder="Enter Vehicle Model e.g. 2009"
              maxLength="4"
            />
          </Col>
        </Form.Group>

        {/* Form input for the user to enter the vehicle registration number */}
        <Form.Group as={Row}>
          <h6 className="registration">Vehicle Reg:</h6>
          <Col lg="12">
            <Form.Control
              name="vehicleReg"
              value={vehReg}
              onChange={handleAddBooking}
              className="mb-2"
              placeholder="Enter Vehicle Registration e.g. GP12375"
              maxLength="10"
            />
          </Col>
        </Form.Group>

        {/* date-time picker form to select the service booking date and time */}
        <Form.Group as={Row}>
          <h6 className="date">Date:</h6>
          <Col lg="12">
            <Form.Control
              name="date"
              type="datetime-local"
              onChange={handleDate}
              className="mb-2"
            />
          </Col>
        </Form.Group>

        {/* Form select options for the user to select the service to be delivered to the customer */}
        <Form.Group as={Row}>
          <h6 className="service">Service:</h6>
          <Col lg="12">
            <FormSelect onChange={handleServiceType}>
              {/* Map through services array to create a list of options to select from */}
              {services.map((service) => (
                <option key={uuidv4()} value={service.serviceType}>
                  {service.serviceType}
                </option>
              ))}
            </FormSelect>
          </Col>
        </Form.Group>
        <Button className="mt-3" variant="light" type="submit">
          SCHEDULE BOOKING
        </Button>
      </Form>
    </div>
  );
}

/**REFERENCES**/
/*
React-Bootstrap Components:
Utilized the React-Bootstrap Button, Form, Col, Row components as an interface, for the service booking agent (normal user) to enter the relevant information 
to schedule the booking.
Referenced the React-Bootstrap documentation website for this information. 
https://react-bootstrap.github.io/

maxLength attribute:
Researched and utilized the maxLength HTML attribute, to limit the number of characters the user can enter for a particular field.
Referenced the w3schools website for this information.
https://www.w3schools.com/tags/att_input_maxlength.asp
*/
