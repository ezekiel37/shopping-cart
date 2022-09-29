import * as actionTypes from "./shop-types";
import { Product } from "../types";

export const setProducts = (products : Product[]) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    payload: products,
  };
}

export const addToCart = (itemID:number) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemID,
    },
  };
};

export const subtractFromCart = (itemID:number) => {
  return {
    type: actionTypes.SUBTRACT_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};

export const removeFromCart = (itemID:number) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};

export const adjustItemQty = (itemID:number, value:number) => {
  return {
    type: actionTypes.ADJUST_ITEM_QTY,
    payload: {
      id: itemID,
      qty: value,
    },
  };
};

// const loadCurrentItem = (item) => {
//   return {
//     type: actionTypes.LOAD_CURRENT_ITEM,
//     payload: item,
//   };
// };

// export default loadCurrentItem;
