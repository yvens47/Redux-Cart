import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./responsive.css";
import "bootstrap/dist/css/bootstrap.css";
import { connect } from "react-redux";
import ProductCard from "./components/product-card";
import Products from "./components/products-page";
import PrimaryNavbar from "./components/commons/navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import CartPage from "./components/cart/cart-page";
import Auction from "./components/auction";
import HomePage from "./components/home";
import "fontawesome/index";
import ProductPage from "./components/single-product-page";
import Checkout from "./components/cart/checkout";

import firebase from "./utils/firebase";

import { fetchProducts } from "./store/actionsCreator/productAction";
import { clone } from "fontawesome/index";
// auth components
import Login from "./components/auth/login-page";
import Register from "./components/auth/register";

class App extends React.Component {
  state = {
    products: []
  };
  componentDidMount = async () => {
    const ProductsRef = await firebase
      .firestore()
      .collection("products")

      .limit(200)
      .get();

    const cloneProducts = [...this.state.products];
    ProductsRef.forEach(value => {
      cloneProducts.push({ ...value.data(), _id: value.id });
      // console.log(value.id);

      this.setState({ products: cloneProducts });
    });

    this.props.dispatch({
      type: "RECEIVE_PRODUCTS",
      payload: this.state.products
    });

    this.props.dispatch({
      type: "GET_CART",
      payload: JSON.parse(localStorage.getItem("cart"))
    });
  };
  handleAddToCart = product => {
    this.props.dispatch({ type: "ADD_TO_CART", payload: product });
    this.props.dispatch({ type: "GET_TOTALS_CART", payload: { total: 0 } });
    const cart = JSON.stringify(this.props.cart);

    localStorage.setItem("cart", cart);
  };
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/">
            <HomePage cart={this.props.cart} />
          </Route>
          <Route exact path="/store">
            <Products
              addToCart={this.handleAddToCart}
              cart={this.props.cart}
              products={this.props.products}
              dispatch={this.props.dispatch}
            />
          </Route>
          <Route exact path="/store/product/:id">
            <ProductPage
              cart={this.props.cart}
              addToCart={this.handleAddToCart}
            />
          </Route>
          <Route exact path="/store/cart">
            <CartPage />
          </Route>
          <Route exact path="/store/checkout">
            <Checkout cart={this.props.cart} dispatch={this.props.dispatch} />
          </Route>

          <Route exact path="/auction">
            <Auction products={this.props.products} />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(App);
