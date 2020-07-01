import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter as Router } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Elements stripe={stripePromise}>
          <App />
        </Elements>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
