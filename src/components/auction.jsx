import React, { Component } from "react";
import AuctionItem from "./Auctions/auction-product";


class Auction extends Component {
  componentDidMount = () => {};
  render() {
    const { products } = this.props;

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-9">
            {products &&
              products
                .filter(filteredValue => filteredValue.auction === true)
                .map(auctionItem => <AuctionItem product={auctionItem} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default Auction;
