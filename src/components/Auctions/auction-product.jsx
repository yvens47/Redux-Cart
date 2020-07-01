import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";

import { auctionReducer } from "../../store/Reducers/aution-reducers";
import { addBid } from "../../store/actionsCreator/actions";

class AuctionItem extends Component {
  state = {
    countdown: "",
    days: "",
    hour: "",
    minute: "",
    second: "",
    userBid: "",
    currentBid: 0
  };

  componentDidMount = async () => {
    const highestBid = Math.max(...this.props.product.bids);
    this.setState({ currentBid: highestBid });
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    const { auctionDate } = this.props.product;
    const auctionEndingDate = new Date(auctionDate).getTime();
    setInterval(() => {
      const now = new Date().getTime();
      const timeToEnd = auctionEndingDate - now;
      this.setState({
        countdown: timeToEnd,
        days: Math.floor(timeToEnd / day),
        hour: Math.floor((timeToEnd % day) / hour),
        minute: Math.floor((timeToEnd % hour) / minute),
        second: Math.floor((timeToEnd % minute) / second)
      });
    }, 1000);
  };
  placeBid = e => {
    e.preventDefault();
    if (this.state.currentBid < parseFloat(this.state.userBid)) {
      this.setState({ currentBid: this.state.userBid });
    }
  };
  handleChange = ({ target }) => {
    this.setState({ userBid: target.value });
  };
  render() {
    return (
      <div className="auction_product">
        <div className="auction_image">
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-ride="carousel"
          >
            <div
              style={{ width: "145px", height: "auto" }}
              className="carousel-inner"
            >
              <div className="carousel-item active">
                <img
                  src="https://m.media-amazon.com/images/I/71slNTYOSNL._AC_SR700,525_.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>

              {this.props.product.images.map(image => (
                <div className="carousel-item">
                  <img src={image} className="d-block w-100" alt="..." />
                </div>
              ))}
            </div>
          </div>

          <span className="counts">{this.props.product.bids.length} Bids</span>
          <span className="like">
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
          </span>
        </div>
        <div className="auction_details">
          <h2>{this.props.product.name}</h2>
          <p className="auction_product_description">
            {this.props.product.description}
          </p>

          {this.state.countdown < 0 ? (
            "Auction Ended"
          ) : (
            <ul>
              <li>
                <span id="days">{this.state.days}</span>days
              </li>
              <li>
                <span id="hours">{this.state.hour}</span>Hours
              </li>
              <li>
                <span id="minutes">{this.state.minute}</span>Minutes
              </li>
              <li>
                <span id="seconds">{this.state.second}</span>Seconds
              </li>
            </ul>
          )}
          <p className="bids">
            <span>Current Bid ${this.state.currentBid}</span>
          </p>
          <form onSubmit={this.placeBid}>
            <div class="form-row">
              <div class="col">
                <input
                  onChange={this.handleChange}
                  name="bid"
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="enter bid"
                  value={this.state.userBid}
                />
              </div>
              <div class="col">
                <button type="submit" className="btn btn-primary">
                  Place bid
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AuctionItem;
