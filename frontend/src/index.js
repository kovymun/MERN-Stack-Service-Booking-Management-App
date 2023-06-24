/*TAC Service Booking app is styled using CSS, Bootstrap V5 and React-Bootstrap library.*/
import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContextProvider } from "./context/AuthContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);
