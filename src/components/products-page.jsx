import React, { Component } from "react";
import ProductCard from "./product-card";

import { cartReducer } from "../store/Reducers/cartReducers";
import productReducer from "../store/Reducers/ProductReducer";
import PrimaryNavbar from "./commons/navbar";
import NavbarMain from "./commons/navbar-main";
import SelectOtion from "./commons/select-option";
import queryString from "query-string";
import { withRouter } from "react-router-dom";
import Footer from "./commons/footer";
class Products extends Component {
  state = {
    time: "",

    width: "0%",
    filter: "all"
  };

  componentDidMount = () => {
    const { localStorage } = window;
    if (!localStorage.getItem("cart")) {
      const cart = JSON.stringify(this.props.cart);
      localStorage.setItem("cart", cart);
    }

    this.props.dispatch({
      type: "GET_CART",
      payload: JSON.parse(localStorage.getItem("cart"))
    });
  };

  handleChangeFilter = ({ currentTarget }) => {
    this.setState({ filter: currentTarget.value });
  };

  render() {
    return (
      <React.Fragment>
        <NavbarMain show={this.handleShowMenu} cart={this.props.cart} />

        <div className="container-fluid ">
          <div className="row mt-3 pt-5">
            <div className="col-md-3">
              <div className="left-menu">
                <div className="row">
                  <div className="col-4">
                    <label for="exampleFormControlSelect1">Filter</label>
                  </div>
                  <div className="col-8">
                    <SelectOtion
                      options={["sports", "formal", "casual", "all"]}
                      event={this.handleChangeFilter}
                    />
                  </div>
                </div>
                <div className="row pt-3">
                  <div className="col-12">
                    <h3>Color</h3>
                    <div className="colors">
                      {["red", "blue", "green", "yellow", "purple", "grey"].map(
                        color => (
                          <div style={{ background: color }} class="dot"></div>
                        )
                      )}
                    </div>
                  </div>
                </div>
                <div className="row pt-3">
                  <div className="col-12">
                    <h3>Size</h3>
                    <div className="sizes">
                      {[
                        "7",
                        "7.5",
                        "8",
                        "8.5",
                        "9",
                        "9.5",
                        "10",
                        "11",
                        "12"
                      ].map(size => (
                        <div class="dot btn btn-light">{size}</div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="row pt-3">
                  <div className="col-12 ">
                    <h3>Filter Price Range</h3>
                    <div className="price-range">
                      <form>
                        <div class="row">
                          <div class="col">
                            <input
                              type="number"
                              class="form-control"
                              placeholder="min"
                            />
                          </div>
                          <div class="col">
                            <input
                              type="number"
                              class="form-control"
                              placeholder="max"
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-9">
              <div className="filter-products">
                <button onClick={this.handleShowMenu} className="btn btn-info">
                  <i class="fas fa-th-list"></i>
                </button>
              </div>
              <div className="row">
                {this.state.filter === "all"
                  ? this.props.products.map(product => (
                      <ProductCard
                        product={product}
                        handleAddToCart={this.props.addToCart}
                      />
                    ))
                  : this.props.products &&
                    this.props.products
                      .filter(list => list.category === this.state.filter)
                      .map(product => (
                        <ProductCard
                          product={product}
                          handleAddToCart={this.handleAddToCart}
                        />
                      ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withRouter(Products);
