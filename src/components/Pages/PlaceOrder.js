import React from "react";
import { useSelector } from "react-redux";
import CheckOut from "../CheckOut";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../globalStyle";

const PlaceOrder = (props) => {
  const cart = useSelector((state) => state.cartReducer);
  const userSigninReducer = useSelector(state => state.userSigninReducer);
  const {userInfo} = userSigninReducer;  

  const toPrice = (num) => Number(num.toFixed(2));
  cart.itemsPrice = toPrice(
    cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  );

  if (!cart.paymentMethod) {
    props.history.push("/payment");
  }
  if(!userInfo){
    props.history.push('/signin');
  }
  cart.taxPrice = toPrice(0.18 * cart.itemsPrice);

  cart.totalPrice = cart.itemsPrice + cart.taxPrice;

  return (
    <div className="container-fluid">
      <CheckOut step1 step2 step3 step4 />
      <div className="row">
        <div className="col-md-7 ">
          <CartContainer>
            <Shipping className="card">
              <h5>Shipping</h5>
              <strong>Name:</strong>
              {cart.shippingAddress.fullname} <br />
              <strong>Address:</strong>
              {cart.shippingAddress.address}
            </Shipping>
            <Payment className="card">
              <h5>Payment</h5>
              <strong>Method:</strong>
              {cart.paymentMethod}
            </Payment>
            <Items className="card">
              <h5>Order items</h5>

              {cart.cartItems.map((item, index) => (
                <ul key={index}>
                  <li>
                    <div>
                      <img src={item.image} alt={item.name} />
                    </div>
                  </li>
                  <li>
                    <div>
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </div>
                  </li>
                  <li>
                    <div>
                      {item.qty} x ${item.price} = ${item.qty * item.price}
                    </div>
                  </li>
                </ul>
              ))}
            </Items>
          </CartContainer>
        </div>
        <div className="col-md-5">
          <Order className="card">
            <h5>Order Summary</h5>
            <div>
              <OrderItems>
                <p>Items</p>
                <p>${cart.itemsPrice.toFixed(2)}</p>
              </OrderItems>
              <Tax>
                <p>Tax</p>
                <p>${cart.taxPrice}</p>
              </Tax>
              <OrderTotal>
                <span>Order Total</span>
                <span>${cart.totalPrice.toFixed(2)}</span>
              </OrderTotal>
              <Button black style={{width:"100%",marginTop:10}}>Place Order</Button>
            </div>
          </Order>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;

const CartContainer = styled.div`
  width: 100%;
`;
const Shipping = styled.div`
  width: 100%;
  padding: 10px 5px 10px 5px;

  @media screen and (max-width: 768px) {
    padding: 10px 0 10px 10px;
    margin: 0;
  }
`;

const Order = styled.div`
  width: 100%;
  padding: 10px 5px 10px 5px;

  @media screen and (max-width: 768px) {
    padding: 10px 10px;
    margin-top: 10px;
  }
`;
const Payment = styled.div`
  width: 100%;

  padding: 10px 5px 10px 5px;
  margin: 10px 0;

  @media screen and (max-width: 768px) {
    padding: 10px 0 10px 10px;
    margin: 10px 0;
  }
`;
const Items = styled.div`
  width: 100%;
  padding: 10px 5px 10px 5px;
  margin: 10px 0;

  ul {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #141414;
  }
  li {
    list-style: none;
    padding: 0 10px;
  }
  a {
    text-align: start;
  }

  img {
    width: 60px;
  }
  @media screen and (max-width: 768px) {
    padding: 10px 0 10px 10px;
    margin: 0;
    li {
      padding: 10px 0;
      text-align: start;
      width: 100%;
    }
    img {
      width: 100px;
    }
    ul {
      flex-direction: column;
    }
  }
`;

const OrderTotal = styled.div`
  display: flex;
  justify-content: space-between;
`;
const OrderItems = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Tax = styled.div`
  display: flex;
  justify-content: space-between;
`;
