import { indexOfProduct } from "../../utils/cart.utils";
import { addItem } from "../../utils/cart.utils";

const ADD_BID = "ADD_BID";
const GET_AUCTION_PRODUCTS = "GET_AUCTION_PRODUCTS";

export function auctionReducer(state = [], action) {
  switch (action.type) {
    case ADD_BID:
      const copyState = { ...state };
      console.log(copyState);
      return copyState;
      break;
    case GET_AUCTION_PRODUCTS:
      const items = { ...state };
      console.log(state);

      return items;

    default:
      return state;
  }
}
