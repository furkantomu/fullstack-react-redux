import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Pages/Cart";
import Home from "./components/Pages/Home";
import Payment from "./components/Pages/Payment";
import PlaceOrder from "./components/Pages/PlaceOrder";
import Register from "./components/Pages/Register";
import Shipping from "./components/Pages/Shipping";
import Shop from "./components/Pages/Shop";
import Signin from "./components/Pages/Signin";
import WishList from "./components/Pages/WishList";
import ProductDetails from "./components/Products/ProductDetails";
import GlobalStyle from "./globalStyle";

const App = () => {
  return (
    <Router>
      <GlobalStyle />

      <Navbar />

      <Switch>
      <Route path="/cart/:id?" component={Cart}></Route>
        <Route path="/product/:id" component={ProductDetails} />
        <Route path="/" component={Home} exact />
        <Route path="/shop" component={Shop} />
        <Route path="/signin" component={Signin} />
        <Route path="/register" component={Register} />
        <Route path="/shipping" component={Shipping}/>
        <Route path="/payment" component={Payment}/>
        <Route path="/placeorder" component={PlaceOrder}/>
        <Route path="/wishlist" component={WishList} />


      </Switch>
    </Router>
  );
};

export default App;
