import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
const SignupForm = props => {
  return (
    <form onSubmit={props.submit}>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label for="inputEmail4">First Name</label>
          <input
            type="text"
            className="form-control"
            id="inputEmail4"
            placeholder="First name"
            name="firstname"
            onChange={props.change}
          />
        </div>
        <div className="form-group col-md-6">
          <label for="inputEmail4">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="inputEmail4"
            placeholder="last name"
            name="lastname"
            onChange={props.change}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-12">
          <label for="inputEmail4">Email</label>
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            placeholder="Email"
            name="email"
            onChange={props.change}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-12">
          <label for="inputPassword4">Password</label>
          <input
            name="password"
            onChange={props.change}
            type="password"
            className="form-control"
            id="inputPassword4"
            placeholder="Password"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group col-md-12">
          <button type="submit" className="btn btn-primary btn-block">
            Sign up
          </button>
        </div>
      </div>
      <hr />
      <div className="form-row">
        <div className="form-group col-md-12">
          Already have an account?<Link to="/login">signin</Link>
        </div>
      </div>
    </form>
  );
};

export default SignupForm;
