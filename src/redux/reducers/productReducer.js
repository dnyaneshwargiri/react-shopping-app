import { ActionTypes } from '../constants/actions-types';
const initialState = {
  products: [],
};
const initialStateSelectedProduct = {
  payload: {
    image: '',
    title: '',
    price: '',
    category: '',
    description: '',
  },
};
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};
export const selectedProductReducer = (
  state = initialStateSelectedProduct,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCTS:
      return { ...state, payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCTS:
      return {};
    default:
      return state;
  }
};
