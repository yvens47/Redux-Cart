import React, { Component } from "react";

import "./auth.css";
import SignupForm from "./register-form";
import firebase from "../../utils/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { signUp } from "../../store/actionsCreator/auth";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Register extends Component {
  state = {
    account: {
      email: "",
      password: "",
      firstname:"",
      lastname:""


    }
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.signUp(this.state.account);
  };

  handleChange = ({ currentTarget }) => {
    const account = { ...this.state.account };
    account[currentTarget.name] = currentTarget.value;
    this.setState({ account });
  };
  render() {
    // redirect if uid exist
    if (this.props.uid) return <Redirect to="/" />;
    return (
      <div className="login_wrapper  pt-3">
        <div className="container">
          <ToastContainer />
          <div className="row justify-content-center ">
            <div className="col-5 ">
              <div className="login mt-3 p-4">
                <h2 className="text-center mb-5">Create an account</h2>

                <SignupForm
                  submit={this.handleSubmit}
                  change={this.handleChange}
                  loginWithGoogle={this.loginWithGoogle}
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
    signUp: credentials => dispatch(signUp(credentials))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
