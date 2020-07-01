import { createStore, combineReducers } from "redux";
import productReducer from "./Reducers/ProductReducer";
import { cartReducer } from "./Reducers/cartReducers";

import { auctionReducer } from "./Reducers/aution-reducers";

const initialState = {
  products: [
    {
      _id: "1",
      name: "Nike SB Check ",
      defaultImage:
        "https://m.media-amazon.com/images/I/71VCkY6aJSL._AC_SR700,525_.jpg",
      images: [
        "https://m.media-amazon.com/images/I/71BHnfN+euL._AC_SR700,525_.jpg",
        "https://m.media-amazon.com/images/I/71gSF-OwklL._AC_SR700,525_.jpg",
        "https://m.media-amazon.com/images/I/71CgouwWXjL._AC_SR700,525_.jpg"
      ],
      price: 99.54,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio aut m",
      inStock: 6,
      category: "Men's Shoes",
      auction: true,
      bids: [22, 65, 89, 145],
      auctionDate: "Jun 4,2020 16:58:00",
      category: "formal"
    },
    {
      _id: "2",
      name: "Nike Flex Experience Run 9",
      defaultImage:
        "https://m.media-amazon.com/images/I/71slNTYOSNL._AC_SR700,525_.jpg",
      images: [
        "https://m.media-amazon.com/images/I/71BHnfN+euL._AC_SR700,525_.jpg",
        "https://m.media-amazon.com/images/I/71gSF-OwklL._AC_SR700,525_.jpg",
        "https://m.media-amazon.com/images/I/71CgouwWXjL._AC_SR700,525_.jpg"
      ],
      price: 149.54,
      description:
        "Lorem Ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      inStock: 10,
      category: "Men's Shoes",
      auction: false,
      bids: [],
      auctionDate: "Jun 4,2020 15:58:00",
      category: "casual"
    },

    {
      _id: "3",
      name: "Nike Roshe One",
      defaultImage:
        "https://m.media-amazon.com/images/I/71Qk0+45yTL._AC_SR700,400_.jpg",
      images: [
        "https://m.media-amazon.com/images/I/71HdnZef-9L._AC_SR700,525_.jpg",
        "https://m.media-amazon.com/images/I/71ybpjVKRcL._AC_SR700,525_.jpg",
        "https://m.media-amazon.com/images/I/61FWvySpE6L._AC_SR700,525_.jpg",
        "https://m.media-amazon.com/images/I/71A68G-RC-L._AC_SR700,525_.jpg"
      ],
      price: 109.54,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio aut ab qui hic",
      inStock: 2,
      category: "Men's Shoes",
      auction: true,
      bids: [22],
      auctionDate: "Jun 4,2020 15:58:00",
      category: "formal"
    },

    {
      _id: "3",
      name: "Nike Roshe One",
      defaultImage:
        "https://m.media-amazon.com/images/I/71Qk0+45yTL._AC_SR700,400_.jpg",
      images: [
        "https://m.media-amazon.com/images/I/71HdnZef-9L._AC_SR700,525_.jpg",
        "https://m.media-amazon.com/images/I/71ybpjVKRcL._AC_SR700,525_.jpg",
        "https://m.media-amazon.com/images/I/61FWvySpE6L._AC_SR700,525_.jpg",
        "https://m.media-amazon.com/images/I/71A68G-RC-L._AC_SR700,525_.jpg"
      ],
      price: 109.54,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio aut ab qui hic",
      inStock: 2,
      category: "Men's Shoes",
      auction: true,
      bids: [22],
      auctionDate: "Jun 4,2020 15:58:00",
      category: "formal"
    },

    {
      _id: "4",
      name: "Skechers After Burn M. Fit Slip-On Walking Shoe ",
      defaultImage:
        "https://i5.walmartimages.com/asr/650edf54-8b60-4d87-bf57-6d3944334f9e_1.30692451caba9ebae88178cb0798a1bb.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
      images: [
        "https://i5.walmartimages.com/asr/ca781590-e20f-4c99-820b-79c5280d4ca0_1.81fee255f4e0a3b8f6a908989e0db302.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
        "https://i5.walmartimages.com/asr/40e1671f-f1cb-46e8-802e-76d85ef545de_1.ea791888150ae94449d66e79fa304768.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
        "https://i5.walmartimages.com/asr/4c0e9b00-9424-4919-83bf-e9f73606a1c3_1.d98ab70fd29aa4de09e2405e69688a42.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
        "https://i5.walmartimages.com/asr/bd2ae2cd-5fe0-4a3b-96b4-f879afc0a8ff_1.409f445e55e65151298e3a7ffa694207.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff"
      ],
      price: 109.54,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio aut ab qui hic",
      inStock: 2,
      category: "Men's Shoes",
      auction: true,
      bids: [22],
      auctionDate: "Jun 4,2020 15:58:00",
      category: "formal"
    },
    {
      _id: "3",
      name: "Nike Roshe One",
      defaultImage:
        "https://m.media-amazon.com/images/I/71Qk0+45yTL._AC_SR700,400_.jpg",
      images: [
        "https://m.media-amazon.com/images/I/71HdnZef-9L._AC_SR700,525_.jpg",
        "https://m.media-amazon.com/images/I/71ybpjVKRcL._AC_SR700,525_.jpg",
        "https://m.media-amazon.com/images/I/61FWvySpE6L._AC_SR700,525_.jpg",
        "https://m.media-amazon.com/images/I/71A68G-RC-L._AC_SR700,525_.jpg"
      ],
      price: 109.54,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio aut ab qui hic",
      inStock: 2,
      category: "Men's Shoes",
      auction: true,
      bids: [22],
      auctionDate: "Jun 4,2020 15:58:00",
      category: "formal"
    },
    {
      _id: "5",
      name: "Nike  One",
      defaultImage:
        "https://m.media-amazon.com/images/I/71Qk0+45yTL._AC_SR700,400_.jpg",
      images: [
        "https://m.media-amazon.com/images/I/71HdnZef-9L._AC_SR700,525_.jpg",
        "https://m.media-amazon.com/images/I/71ybpjVKRcL._AC_SR700,525_.jpg",
        "https://m.media-amazon.com/images/I/61FWvySpE6L._AC_SR700,525_.jpg",
        "https://m.media-amazon.com/images/I/71A68G-RC-L._AC_SR700,525_.jpg"
      ],
      price: 109.54,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio aut ab qui hic",
      inStock: 2,
      category: "Men's Shoes",
      auction: true,
      bids: [22],
      auctionDate: "Jun 4,2020 15:58:00",
      category: "sports"
    },
    {
      _id: "4",
      name: "Roshe One",
      defaultImage:
        "https://m.media-amazon.com/images/I/71Qk0+45yTL._AC_SR700,400_.jpg",
      images: [
        "https://m.media-amazon.com/images/I/71HdnZef-9L._AC_SR700,525_.jpg",
        "https://m.media-amazon.com/images/I/71ybpjVKRcL._AC_SR700,525_.jpg",
        "https://m.media-amazon.com/images/I/61FWvySpE6L._AC_SR700,525_.jpg",
        "https://m.media-amazon.com/images/I/71A68G-RC-L._AC_SR700,525_.jpg"
      ],
      price: 109.54,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio aut ab qui hic",
      inStock: 2,
      category: "Men's Shoes",
      auction: true,
      bids: [22],
      auctionDate: "Jun 4,2020 15:58:00",
      category: "casual"
    }
  ],
  cart: {
    items: []
  }
};

const store = createStore(
  combineReducers({
    products: productReducer,
    cart: cartReducer,
    auction: auctionReducer
  }),
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
