import {ActionTypes} from "../constants/action-types.js";
const initialState={
  products:[{
    id:1,
    title:'Dnyaneshwar Giri',
    category:'Software Engineer'
  }]
}
export const productReducer=(state,{type,payload})=>{

    switch(type){
      case ActionTypes.SET_PRODUCTS:
        return state;
      default:
        return state;
    }
}