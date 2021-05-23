import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import CheckOut from "../CheckOut";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "../../globalStyle";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import MarkunreadMailboxOutlinedIcon from "@material-ui/icons/MarkunreadMailboxOutlined";
import PublicOutlinedIcon from "@material-ui/icons/PublicOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import { Grid } from "@material-ui/core";
import {saveShippingAddress} from '../../actions/cartActions';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const Shipping = (props) => {
  const [fullname, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");

  const userSigninReducer = useSelector(state => state.userSigninReducer);
  const {userInfo} = userSigninReducer;  

 
  const dispatch = useDispatch();


  if(!userInfo){
    props.history.push('/signin');
  }

  const classes = useStyles();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({fullname,address,city,postalCode,country}));

    props.history.push('/payment');
  };

  return (
    <div className="container-fluid ">
      <CheckOut step1 step2 />
      <ShipContainer>
        <form onSubmit={submitHandler}>
          <div className={classes.margin}>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <AccountCircleOutlinedIcon />
              </Grid>
              <Grid item>
                <TextField
                  required
                  value={fullname}
                  onChange={(e) => setFullName(e.target.value)}
                  type="text"
                  label="Full Name"
                  style={{
                    width: 300,
                  }}
                />
              </Grid>
            </Grid>
          </div>
          <div className={classes.margin}>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <HomeOutlinedIcon />
              </Grid>
              <Grid item>
                <TextField
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  type="text"
                  label="Address"
                  style={{
                    width: 300,
                  }}
                />
              </Grid>
            </Grid>
          </div>
          <div className={classes.margin}>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <LocationOnOutlinedIcon />
              </Grid>
              <Grid item>
                <TextField
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  type="text"
                  label="City"
                  style={{
                    width: 300,
                  }}
                />
              </Grid>
            </Grid>
          </div>
          <div className={classes.margin}>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <MarkunreadMailboxOutlinedIcon />
              </Grid>
              <Grid item>
                <TextField
                  id="input-with-icon-grid"
                  required
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  type="text"
                  label="Postal Code"
                  style={{
                    width: 300,
                  }}
                />
              </Grid>
            </Grid>
          </div>
          <div className={classes.margin}>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <PublicOutlinedIcon />
              </Grid>
              <Grid item>
                <TextField
                  id="input-with-icon-grid"
                  required
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  type="text"
                  label="Country"
                  style={{
                    width: 300,
                  }}
                />
              </Grid>
            </Grid>
          </div>
          <div className={classes.margin}>
            <Button style={{ width: 350 }} type="submit" black big>
              Continue
            </Button>
          </div>
        </form>
      </ShipContainer>
    </div>
  );
};

export default Shipping;

const ShipContainer = styled.div`
  display:flex;
  width:100%;
  align-items:center;
  justify-content:center;
  
  

  @media screen and (max-width:768px){
    padding:0 3rem;
  }
`;
