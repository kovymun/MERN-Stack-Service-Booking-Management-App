/**TAC SERVICE BOOKING APP REACTJS UNIT TEST FILE**/
/**KINDLY REFER TO THE END OF THIS DOCUMENT FOR ALL REFERENCES**/

import { shallow } from "enzyme";
import { configure } from "enzyme";
import { Modal } from "react-bootstrap";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import HelpModalAdmin from "../components/header-components/HelpModalAdmin";

configure({ adapter: new Adapter() });

/*
Using Enzyme testing library, unit testing of our front-end ReactJS application will apply the following test case scenarios:
Test Case 1: We verify if the TAC Service Booking App HelpModalAdmin component renders without crashing.
Test Case 2: We verify if all instruction text is configured and rendered within the HelpModalAdmin component.
*/

describe("Verifying render of the HelpModalAdmin component, and if instruction text is configured and rendered within the HelpModalAdmin component", () => {
  it("Renders the HelpModalAdmin component without crashing", () => {
    shallow(<HelpModalAdmin />);
  });

  it("Tests if all instruction text is configured and rendered within the HelpModalAdmin component", () => {
    const wrapper = shallow(<HelpModalAdmin />);
    const welcome = (
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
            Enter the customer name and contact number, vehicle make, model and
            registration number, the service date and time, and the service to
            be delivered to the customer.
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
            Enter the booking ID of the booking you want to update. This ID can
            be retrieved from your home page dashboard display or from the URL
            while on the Update Booking Page.
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
    );
    expect(wrapper.contains(welcome)).toEqual(true);
  });
});

/**REFERENCES**/
/*
Enzyme Testing Library:
Researched and utilized additional information as documented on the "Smashing Magazine" website on ReactJS unit testing using "Enzyme" library.
Referenced the web link below for this information.
https://www.smashingmagazine.com/2020/06/practical-guide-testing-react-applications-jest/
*/
