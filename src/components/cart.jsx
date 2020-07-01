import React, { Component } from "react";
import ProductCard from "./product-card";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import { cartReducer } from "../store/Reducers/cartReducers";
import CartItem from "./cart-item";
import { Link } from "react-router-dom";
class Cart extends Component {
  //   handleAddToCart = product => {
  //     this.props.dispatch({ type: "ADD_TO_CART", payload: product });
  //   };

  render() {
    return (
      <React.Fragment>
        <div className="cart-wrapper p-1">
          <table className="table ">
            <thead
              style={{
                color: "#929292",
                fontWeight: "lighter",
                fontFamily: "robotto"
              }}
            >
              <tr>
                <th scope="col">Items</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>
            <tbody>
              {this.props.cartItems &&
                this.props.cartItems.items.map(item => (
                  <CartItem
                    updateQty={this.props.updateQty}
                    item={item}
                    removeItem={this.props.remove}
                  />
                ))}
            </tbody>
            <td>
              <Link className="btn boder-0 btn-primary" to="/store">
                <ArrowBackIcon /> Continue Shoping
              </Link>
            </td>
            <td></td>
            <td>Totals</td>
            <td>${this.props.cartItems.totals}</td>
            <td></td>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default Cart;
