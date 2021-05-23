import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_PAYMENT_METHOD, CART_SAVE_SHIPPING_ADDRESS, WHISTLIST_ADD_ITEM, WHISTLIST_REMOVE_ITEM } from "../constants/cartConstans";

export const cartReducer = (state = {cartItems:[]},action)=>{
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find((x)=> x.product === item.product);
      if(existItem){
        return {
          ...state,
          cartItems:state.cartItems.map((x)=>
            x.product === existItem.product ? item : x 
          ),
        };
      }else{
        return {...state,cartItems:[...state.cartItems,item]}
      }
      case CART_REMOVE_ITEM:
        return {...state,cartItems:state.cartItems.filter(x => x.product !==action.payload)}

      case CART_SAVE_SHIPPING_ADDRESS:
        return {...state,shippingAddress:action.payload};

      case CART_SAVE_PAYMENT_METHOD:
        return{...state,paymentMethod:action.payload};
  
    default:
      return state;
  }

}


export const wishListReducer = (state = {whistListItems:[]},action)=>{
  switch (action.type) {
    case WHISTLIST_ADD_ITEM:
      const item = action.payload;
      const existItem = state.whistListItems.find((x)=> x.product === item.product);
      if(existItem){
        return {
          ...state,
          whistListItems:state.whistListItems.map((x)=>
            x.product === existItem.product ? item : x 
          ),
        };
      }else{
        return {...state,whistListItems:[...state.whistListItems,item]}
      }
      case WHISTLIST_REMOVE_ITEM:
        return {...state,whistListItems:state.whistListItems.filter(x => x.product !==action.payload)}

  
    default:
      return state;
  }

}