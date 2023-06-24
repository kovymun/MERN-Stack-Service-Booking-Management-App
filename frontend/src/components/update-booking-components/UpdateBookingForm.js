/**TAC SERVICE BOOKING APP UPDATE BOOKING INPUT FORM COMPONENT**/
/**KINDLY REFER TO THE END OF THIS DOCUMENT FOR ALL REFERENCES**/

import { v4 as uuidv4 } from "uuid";
import { Button, Form, Col, Row, FormSelect } from "react-bootstrap";

/*Array containing objects representing each service type offered by Tyler's Auto Clinic*/
const services = [
  { serviceType: "Car: Battery Testing" },
  { serviceType: "Car: Full Details Vehicle Safety Assessment" },
  { serviceType: "Wheels: Wheel Balancing and Alignment" },
  { serviceType: "Wheels: Tyre Puncture Assessment and Repairs" },
  { serviceType: "Engine: Oil and Filter Replacement" },
];

export default function UpdateBookingForm({
  idValue,
  customerUpdate,
  numUpdate,
  vehMakeUpdate,
  vehModelUpdate,
  vehRegUpdate,
  handleDate,
  handleUpdateBooking,
  handleService,
  updatingBooking,
}) {
  return (
    <div className="update-booking-form">
      <h5 className="update-booking-title">Update Booking</h5>
      <Form onSubmit={updatingBooking}>
        {/* Form input for the user to enter the booking ID*/}
        <Form.Group as={Row}>
          <h6 className="booking-id">Booking ID:</h6>
          <Col lg="12">
            <Form.Control
              name="id"
              value={idValue}
              onChange={handleUpdateBooking}
              className="mb-2"
              placeholder="Enter Booking ID"
            />
          </Col>
        </Form.Group>

        {/* Form input for the user to enter the updated name of the customer */}
        <Form.Group as={Row}>
          <h6 className="customer">Customer:</h6>
          <Col lg="12">
            <Form.Control
              name="customer"
              value={customerUpdate}
              onChange={handleUpdateBooking}
              className="mb-2"
              placeholder="Enter Customer Name e.g. Calvin Harris"
            />
          </Col>
        </Form.Group>

        {/* Form input for the user to enter the updated contact number of the customer */}
        <Form.Group as={Row}>
          <h6 className="contact-number">Customer Contact Number:</h6>
          <Col lg="12">
            <Form.Control
              name="customerContactNumber"
              value={numUpdate}
              onChange={handleUpdateBooking}
              className="mb-2"
              placeholder="Enter Customer Contact No. e.g. 083XXXXXXX"
            />
          </Col>
        </Form.Group>

        {/* Form input for the user to enter the updated make/manufacturer of the vehicle */}
        <Form.Group as={Row}>
          <h6 className="make">Vehicle Make:</h6>
          <Col lg="12">
            <Form.Control
              name="vehicleMake"
              value={vehMakeUpdate}
              onChange={handleUpdateBooking}
              className="mb-2"
              placeholder="Enter Vehicle Make e.g. Ford Mustang"
            />
          </Col>
        </Form.Group>

        {/* Form input for the user to enter the updated model year of the vehicle */}
        <Form.Group as={Row}>
          <h6 className="model">Vehicle Model:</h6>
          <Col lg="12">
            <Form.Control
              name="vehicleModel"
              value={vehModelUpdate}
              onChange={handleUpdateBooking}
              className="mb-2"
              placeholder="Enter Vehicle Model e.g. 2009"
              maxLength="4"
            />
          </Col>
        </Form.Group>

        {/* Form input for the user to enter the updated vehicle registration number */}
        <Form.Group as={Row}>
          <h6 className="registration">Vehicle Reg:</h6>
          <Col lg="12">
            <Form.Control
              name="vehicleReg"
              value={vehRegUpdate}
              onChange={handleUpdateBooking}
              className="mb-2"
              placeholder="Enter Vehicle Registration e.g. GP12375"
              maxLength="10"
            />
          </Col>
        </Form.Group>

        {/* date-time picker form to select the updated service booking date and time */}
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

        {/* Form select options for the user to select updated the service to be delivered to the customer */}
        <Form.Group as={Row}>
          <h6 className="service">Service:</h6>
          <Col lg="12">
            <FormSelect onChange={handleService}>
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
          UPDATE BOOKING
        </Button>
      </Form>
    </div>
  );
}

/**REFERENCES**/
/*
React-Bootstrap Components: 
Utilized the React-Bootstrap Button, Form, Col, Row components as an interface, for the admin user to update the service booking details.
Referenced the React-Bootstrap documentation website for this information. 
https://react-bootstrap.github.io/

maxLength attribute:
Researched and utilized the maxLength HTML attribute, to limit the number of characters the admin user can enter into selected input fields.
Referenced the w3schools website for this information.
https://www.w3schools.com/tags/att_input_maxlength.asp
*/
