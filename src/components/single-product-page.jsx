import React, { Component } from "react";
import MainLayout from "./master-layout";
import NavbarMain from "./commons/navbar-main";
import ImageGallery from "react-image-gallery";
import Avatar from "@material-ui/core/Avatar";

import { connect } from "react-redux";

import { withRouter } from "react-router-dom";
import firebase from "../utils/firebase";
import Footer from "./commons/footer";
import {
  getCollectionOfDocument,
  addCollectionDocumentToDocument
} from "../utils/services";
import ProductSize from "./commons/button_size";
import Reviews from "./reviews";
class ProductPage extends Component {
  state = {
    product: {},
    images: [],
    reviews: [],
    review: "",
    size_selected: false,
    current_size: 0,
    active: ""
  };
  handleSelectedSize = name => {
    this.setState({ active: name });
    console.log(name);
  };
  componentDidMount = async () => {
    const id = this.props.match.params.id; //product id
    const singleProductRef = await firebase
      .firestore()
      .collection("products")
      .doc(id)
      .get();

    if (singleProductRef.exists) {
      const product = { ...singleProductRef.data(), _id: singleProductRef.id }; //clone single product object and _id prop

      this.setState({ product: product }); // update state

      this.productImages();
      //this.productReviews();
      const reviews = await getCollectionOfDocument("products", id, "reviews");

      this.setState({ reviews });
    }
  };
  componentDidUpdate = async (prevProps, previousState) => {
    // Typical usage (don't forget to compare props):
    // if (this.props.userID !== prevProps.userID) {
    //   this.fetchData(this.props.userID);
    // }

    if (previousState.size_selected !== this.state.size_selected) {
    }
  };

  // need to be refactored here and database
  // [{ original: img, thumbnail: img },...]
  productImages = () => {
    const imgs = [...this.state.product.images];
    const images = [];
    imgs.map(img => {
      const imgDoc = { original: img, thumbnail: img };
      images.push(imgDoc);
    });

    this.setState({ images: images });
  };

  handleReview = e => {
    e.preventDefault();

    const id = this.props.match.params.id; //get product id from parameter
    const data = {
      reviewer: "JB",
      review_text: this.state.review,
      profile_pic: "profile",
      date: firebase.firestore.FieldValue.serverTimestamp()
    }; // construct data  to send to cloud firestore

    // user must be logged in to add a review
    /****if user looged in add reviews */
    addCollectionDocumentToDocument("products", id, "reviews", data);
    this.setState(() => ({ review: "" }));
    /******************* otherwise redirect to login */
    /**** Redirect Code goes here */
  };

  handleReviewChange = ({ currentTarget }) => {
    this.setState(() => ({ review: currentTarget.value }));
  };

  render() {
    const product = this.state.product;

    return (
      <React.Fragment>
        <NavbarMain show={this.handleShowMenu} cart={this.props.cart} />
        <div className="container">
          <div className="row mt-3">
            <div className="col-md-8">
              {
                <ImageGallery
                  showPlayButton={false}
                  useTranslate3D={true}
                  showFullscreenButton={false}
                  thumbnailPosition={"bottom"}
                  showNav={true}
                  items={this.state.images}
                />
              }
              <hr />
              <div className="description">
                <h2 className="description">Description</h2>
                <p>{product.description}</p>
              </div>

              <div className="similar-products">
                <h2>Similar Products</h2>
              </div>
              <div className="bought-together"></div>
              <div className="reviews">
                <h2>
                  Reviews
                  <span className="badge ml-1">
                    ({this.state.reviews.length})
                  </span>
                </h2>
                <hr />
                <div className="review-form pb-5">
                  <form onSubmit={this.handleReview}>
                    <div className="form-row">
                      <div className="col">
                        <textarea
                          name="review"
                          value={this.state.review}
                          onChange={this.handleReviewChange}
                          rows="3"
                          cols="10"
                          className="form-control"
                          placeholder="be the first to add review"
                        ></textarea>
                      </div>
                    </div>
                    <div className="form-row mt-2">
                      <div className="col">
                        <button type="reset" className="btn btn-secondary m-1">
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="btn btn-primary m-1"
                          disabled={this.state.review === "" ? "disabled" : ""}
                        >
                          Comment
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <Reviews reviews={this.state.reviews} />
              </div>
            </div>
            <div className="col-md-4">
              <p className="cate">
                {`${product.brand}`}
                <span className="single-price">${product.price}</span>
              </p>
              <h2
                className="single-pname"
                style={{ fontFamily: "'Yeseva One', cursive" }}
              >
                {product.name}
              </h2>
              <p className="ratings"></p>

              <p className="single price"></p>
              <p className="single color">Available colors</p>
              <div className="colors">
                {product.colors &&
                  product.colors.map(color => (
                    <span
                      className="btn"
                      style={{ background: color.color }}
                    ></span>
                  ))}
              </div>
              <p className="single size">
                Sizes:
                <span>
                  {this.state.current_size > 0
                    ? this.state.current_size
                    : "Please select a size"}
                </span>
              </p>
              <div className="sizes mt-2 mb-4">
                {product.sizes &&
                  product.sizes.map((size, index) => (
                    <ProductSize
                      size={size}
                      active={this.state.active === size ? "active-size " : ""}
                      clicked={() => this.handleSelectedSize(size)}
                    />
                  ))}
              </div>

              <div className="mt-3">
                <button
                  onClick={() => this.props.addToCart(product)}
                  className=" rounded-pill btn btn-block btn-primary p-3"
                >
                  Add to Cart <i class="fas fa-cart-plus"></i>
                </button>
                <button className="p-3 rounded-pill btn btn-block btn-secondary">
                  Favorite <i class="fas fa-heart"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    //products: state.products,
    cart: state.cart
  };
};

export default connect(mapStateToProps)(withRouter(ProductPage));
