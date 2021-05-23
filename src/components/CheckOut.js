import React from "react";
import styled from "styled-components";

const CheckOut = (props) => {
  return (
    <CheckOutSteps className="row pt-1">
      <div className={props.step1 ? "active" : " "}>Sign-In</div>
      <div className={props.step2 ? "active" : " "}>Shipping</div>
      <div className={props.step3 ? "active" : " "}>Payment</div>
      <div className={props.step4 ? "active" : " "}>Place Order</div>
    </CheckOutSteps>
  );
};

export default CheckOut;

const CheckOutSteps = styled.div`
  div {
    border-top: 0.2rem #c0c0c0 solid;
    color: #c0c0c0;
    flex: 1;
    padding: 1rem;
    font-weight: bold;
  }
  div.active {
    border-top-color: #141414;
    color: #141414;
  }
  @media screen and (max-width:768px){
    
    margin-top: 16px;
  }
`;
