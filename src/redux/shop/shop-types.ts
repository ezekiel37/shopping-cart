import { Product } from "../types";

export const SET_PRODUCTS = "SET_PRODUCTS";
export const ADD_TO_CART = "ADD_TO_CART";
export const SUBTRACT_FROM_CART = "SUBTRACT_FROM_CART";
export const ADJUST_ITEM_QTY = "ADJUST_ITEM_QTY";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const LOAD_CURRENT_ITEM = "LOAD_CURRENT_ITEM";



export type ActionTypes = 
| { type: typeof SET_PRODUCTS, payload: Product[] }
| { type: typeof ADD_TO_CART, payload: { id: number } }
| { type: typeof SUBTRACT_FROM_CART, payload: { id: number } }
| { type: typeof ADJUST_ITEM_QTY, payload: { id: number, qty: number } }
| { type: typeof REMOVE_FROM_CART, payload: { id: number } }
| { type: typeof LOAD_CURRENT_ITEM, payload: Product }
