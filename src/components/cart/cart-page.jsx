import React, { Component } from "react";
import ProductCard from "../product-card";
import { cartReducer } from "../../store/Reducers/cartReducers";
import Cart from "./cart";
import { connect } from "react-redux";
import NavbarMain from "../commons/navbar-main";
//import Checkout from "./cart/checkout";
import { loadStripe } from "@stripe/stripe-js";

import { Link } from "react-router-dom";

class CartPage extends Component {
  state = {};
  componentDidMount = () => {
    this.props.dispatch({ type: "GET_TOTALS_CART", payload: { total: 0 } });
    const { localStorage } = window;
    if (localStorage.getItem("cart")) {
      this.props.dispatch({
        type: "GET_CART",
        payload: JSON.parse(localStorage.getItem("cart"))
      });
    }
  };

  removeCartItem = id => {
    this.props.dispatch({ type: "REMOVE_FROM_CART", payload: id });
    this.props.dispatch({ type: "GET_TOTALS_CART", payload: { total: 0 } });
    setTimeout(() => {
      console.log(this.props.cart);
      window.localStorage.setItem("cart", JSON.stringify(this.props.cart));
    }, 1000);
  };
  updateQty = (item, quantity) => {
    this.props.dispatch({
      type: "UPDATE_QUANTITY",
      payload: { item, quantity }
    });
    this.props.dispatch({ type: "GET_TOTALS_CART", payload: { total: 0 } });
  };
  render() {
    return (
      <React.Fragment>
        <div className="cart-page-wrapper">
          <NavbarMain cart={this.props.cart} />
          <div className="container ">
            <div className="row mt-3 pt-5">
              <div className="col-md-12">
                <h1>
                  <span>Sho</span>pping Cart
                </h1>
              </div>
              <div className="col-md-8">
                {this.props.cart.items.length == 0 ? (
                  <h3>Empty</h3>
                ) : (
                  <Cart
                    updateQty={this.updateQty}
                    remove={this.removeCartItem}
                    cartItems={this.props.cart}
                  />
                )}
              </div>
              <div className="col-md-4">
                <div className="order-summary">
                  <div class="container">
                    <div className="row subtotal">
                      <div className="col">Subtotal</div>
                      <div className="col">{this.props.cart.totals}</div>
                    </div>
                    <div className="row shipping">
                      <div className="col">Delivery</div>
                      <div className="col">$0</div>
                    </div>
                    <div className="row total mb-1">
                      <div className="col">Total</div>
                      <div className="col">{this.props.cart.totals}</div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <Link
                          to="/store/checkout"
                          className="btn btn-info btn-block border-0 rounded-0"
                        >
                          Procceed to checkout
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(CartPage);
