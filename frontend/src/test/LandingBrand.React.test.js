/** TAC SERVICE BOOKING APP LANDING BRAND UNIT TEST FILE **/

import React from "react";
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import LandingBrand from "../components/landing-page-components/LandingBrand";

configure({ adapter: new Adapter() });

/* Mock FontAwesomeIcon to prevent errors during testing */
jest.mock("@fortawesome/react-fontawesome", () => ({
  FontAwesomeIcon: () => <div>MockFontAwesomeIcon</div>,
}));

/*
Using the Enzyme testing library, unit testing of our front-end ReactJS application will apply the following test case scenarios:
Test Case 1: Verify that the Landing Brand renders correctly without crashing.
Test Case 2: Verify that the text content of the element with the class "brand-title" contains title "Tyler's Auto Clinic".
Test Case 3: Verify that the text content of the element with the class "slogan" contains the slogan, which is "Your Trusted Partner for Car Care Solutions!".
Test Case 4: Verifying that there is exactly one element with the class "title" within the component.
*/

describe("LandingBrand Component", () => {
  it("Renders the LandingBrand component without crashing", () => {
    shallow(<LandingBrand />);
  });

  it("Verifying the correct brand title and slogan are rendered", () => {
    const wrapper = shallow(<LandingBrand />);
    expect(wrapper.find(".brand-title").text()).toContain(
      "Tyler's Auto Clinic"
    );
    expect(wrapper.find(".slogan").text()).toContain(
      "Your Trusted Partner for Car Care Solutions!"
    );
    expect(wrapper.find(".title")).toHaveLength(1);
  });
});
