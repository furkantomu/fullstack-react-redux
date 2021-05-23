import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { detailsProduct } from "../../actions/prodcutAction";
import { Button } from "../../globalStyle";
import LoadingBox from "../LoadingBox";
import { addToCart } from "../../actions/cartActions";

function ProductDetails(props) {
  const [qty, setQty] = useState();

  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const productDetailsReducer = useSelector(
    (state) => state.productDetailsReducer
  );

  
  const { product, loading } = productDetailsReducer;

  const handleAddToCart = (id) => {
    if (qty === undefined) {
      alert("quantity select");
    } else {
      props.history.push(`/cart/${id}?qty=${qty}`);
      dispatch(addToCart(id, qty));
    }
  };
  

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  return (
    <div>
      {loading ? (
        <LoadingBox />
      ) : (
        <div>
          {product &&
            product.map((item, index) => (
              <div className="row m-0" key={index}>
                <div className="col-md-5">
                  <ImageSec>
                    <ImageWrapper src={item.image} alt={item.title} />
                  </ImageSec>
                </div>
                <div className="col-7">
                  <ContentWrapper>
                    <ContentHeader>{item.title}</ContentHeader>
                    <ContentPrice>${item.price}</ContentPrice>
                    <ContentCategory>{item.category}</ContentCategory>
                    <ContentDesc>{item.description}</ContentDesc>
                    <Button big black onClick={() => handleAddToCart(item._id)}>
                      Add to cart
                    </Button>
                    <div className="form-group col-md-4 pl-0 mt-4">
                      <label htmlFor="exampleFormControlSelect1">
                        Quantity select
                      </label>
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                        onChange={(e) => setQty(Number(e.target.value))}
                      >
                        <option value={qty}>select</option>
                        <option value={qty}>1</option>
                        <option value={qty}>2</option>
                        <option value={qty}>3</option>
                        <option value={qty}>4</option>
                        <option value={qty}>5</option>
                        <option value={qty}>6</option>
                        <option value={qty}>7</option>
                        <option value={qty}>8</option>
                        <option value={qty}>9</option>
                        <option value={qty}>10</option>
                      </select>
                    </div>
                  </ContentWrapper>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default ProductDetails;

const ImageSec = styled.div`
  width: 100%;
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    padding: 10px 50px;
  }
`;

const ImageWrapper = styled.img`
  width: 450px;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    padding: 10px 50px;
  }
`;
const ContentWrapper = styled.div`
  width: 100%;
  padding: 30px 0;

  flex-direction: column;
`;

const ContentHeader = styled.h5``;
const ContentPrice = styled.p``;
const ContentCategory = styled.p``;
const ContentDesc = styled.p``;
