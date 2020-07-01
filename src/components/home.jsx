import React, { Component } from "react";
import NavbarMain from "./commons/navbar-main";
import { cartReducer } from "../store/Reducers/cartReducers";

import SlideShow from "./commons/slideshow";
import Footer from "./commons/footer";
import HomeProduct from "./home-product";
import products from "../services/products";
import Colmd from "./commons/col-md";
import { connect } from "react-redux";
class HomePage extends Component {
  state = {};
  componentDidMount = () => {
    this.props.dispatch({
      type: "GET_CART",
      payload: JSON.parse(localStorage.getItem("cart"))
    });
  };
  render() {
    return (
      <div className="homepage">
        <NavbarMain cart={this.props.cart} />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 p-0">
              <div className="Hero">
                <div className="intro">
                  <div className="header">
                    <h1>Lorem ipsum dolor sit</h1>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.{" "}
                    </p>
                    <p className="header-category">
                      <span class="badge badge m-1 badge-pill badge-light">
                        Sports
                      </span>
                      <span class="badge badge m-1 badge-pill badge-warning">
                        Formal
                      </span>
                      <span class="badge badge m-1 badge-pill badge-info">
                        Casual
                      </span>
                    </p>
                  </div>
                  <div className="header-form">
                    <input
                      class="form-control form-control-lg"
                      type="text"
                      placeholder="Find a shoe"
                    />
                  </div>
                </div>

                <div className="show-pic">
                  <img src="https://www.rmhccoastalempire.org/wp-content/uploads/2019/12/SavannahDesignElements-333x400.png" />
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-5 pb-5">
            <Colmd
              title="Formal Shoes"
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus asperiores delectus voluptatem necessitatibus dolo"
              image="https://cdn0.iconfinder.com/data/icons/shoes-24/128/Shoes-flat-casual-fashion-footwear-512.png"
            />

            <Colmd
              title="Sports Shoes"
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus asperiores delectus voluptatem necessitatibus dolo"
              image="https://cdn2.iconfinder.com/data/icons/leisure-and-healthy-lifestyle-innovicons-black-and/128/button-sportswear-shorts-training_shoes-sleeveless_shirt-512.png"
            />
            <Colmd
              title="Casual Shoes"
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus asperiores delectus voluptatem necessitatibus dolo"
              image="https://cdn0.iconfinder.com/data/icons/shopping-and-commerce-23/50/7-512.png"
            />
          </div>
        </div>

        <div className="container-fluid">
          <div className="row feature-products pt-5 pb-4">
            <div className="col-md-10 m-auto">
              <h3 className="text-center pt-3 pb-3 ">Latest Products</h3>

              <div className="row">
                {products.map(product => (
                  <div className="col-sm-3 mb-1 p-1">
                    <HomeProduct product={product} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="row latest-wrap-2 pt-5 pb-5">
            <div className="col col-12 col-sm-6  ">
              <div className="row">
                <div className="col-sm-6">
                  <div className="latest-wraper">
                    <img
                      className="rounded"
                      src="https://images.pexels.com/photos/974964/pexels-photo-974964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="row">
                    <div className="col-sm-12 ">
                      <div className="latest-row border rounded mb-1 p-1">
                        <p>Women's Fashion</p>
                        <div className="row">
                          <div className="col wfashion">
                            <img
                              className="rounded"
                              src="https://images.pexels.com/photos/974964/pexels-photo-974964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            />
                          </div>
                          <div className="col  wfashion">
                            <img
                              className="rounded"
                              src="https://images.pexels.com/photos/974964/pexels-photo-974964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            />
                          </div>
                          <div className="col wfashion">
                            <img
                              className="rounded"
                              src="https://images.pexels.com/photos/974964/pexels-photo-974964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 ">
                      <div className="latest-row border rounded mb-1 p-1">
                        <p>Women's Fashion</p>
                        <div className="row">
                          <div className="col wfashion">
                            <img
                              className="rounded"
                              src="https://images.pexels.com/photos/974964/pexels-photo-974964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            />
                          </div>
                          <div className="col p-0 wfashion">
                            <img
                              className="rounded"
                              src="https://images.pexels.com/photos/974964/pexels-photo-974964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            />
                          </div>
                          <div className="col wfashion">
                            <img
                              className="rounded"
                              src="https://images.pexels.com/photos/974964/pexels-photo-974964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-12 col-sm-6 ">
              <div className="row white rounded features">
                <div className="col-sm-12">Features</div>
                <div className="col col-12 col-sm-6  ">
                  <div className="latest-features">
                    <img src="https://images.pexels.com/photos/974964/pexels-photo-974964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                  </div>
                  <div className="latest-features-detail">
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                  </div>
                </div>

                <div className="col">
                  <div className="latest-features">
                    <img src="https://images.pexels.com/photos/318236/pexels-photo-318236.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                  </div>
                  <div className="latest-features-detail">
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row subscribe">
            <div className="col-md-6 p-5">
              <h1>Lorem ipsum dolor sit amet</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>

              <form>
                <div className="form-row">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First name"
                    />
                  </div>
                  <div className="col">
                    <button className="btn btn-custom-primary border-0">
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-6 p-0">
              <img
                style={{ width: "100%" }}
                src="https://www.carinelli.shop/en/wp-content/uploads/Carinelli_PrettyBallerinas_promo0919__mob_en.jpg.webp"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(HomePage);
