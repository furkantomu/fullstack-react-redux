import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addToCart, removeFromCart } from "../../actions/cartActions";
import { Button } from "../../globalStyle";
import { Link } from "react-router-dom";

function Cart(props) {
  const dispatch = useDispatch();
  const cartReducer = useSelector((state) => state.cartReducer);
  const { cartItems } = cartReducer;

  const handleClick = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    props.history.push("/signin?redrec=shipping");
  };
  return (
    <div className="container pt-3">
      <div className="row p-0 m-0">
        {cartItems.length === 0 ? (
          <div className="col-xs-12 col-12">
            <p>Cart is empty.</p>
            <p>
              <Link to="/shop">Go to shopping</Link>
            </p>
          </div>
        ) : (
          <div className="col-xs-12 col-md-12">
            {cartItems.map((item, index) => (
              <CartItems key={index}>
                <CartItem>
                  <CartItemImg src={item.image} alt={item.name} />
                  <Link to={`/product/${item.product}`}>
                    <CartItemDetails><b>Title:</b> {item.name}</CartItemDetails>
                  </Link>
                  <CartItemDetails><b>Quantity:</b> 
                  <select
                        className="form-control"
                        value={item.qty}
                        id="exampleFormControlSelect1"
                        onChange={(e) =>  dispatch(addToCart(item.product, Number(e.target.value)))}
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
                  <CartItemDetails><b>Price:</b> ${item.price}</CartItemDetails>
                  <Button black onClick={() => handleClick(item.product)}>
                    Delete
                  </Button>
                </CartItem>
              </CartItems>
            ))}
          </div>
        )}
      </div>
      <div className="row">
        <div className="col-md-12 pt-2 col-xs-12">
          <ItemPrice>
            {cartItems.length > 0 ? (
              <h4>
                Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items): $
                {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
              </h4>
            ) : (
              <span style={{opacity:.5}}>Checkout</span>
            )}
          </ItemPrice>
          <Button disabled={cartItems.length === 0 ? true : false} onClick={checkoutHandler} big black style={{ width: "100%" }}>
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Cart;



const CartItems = styled.div`
  padding: 10px 10px;
  width: 100%;
  border-bottom: 1px solid #ccc;
`;
const CartItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr 1fr 1fr;
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
  
  &:nth-child(3){
    
    width:75px;
  }
`;


const ItemPrice = styled.div`
  width: 100%;
  padding: 0 20px;
  border: 1px solid #ccc;
  display: flex;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  background: #ccc;
`;
