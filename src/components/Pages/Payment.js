import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckOut from "../CheckOut";
import styled from "styled-components";
import { Button } from "../../globalStyle";
import { savePaymendMethod } from "../../actions/cartActions";
import Radio from "@material-ui/core/Radio";

const Payment = (props) => {
  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  console.log(paymentMethod);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cartReducer);
  const { shippingAddress } = state;

  if (!shippingAddress.address) {
    props.history.push("/shipping");
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymendMethod(paymentMethod));
    props.history.push("/placeorder");
  };

  const handleChange = (e) => {
    setPaymentMethod(e.target.value);
  };
  return (
    <div className="container-fluid">
      <CheckOut step1 step2 step3 />
      <PaymentContainer>
        <form className="form" onSubmit={submitHandler}>
          <div>
            <h5>Payment Method:</h5>
          </div>
          <div>
            <div>
            <Radio
                checked={paymentMethod === "PayPal"}
                onChange={handleChange}
                value="PayPal"
                name="radio-button-demo"
                
              />
              <label style={{  }} htmlFor="paypal">
                PayPal
              </label>
            </div>
            <div>
              <Radio
                checked={paymentMethod === "Stripe"}
                onChange={handleChange}
                value="Stripe"
                name="radio-button-demo"
              />
              <label  htmlFor="stripe">
                Stripe
              </label>
            </div>
          </div>
          <Button type="submit">Continue</Button>
        </form>
      </PaymentContainer>
    </div>
  );
};

export default Payment;

const PaymentContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
