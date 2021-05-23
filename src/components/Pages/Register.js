import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "../../globalStyle";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Grid } from "@material-ui/core";
import { register } from "../../actions/userAction";
import LoadingBox from "../LoadingBox";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const Register = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const state = useSelector((state) => state.userRegisterReducer);
  const { userInfo, loading, error } = state;

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const classes = useStyles();

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password and confirm password are not match");
    } else {
      dispatch(register(name, email, password));
    }
  };
  return (
    <div className="container">
      <HeroRow>
        <HeroColumn>
          <HeroContent>
            {error ? (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            ) : (
              ""
            )}
            <form onSubmit={submitHandler}>
              <div className={classes.margin}>
                <Grid container spacing={1} alignItems="flex-end">
                  <Grid item>
                    <AccountCircleOutlinedIcon />
                  </Grid>
                  <Grid item>
                    <TextField
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      label="Name"
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
                    <EmailOutlinedIcon />
                  </Grid>
                  <Grid item>
                    <TextField
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      label="Email"
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
                    <LockOutlinedIcon />
                  </Grid>
                  <Grid item>
                    <TextField
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      label="Password"
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
                    <LockOutlinedIcon />
                  </Grid>
                  <Grid item>
                    <TextField
                      id="input-with-icon-grid"
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      type="password"
                      label="Confirm Password"
                      style={{
                        width: 300,
                      }}
                    />
                  </Grid>
                </Grid>
              </div>
              <div className={classes.margin}>
                <RegisterButton style={{ width: 350 }} type="submit" black big>
                  {loading ? <LoadingBox /> : <span>Register</span>}
                </RegisterButton>
              </div>
            </form>
            <p style={{ paddingLeft: 10, paddingTop: 20 }}>
              Already have an acoount?{" "}
              <Link style={{ color: "blue" }} to="/signin">
                Sign In
              </Link>
            </p>
          </HeroContent>
        </HeroColumn>
      </HeroRow>
    </div>
  );
};

export default Register;

const RegisterButton = styled(Button)`
  height: 60px;
  justify-content: center;
  text-align: center;
  display: flex;
  align-items: center;
`;

const HeroRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
  padding-top: 100px;
  @media screen and (max-width: 768px) {
    padding-top: 50px;
  }
`;
const HeroColumn = styled.div`
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  padding-left: 40px;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    padding: 0 50px;
    display: flex;
    justify-content: center;
  }
`;

const HeroContent = styled.div``;
