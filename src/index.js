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
import firebase from "./utils/firebase";
import {
  ReactReduxFirebaseProvider
  // firebaseReducer
} from "react-redux-firebase";

import TestComponents from "./testComponents";

const stripePromise = loadStripe(
  "pk_test_51H3831HWpLQtVGqf7Z6tUHV0Gmm75IjNCWmbelzrIcCdnjJJorzNpiUazvsxqFGIIHY07Np3I70oK2DDdjaXHeWx00ShGU8FNf"
);

const rrfConfig = {
  userProfile: "users"
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  // enableClaims: true // Get custom claims along with the profile
};
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch
  // createFirestoreInstance // <- needed if using firestore
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Elements stripe={stripePromise}>
          <ReactReduxFirebaseProvider {...rrfProps}>
            <App />
            {/* <TestComponents /> */}
          </ReactReduxFirebaseProvider>
        </Elements>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
