/** TAC Service Booking app is styled using CSS. **/
import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { AuthContextProvider } from "./context/AuthContext";
import store from "./redux/store";
import { Provider } from "react-redux";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <Provider store={store}>
      <App />
      <ToastContainer />
    </Provider>
  </AuthContextProvider>
);
