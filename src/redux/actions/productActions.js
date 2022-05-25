import {ActionTypes} from '../constants/ActionTypes';

export const setProducts=(products)=>{
return {
  type : ActionTypes.SET_PRODUCTS,
  payload :products
}
}
export const selectedProducts=(product)=>{
  return{
    type:ActionTypes.SELECTED_PRODUCTS,
    payload:product
  }
}
