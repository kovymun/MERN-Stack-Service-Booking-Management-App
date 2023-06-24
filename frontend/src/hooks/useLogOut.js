/**TAC SERVICE BOOKING APP - CUSTOM REACT HOOK FOR USER LOGOUT**/
/**KINDLY REFER TO THE END OF THIS DOCUMENT FOR ALL REFERENCES**/

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

/**REFERENCES**/
/*
Referenced a YouTube video for more information on how to apply Authentication with JWT to this MERN stack application.
"MERN Authentication Tutorial." YouTube uploaded by The Net Ninja, 19 July 2022, <https://www.youtube.com/watch?v=WsRBmwNkv3Q&list=PL4cUxeGkcC9g8OhpOZxNdhXggFz2lOuCT>
*/
