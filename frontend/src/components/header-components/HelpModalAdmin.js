/**TAC SERVICE BOOKING APP HELP GUIDELINE MODAL COMPONENT - ADMIN USER**/
/**KINDLY REFER TO THE END OF THIS DOCUMENT FOR ALL REFERENCES**/

import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

/* 
This component consists of a React-bootstrap Modal Component, which renders guidelines for the manager of the service booking department (admin user)
to use and navigate the TAC Service Booking App. 
*/
export default function HelpModalAdmin() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="light" onClick={handleShow}>
        Help
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tyler's Auto Clinic Service Booking App</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            This app allows the service booking department manager to schedule,
            track, update, and cancel service bookings.
          </p>

          {/* Scheduling a new Service Booking instructions*/}
          <Modal.Title>How to Schedule a Booking:</Modal.Title>
          <p>
            On the right hand side of your home-page, you will find a schedule
            booking form. In order to schedule a new booking, follow these
            guidelines:
          </p>
          <ul>
            <li>
              Enter the customer name and contact number, vehicle make, model
              and registration number, the service date and time, and the
              service to be delivered to the customer.
            </li>
            <li>
              To complete the scheduling of the new booking, click on the
              "SCHEDULE BOOKING" button.
            </li>
            <li>
              The new service booking will be reflected on your home page
              dashboard display.
            </li>
          </ul>

          {/* Updating a Service Booking Instructions */}
          <Modal.Title>How to Update a Booking:</Modal.Title>
          <p>
            In order to update a booking on your app, follow these Guidelines:
          </p>
          <ul>
            <li>
              Scroll to the individual booking, on your home page dashboard
              display, you want to update.
            </li>
            <li>
              Within the booking display, click on "UPDATE" button. You will be
              re-directed to the Update Booking Page.
            </li>
            <li>
              Enter the booking ID of the booking you want to update. This ID
              can be retrieved from your home page dashboard display or from the
              URL while on the Update Booking Page.
            </li>
            <li>
              Enter the updated customer name and contact number, vehicle make,
              model and registration number, the service date and time, and the
              service to be delivered to the customer.
            </li>
            <li>
              To complete the updating of your booking, click on the "UPDATE
              BOOKING" button.
            </li>
            <li>You will re-directed to the home page dashboard display.</li>
          </ul>

          {/* Cancelling/Deleting a Booking Instructions */}
          <Modal.Title>How to Cancel a Booking:</Modal.Title>
          <p>In order to cancel a service booking, follow these Guidelines:</p>
          <ul>
            <li>
              Scroll to the individual booking, on your home page dashboard
              display, you want to remove.
            </li>
            <li>
              Within the booking display, click on "CANCEL" button. The booking
              will then be removed from your home page dashboard display.
            </li>
          </ul>
        </Modal.Body>
      </Modal>
    </div>
  );
}

/**REFERENCES**/
/*
React-Bootstrap Modal Component:
Researched and utilized the React-bootstrap Modal component to hold guidelines for the admin user to use and navigate the TAC service booking App.
Referenced the React-Bootstrap website for this information.
https://react-bootstrap.github.io/components/modal/#live-demo
*/
