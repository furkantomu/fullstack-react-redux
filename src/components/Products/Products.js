import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../actions/prodcutAction";
import LoadingBox from "../LoadingBox";
import { addToCart, addToWhistList } from "../../actions/cartActions";


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350,
    padding: 10,
  },
  media: {
    height: 350,
    objectFit: "cover",
  },
}));

export default function Products() {
  const dispatch = useDispatch();
  const productListReducer = useSelector((state) => state.productListReducer);
  const { loading, products } = productListReducer;
  
 

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleClick=(id)=>{
    dispatch(addToWhistList(id))
    
  }
  

  const classes = useStyles();

  return (
    <>
      {loading ? (
        <LoadingBox/>
      ) : (
        <HeroSec>
          {products && products.map((item, index) => (
            <Card className={classes.root} key={index}>
              <Link to={`/product/${item._id}`}>
                <CardMedia
                  className={classes.media}
                  image={item.image}
                  title="Paella dish"
                />
              </Link>
              <CardContent>
                <Typography variant="h5">
                  <Link to={`/product/${item._id}`}>{item.title}</Link>
                </Typography>
                <Typography>${item.price}</Typography>
              </CardContent>
              <CardActions>
                <IconButton onClick={()=> handleClick(item._id,index)} aria-label="add to favorites">
                  <FavoriteIcon  />
                </IconButton>
                <IconButton onClick={() => dispatch(addToCart(item._id, 1))} aria-label="share">
                  <AddShoppingCartIcon  />
                </IconButton>
              </CardActions>
            </Card>
          ))}
        </HeroSec>
      )}
    </>
  );
}
const HeroSec = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

