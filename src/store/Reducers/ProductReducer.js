import {
  REQUEST_POSTS,
  RECEIVE_PRODUCTS
} from "../actionsCreator/productAction";
const FILTER_PRODUCT = "FILTER_PRODUCT";
const GET_PRODUCTS = "GET_PRODUCTS";
const GET_PRODUCT = "GET_PRODUCT";

export default function productReducer(state = [], actions) {
  switch (actions.type) {
    case RECEIVE_PRODUCTS:
      return actions.payload;
    // single product
    case GET_PRODUCT:
      return state;

    case FILTER_PRODUCT:
      const filtered = [...state];

      return filtered.filter(
        filterList => filterList.category === actions.payload
      );
      break;

    default:
      return state;
  }
}
