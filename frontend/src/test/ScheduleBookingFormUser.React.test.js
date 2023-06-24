/**TAC SERVICE BOOKING APP SCHEDULE BOOKING COMPONENT JEST SNAPSHOT TEST FILE**/
/**KINDLY REFER TO THE END OF THIS DOCUMENT FOR ALL REFERENCES**/

import React from "react";
import renderer from "react-test-renderer";
import ScheduleBookingFormUser from "../components/home-page-components/ScheduleBookingFormUser";

it("ScheduleBookingFormUser component renders correctly", () => {
  const tree = renderer.create(<ScheduleBookingFormUser />).toJSON();
  expect(tree).toMatchSnapshot();
});

/**REFERENCES**/
/*
JEST Snapshot testing:
Referenced the JEST testing framework website for information on how to perform snapshot testing on a component.
https://jestjs.io/docs/snapshot-testing
*/
