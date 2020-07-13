import firebase from "../../utils/firebase";
import { toast } from "react-toastify";
export const signIn = credentials => {
  return (dispatch, getState, getFirebase) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => dispatch({ type: "SIGN_IN" }))
      .catch(function(error) {
        // Handle Errors here.
        dispatch({ type: "SIGN_IN_ERR",payload:error.message });
      });
  };
};
export const signInWithGoogle = provider => {
  return (dispatch, getState, getFirebase) => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        var token = result.credential.accessToken;

        var user = result.user;
        dispatch({ type: "SIGN_IN_GOOGLE" });
        // ...
      })
      .catch(function(error) {
        // Handle Errors here.
        dispatch({ type: "SIGN_IN_GOOGLE_ERROR" });
      });
  };
};

export const signOut = credentials => {
  return (dispatch, getState, getFirebase) => {
    firebase
      .auth()
      .signOut()
      .then(function() {
        // Sign-out successful.
        dispatch({ type: "SIGN_OUT" });
      })
      .catch(function(error) {
        // An error happened.
      });
  };
};

export const signUp = credentials => {
  return (dispatch, getState, getFirebase) => {
    firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password).
    then(()=>dispatch({type:"SIGN_UP"})).catch((error)=>dispatch({type:"SIGN_UP_ERROR",payload: error.message}))
  }
};
