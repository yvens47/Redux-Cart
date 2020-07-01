export const addBid = bid => {
  return {
    type: "ADD_BID",
    bid: bid
  };
};

export const auctionProducts = () => {
  return {
    type: "GET_AUCTION_PRODUCTS"
  };
};
