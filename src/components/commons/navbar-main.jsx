import React, { Component } from "react";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";

import { Link, withRouter } from "react-router-dom";
const NavbarMain = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-light-primary">
      {props.match.path == "/store" && (
        <Link
          onClick={props.show}
          onAnimationEnd={() => this.setState({ fade: false })}
          className="navbar-brand"
          href="#"
        >
          <i class="fas fa-bars"></i>
        </Link>
      )}
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
          <li className="nav-item">
            <Link to="/account">
              <IconButton
                aria-label="account of current user"
                aria-controls="primary-search-account-menu"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Link>
          </li>
          {/* <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {" "}
              Dropdown on Right
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Action
              </Link>
              <a className="dropdown-item" href="#">
                Another action with a lot of text inside of an item
              </Link>
            </div>
          </li>
       
        */}
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(NavbarMain);
