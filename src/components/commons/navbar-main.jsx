import React from "react";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";

import { connect } from "react-redux";
import { signOut } from "../../store/actionsCreator/auth";

import { Link, withRouter } from "react-router-dom";
const NavbarMain = props => {
  const signOut = e => {
    e.preventDefault();

    props.signOut();
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-light-primary">
      <Link className="navbar-brand" href="#">
        Navbar
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/store">
              Store
            </Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/store/cart">
              <IconButton
                containerElement={<Link to="/login" />}
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Badge badgeContent={props.cart.items.length} color="secondary">
                  <ShoppingCartIcon href="/store/cart" />
                </Badge>
              </IconButton>
            </Link>
          </li>
          {!props.uid && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Signin
                </Link>
              </li>
            </>
          )}

          {props.uid && (
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Welcome,User
              </Link>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="navbarDropdown"
              >
                <Link className="dropdown-item" to="#">
                  Action
                </Link>
                <div class="dropdown-divider"></div>

                <Link className="dropdown-item" onClick={signOut} to="/signout">
                  <i class="fas fa-power-off mr-1"></i>signout
                </Link>
              </div>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    signOut: credentials => dispatch(signOut())
  };
};

const mapStateToProps = state => {
  const { uid, displayName } = state.firebase.auth;
  return {
    uid,
    displayName
  };
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NavbarMain)
);
