import { indexOfProduct } from "../../utils/cart.utils";
import { addItem } from "../../utils/cart.utils";
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const VIEW_PRODUCTS_FROM_CART = "VIEW_PRODUCTS_FROM_CART";
const GET_TOTALS_CART = "GET_TOTALS_CART";
const UPDATE_QUANTITY = "UPDATE_QUANTITY";
const GET_CART = "GET_CART";

export function cartReducer(state = [], action) {
  switch (action.type) {
    case GET_CART:
      const cart = { ...state };
      cart.items = action.payload.items;

      return cart;

    case ADD_TO_CART:
      const copyState = { ...state };
      // check to see if product is already added to cart
      const product = { ...action.payload };
      console.log("cartReducer", action.payload);
      let position = indexOfProduct(product, copyState.items);
      if (position === null) {
        //addItem(product, copyState);
        if (!product.quantity) {
          product.quantity = 1;
          copyState.items.push(product);

          return copyState;
        }
      } else {
        copyState.items[position].quantity += 1;
      }

      return copyState;

    case GET_TOTALS_CART:
      const clonedStateTotal = { ...state };
      var total = 0;
      clonedStateTotal.items.forEach(function(item) {
        total += item.price * item.quantity;
      });
      clonedStateTotal.totals = total;
      return clonedStateTotal;

    case UPDATE_QUANTITY:
      const clonedQuantity = { ...state };

      if (parseInt(action.payload.quantity) > 1) {
        clonedQuantity.items.forEach(function(item) {
          if (item._id === action.payload.item._id) {
            item.quantity = action.payload.quantity;
          }
        });
      }

      return clonedQuantity;

    case REMOVE_FROM_CART:
      const cloneState = { ...state };

      const removed = cloneState.items.filter(
        item => item._id !== action.payload
      );
      cloneState.items = removed;
      return cloneState;

    default:
      return state;
  }
}
