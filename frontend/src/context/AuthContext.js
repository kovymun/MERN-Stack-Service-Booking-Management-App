/** TAC SERVICE BOOKING APP - REACT AUTH CONTEXT FILE **/
/*
 * React Context API used to manage global state for user authentication and authorization in the TAC Service Booking app.
 */

import { createContext, useReducer, useEffect } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    }
  }, []);

  /* Check if running in a test environment */
  const isTestEnvRunning = process.env.NODE_TEST_ENV === "test";

  /* Log the auth context state only if not in a test environment */
  !isTestEnvRunning && console.log("AuthContext state:", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
