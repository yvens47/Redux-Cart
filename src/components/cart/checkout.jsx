import React from "react";

import NavbarMain from "../commons/navbar-main";
import { connect } from "react-redux";
import PaymentInfo from "../checkout-payment";

import { Redirect } from "react-router-dom";

const Checkout = props => {
  // Handle real-time validation errors from the card Element.
  const handleChange = event => {};

  // Handle form submission.
  const handleSubmit = async event => {
    event.preventDefault();
  };

  return (
    <div>
      <NavbarMain cart={props.cart} />
      <div className="container ">
        <div className="row mt-3 pt-5">
          <div className="col-md-7">
            <PaymentInfo submit={handleSubmit} />
          </div>
          <div className="col-md-5">
            <div className="order-summary">
              <h2>Order Summary</h2>
              <hr />
              <div className="summary">
                <div className="row">
                  <div className="col">
                    <img src="" />
                  </div>
                  <div className="col">name of the product here</div>
                  <div className="col">$345</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  const { cart, firestore } = state;
  const { uid } = state.firebase.auth;
  return {
    cart,
    firestore,
    uid
  };
};

export default connect(mapStateToProps)(Checkout);
