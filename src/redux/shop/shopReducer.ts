import * as actionTypes from "./shop-types";
import { ActionTypes } from "./shop-types";
import { Product, Cart } from "../types";
const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "Apollo running short",
      stock:3,
      price: 50.0,
      image:
        "https://raw.githubusercontent.com/ezekiel37/images/main/productone.png",
    },
    {
      id: 2,
      title: "Apollo running short",
      stock:3,
      price: 50.0,
      image:
      "https://raw.githubusercontent.com/ezekiel37/images/main/productfour.png",
    },
    {
      id: 3,
      title: "Apollo running short",
      stock:0,
      price: 50.0,
      image:
      "https://raw.githubusercontent.com/ezekiel37/images/main/producttwo.png",
    },
    {
      id: 4,
      title: "Apollo running short",
      stock:3,
      price: 50.0,
      image:
      "https://raw.githubusercontent.com/ezekiel37/images/main/productthree.png",
    },
    {
      id: 5,
      title: "Apollo running short",
      stock:3,
      price: 50.0,
      image:
        "https://raw.githubusercontent.com/ezekiel37/images/main/productone.png",
    },
    {
      id: 6,
      title: "Apollo running short",
      stock:3,
      price: 50.0,
      image:
      "https://raw.githubusercontent.com/ezekiel37/images/main/producttwo.png",
    },
  ],
  cart: [],
  currentItem: null,
};

export const shopReducer = (state = INITIAL_STATE, action: ActionTypes) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCTS:
      return state;

    case actionTypes.ADD_TO_CART:
      // Great Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item: Product) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item: Cart) =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty + 1 }
              : item
          )
          : [...state.cart, { ...item, qty: 1 }],
      };
      case actionTypes.SUBTRACT_FROM_CART:
      // Great Item data from products array
      // const subItem = state.products.find(
      //   (product) => product.id === action.payload.id
      // );
      // Check if Item is in cart already
      const insideCart = state.cart.find((subItem: Product) =>
        subItem.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: insideCart
          ? state.cart.map((item: Cart) =>
            item.id === action.payload.id && item.qty > 0
              ? { ...item, qty: item.qty - 1 }
              : item
          )
          : [...state.cart, { ...item, qty: 0 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item: Cart) => item.id !== action.payload.id),
      };

    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item: Cart) =>
          item.id === action.payload.id
            ? { ...item, qty: + action.payload.qty }
            : item
        ),
      };

    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };

    default:
      return state;
  }
};

