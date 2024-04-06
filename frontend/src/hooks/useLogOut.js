/** TAC SERVICE BOOKING APP - CUSTOM REACT HOOK FOR USER LOGOUT **/

import { useAuthContext } from "./useAuthContext";

export const useLogOut = () => {
  const { dispatch } = useAuthContext();

  const logOut = () => {
    // removing the user item from local storage when user is logged out.
    localStorage.removeItem("user");

    // dispatch logOut action - authContext.js.
    dispatch({ type: "LOGOUT" });
  };

  return { logOut };
};
