import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./responsive.css";
import "bootstrap/dist/css/bootstrap.css";
import { connect } from "react-redux";
import ProductCard from "./components/product-card";
import Products from "./components/products-page";
import PrimaryNavbar from "./components/commons/navbar";
import { Route, Switch } from "react-router-dom";
import CartPage from "./components/cart-page";
import Auction from "./components/auction";
import HomePage from "./components/home";
import "fontawesome/index";
import ProductPage from "./components/single-product-page";

function App(props) {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <HomePage cart={props.cart} />
        </Route>
        <Route exact path="/store">
          <Products
            cart={props.cart}
            products={props.products}
            dispatch={props.dispatch}
          />
        </Route>
        <Route exact path="/store/product/:id">
          <ProductPage cart={props.cart} products={props.products} />
        </Route>
        <Route exact path="/store/cart">
          <CartPage />
        </Route>

        <Route exact path="/auction">
          <Auction products={props.products} />
        </Route>
      </Switch>
    </div>
  );
}
const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(App);
