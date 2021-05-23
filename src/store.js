import {applyMiddleware,combineReducers,compose,createStore} from 'redux';
import thunk from 'redux-thunk';
import { cartReducer, wishListReducer } from './reducers/cartReducer';
import {categoryListReducer, productDetailsReducer, productListReducer} from './reducers/productListReducer';
import { userRegisterReducer, userSigninReducer } from './reducers/userReducer';

const initialState = {

  userSigninReducer:{
    userInfo:localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null,
  },
  userRegisterReducer:{
    userInfo:localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null,
  },

  cartReducer:{
    cartItems:localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    :[],
    shippingAddress: localStorage.getItem('shippingAddress') ?
    JSON.parse(localStorage.getItem('shippingAddress')) :{},
    paymentMethod:'PayPal',
  },
  wishListReducer:{
    whistListItems:localStorage.getItem('whistListItems')
    ? JSON.parse(localStorage.getItem('whistListItems'))
    :[],
  }
};


const reducer = combineReducers({
  productListReducer,
  categoryListReducer,
  cartReducer,
  productDetailsReducer,
  wishListReducer,
  userSigninReducer,
  userRegisterReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;