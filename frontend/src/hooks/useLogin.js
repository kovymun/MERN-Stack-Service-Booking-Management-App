/**TAC SERVICE BOOKING APP - CUSTOM REACT HOOK FOR USER LOGIN**/
/**KINDLY REFER TO THE END OF THIS DOCUMENT FOR ALL REFERENCES**/

import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      // save the user to local storage if user is logged in.
      localStorage.setItem("user", JSON.stringify(json));

      // update the auth context global state.
      dispatch({ type: "LOGIN", payload: json });

      // update loading state
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};

/**REFERENCES**/
/*
Referenced a YouTube video for more information on how to apply Authentication with JWT to this MERN stack application.
"MERN Authentication Tutorial." YouTube uploaded by The Net Ninja, 19 July 2022, <https://www.youtube.com/watch?v=WsRBmwNkv3Q&list=PL4cUxeGkcC9g8OhpOZxNdhXggFz2lOuCT>
*/
