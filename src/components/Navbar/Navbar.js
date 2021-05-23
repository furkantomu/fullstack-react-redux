import React, { useState } from "react";
import {
  MobileBars,
  MobileClose,
  MobileIcon,
  Nav,
  NavbarContainer,
  NavHeartIcon,
  NavCartIcon,
  NavIcon,
  NavItem,
  NavLinks,
  NavLoginIcon,
  NavLogo,
  NavMenu,
  NavSideBar,
  IconLink,
  Dropdown,
  DropdownContent,
  AccountTitle,
} from "./Navbar.elements";

import GitHubIcon from "@material-ui/icons/GitHub";
import Badge from "@material-ui/core/Badge";

import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signout } from "../../actions/userAction";
import { Button } from "../../globalStyle";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const dispatch = useDispatch();

  const cartReducer = useSelector((state) => state.cartReducer);
  const { cartItems } = cartReducer;

  const wishListReducer = useSelector((state) => state.wishListReducer);
  const { whistListItems } = wishListReducer;

  const state = useSelector((state) => state.userSigninReducer);
  const { userInfo } = state;

  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon />
          </NavLogo>
          <NavSideBar>
            
            <Badge
              badgeContent={whistListItems.length}
              color="primary"
              overlap="circle"
            >
              <IconLink to="/wishlist">
                <NavHeartIcon/>
              </IconLink>
            </Badge>
            <Badge
              badgeContent={cartItems.length}
              color="primary"
              overlap="circle"
            >
              <IconLink to="/cart">
                <NavCartIcon />
              </IconLink>
            </Badge>
            {userInfo ? (
              <Dropdown>
                <Link to="#">
                  <AccountTitle>Account</AccountTitle>{" "}
                  <i className="fa fa-caret-down"></i>
                </Link>
                <DropdownContent>
                  <li onClick={signoutHandler}>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sing Out
                    </Link>
                  </li>
                  <li>{userInfo.name}</li>
                </DropdownContent>
              </Dropdown>
            ) : (
              <Link to="/signin">
                <NavLoginIcon />
              </Link>
            )}
          </NavSideBar>
          <MobileIcon onClick={handleClick}>
            {click ? <MobileClose /> : <MobileBars />}
          </MobileIcon>
        </NavbarContainer>
      </Nav>
      <Nav>
        <NavbarContainer>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLinks to="/shop">SHOP</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/shop">WOMEN'S</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/shop">MEN'S</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/shop">BUY NOW!</NavLinks>
            </NavItem>
            <NavItem>
              <Button>
                <a href="github.com">
                  <div>
                    <GitHubIcon />{" "}
                  </div>
                  <span style={{ fontSize: "1.3rem" }}>GitHub</span>
                </a>
              </Button>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
