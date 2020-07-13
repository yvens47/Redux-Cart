import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
const LoginForm = props => {
  return (
    <form onSubmit={props.submit}>
      <div className="form-row mb-4">
        <div className="col">
          <Button
            onClick={() => {
              alert("clicked");
            }}
            variant="contained"
            color="primary"
          >
            <i class="fab fa-facebook-f mr-1"></i>Facebook
          </Button>
        </div>
        <div className="col">
          <Button
            onClick={() => props.loginWithGoogle()}
            variant="contained"
            color="default"
          >
            <i class="fab fa-google mr-1"></i>
            Google
          </Button>
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
            Sign in
          </button>
          <Link
            to="/register"
            className="btn btn-outline-secondary btn-block mt-1"
          >
            Create an account
          </Link>
        </div>
      </div>
      <hr />
      <div className="form-row">
        <div className="form-group col-md-12">
          <Link to="forgot">Forgot your password?</Link>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
