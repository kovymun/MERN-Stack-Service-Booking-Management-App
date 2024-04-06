/** TAC SERVICE BOOKING APP HELP MODAL JEST SNAPSHOT TEST FILE **/

import React from "react";
import renderer from "react-test-renderer";
import { AuthContextProvider } from "../context/AuthContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { Provider } from "react-redux";
import store from "../redux/store";
import HelpModal from "../components/modal-components/HelpModal";

/* Mock the useAuthContext hook */
jest.mock("../hooks/useAuthContext");

describe("Ensuring the Proper Rendering of the HelpModal Component", () => {
  it("displays as expected for authenticated users", () => {
    /* Mock authenticated user - service booking agent */
    const mockUser = {
      firstName: "Jay",
      lastName: "Shetty",
      email: "jay.shetty@.tac.co.za",
      token:
        "pqaJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsbFQiOiJKb2huIiwibGFzdE5hbWUiOiJEb2UiLCJlqSdapbCI6ImpvaG5kb2VAZXhhbXBsZS5jb20ifQ.1234567890abcdef",
    };

    /* Mock the behavior of custom useAuthContext hook - returning the relevant data of an authenticated user */
    useAuthContext.mockReturnValue({ user: mockUser });

    /* Render the component within the AuthContextProvider and Redux Providers */
    const wrapper = (
      <AuthContextProvider>
        <Provider store={store}>
          <HelpModal />
        </Provider>
      </AuthContextProvider>
    );

    /* Create a snapshot */
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
