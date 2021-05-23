import Axios from 'axios';
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_PAYMENT_METHOD, CART_SAVE_SHIPPING_ADDRESS, WHISTLIST_ADD_ITEM, WHISTLIST_REMOVE_ITEM } from '../constants/cartConstans';



export const addToCart = (id,qty)=> async(dispatch,getState)=>{
  const {data} = await Axios.get(`/api/products/${id}`);
  let itemName;
  let itemImage;
  let itemPrice;
  let itemId;
  data.forEach((item) =>{
    itemName=item.title;
    itemImage=item.image;
    itemPrice=item.price;
    itemId=item._id 
  })
  dispatch({
    type:CART_ADD_ITEM,
    payload:{
      name:itemName,
      image:itemImage,
      price:itemPrice,
      product:itemId,
      qty
    }
  });
  localStorage.setItem('cartItems',JSON.stringify(getState().cartReducer.cartItems))
};

export const removeFromCart = (id) => (dispatch,getState)=>{
  dispatch({
    type:CART_REMOVE_ITEM,
    payload:id
  })
  localStorage.setItem('cartItems',JSON.stringify(getState().cartReducer.cartItems))
};

export const saveShippingAddress = (data) => (dispatch)=>{
  dispatch({type:CART_SAVE_SHIPPING_ADDRESS,payload:data});
  localStorage.setItem('shippingAddress',JSON.stringify(data));
}
export const savePaymendMethod = data => dispatch=>{
  dispatch({type:CART_SAVE_PAYMENT_METHOD,payload:data});
};


export const addToWhistList = (id)=> async(dispatch,getState)=>{
  const {data} = await Axios.get(`/api/products/${id}`);
  let itemName;
  let itemImage;
  let itemPrice;
  let itemId;
  data.forEach((item) =>{
    itemName=item.title;
    itemImage=item.image;
    itemPrice=item.price;
    itemId=item._id 
  })
  dispatch({
    type:WHISTLIST_ADD_ITEM,
    payload:{
      name:itemName,
      image:itemImage,
      price:itemPrice,
      product:itemId,
    }
  });
  localStorage.setItem('whistListItems',JSON.stringify(getState().wishListReducer.whistListItems))
};

export const removeFromWishList = (id) => (dispatch,getState)=>{
  dispatch({
    type:WHISTLIST_REMOVE_ITEM,
    payload:id
  })
  localStorage.setItem('whistListItems',JSON.stringify(getState().wishListReducer.whistListItems))
};