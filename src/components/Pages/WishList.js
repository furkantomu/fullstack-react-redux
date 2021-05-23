import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  addToCart,
  removeFromWishList,
} from "../../actions/cartActions";
import { Button } from "../../globalStyle";
import { Link } from "react-router-dom";

function WishList(props) {
  const [qty, setQty] = useState();
  const dispatch = useDispatch();
  const wishListReducer = useSelector((state) => state.wishListReducer);
  const { whistListItems } = wishListReducer;

  const handleClick = (id) => {
    dispatch(removeFromWishList(id));
  };

  const handleAdd = (id) => {
    if (qty === undefined) {
      alert("quantity select");
    } else {
      dispatch(addToCart(id, qty));
    }
  };
  const checkoutHandler = () => {
    props.history.push("/cart");
  };
  return (
    <div className="container pt-3 ">
      <div className="row p-0 m-0">
        {whistListItems.length === 0 ? (
          <div className="col-xs-12 col-12">
            <p>Whislist is empty.</p>
            <p>
              <Link to="/shop">Go to shopping</Link>
            </p>
          </div>
        ) : (
          <div className="col-xs-12 col-md-12">
            {whistListItems.map((item, index) => (
              <CartItems key={index}>
                <CartItem>
                  <CartItemImg src={item.image} alt={item.name} />
                  <Link to={`/product/${item.product}`}>
                    <CartItemDetails>
                      <b>Title:</b> {item.name}
                    </CartItemDetails>
                  </Link>
                  <CartItemDetails>
                    <b>Quantity:</b>
                    <select
                      className="form-control"
                      value={item.qty}
                      id="exampleFormControlSelect1"
                      onChange={(e) => setQty(Number(e.target.value))}
                    >
                      <option>select</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                    </select>
                  </CartItemDetails>
                  <CartItemDetails>
                    <b>Price:</b> ${item.price}
                  </CartItemDetails>
                  <ButtonGroup>
                    <Button black onClick={() => handleAdd(item.product)}>
                      Add Cart
                    </Button>
                    <Button black onClick={() => handleClick(item.product)}>
                      Delete
                    </Button>
                  </ButtonGroup>
                </CartItem>
              </CartItems>
            ))}
          </div>
        )}
      </div>
      <div className="row">
        <div className="col-md-12 pt-2 col-xs-12">
          <Button
            disabled={whistListItems.length === 0 ? true : false}
            onClick={checkoutHandler}
            big
            black
            style={{ width: "100%" }}
          >
            Go to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default WishList;

const CartItems = styled.div`
  padding: 10px 10px;
  width: 100%;
  border-bottom: 1px solid #ccc;
`;
const CartItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr 2fr 1fr 1fr;
  align-items: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const CartItemImg = styled.img`
  width: 140px;
  height: 140px;
  padding-right: 10px;
`;
const CartItemDetails = styled.div`
  &:nth-child(1) {
  }
  &:nth-child(3) {
  }
  &:nth-child(4) {
    padding-left: 20px;
  }
  @media only screen and (max-width:768px){
    &:nth-child(4) {
    padding-left: 0;
  }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
`;
