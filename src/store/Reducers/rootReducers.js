import productReducer from "./ProductReducer";

import { cartReducer } from "./cartReducers";
import { auctionReducer } from "./aution-reducers";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

import { combineReducers } from "redux";
import authReducer from "./authReducer";

export default combineReducers({
  products: productReducer,
  cart: cartReducer,
  auction: auctionReducer,
  auth: authReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});
