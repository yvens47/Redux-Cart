import React, { Component } from "react";

import "./auth.css";
import LoginForm from "./login-form";
import firebase from "../../utils/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  signIn,
  signInWithGoogle,
  signUp
} from "../../store/actionsCreator/auth";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
class Login extends Component {
  state = {
    account: {
      email: "",
      password: ""
    }
  };
  loginWithGoogle = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
    alert("login With Google");
    this.props.signInWithGoogle(provider);
  };
  signUp() {
          alert("singed up")
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state.account);
  };

  handleChange = ({ currentTarget }) => {
    const account = { ...this.state.account };
    account[currentTarget.name] = currentTarget.value;
    this.setState({ account });
  };
  render() {
    // redirect if uid exist
    if (this.props.uid) return <Redirect to="/store" />;
    return (
      <div className="login_wrapper  pt-3">
        <div className="container">
          <ToastContainer />
          <div className="row justify-content-center ">
            <div className="col-5 ">
              <div className="login mt-3 p-4">
                <h2 className="text-center mb-5">Sign In With</h2>

                <LoginForm
                  submit={this.handleSubmit}
                  change={this.handleChange}
                  loginWithGoogle={this.loginWithGoogle}
                  signup={this.signUp}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  const { uid } = state.firebase.auth;
  return { uid };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: credentials => dispatch(signIn(credentials)),
    signInWithGoogle: provider => dispatch(signInWithGoogle(provider))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
