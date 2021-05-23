import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../../globalStyle";
import { FaShopify } from "react-icons/fa";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import {
  AiOutlineUser,
  AiOutlineQuestionCircle,
  AiOutlineAlignRight,
  AiOutlineClose,
} from "react-icons/ai";

export const Nav = styled.nav`
  border-bottom: 1px solid #cccc;
  z-index: 999;

  @media screen and (max-width: 960px) {
    &:nth-child(2) {
      border-bottom: none;
    }
    &:nth-child(1) {
      padding-top: 10px;
      height: 60px;
      position: fixed;
      background: #203040;
      width: 100%;
    }
  }
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 40px;
  align-items: center;

  ${Container}
`;

export const NavLogo = styled(Link)`
  color: #000;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    color: white;
  }
`;
export const NavIcon = styled(FaShopify)`
  margin-left: 1rem;

  @media screen and (max-width: 768px) {
    color: white;
  }
`;

export const NavSideBar = styled.div`
  width: 13%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-weight: 500;
  cursor: pointer;

  @media screen and (max-width: 960px) {
    width: 70%;
    font-size: 1.7rem;
    align-items: flex-end;
    justify-content: space-around;
  }
`;
export const NavLoginIcon = styled(AiOutlineUser)`
  transition: 0.1s all;
  font-size: 1.5rem;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    color: #e8e8e8;
    font-size: 1.7rem;

    font-weight: 300;
  }
`;

export const Dropdown = styled.div`
  margin-left: 10px;
  display: inline-block;
  position: relative;

  &:hover ul {
    display: block;
  }
`;
export const DropdownContent = styled.ul`
  position: absolute;
  display: none;
  right: 0;
  min-width: 12rem;
  padding: 1.1rem;
  z-index: 1;
  background-color: #141414;
  margin: 0;
  border-radius: 0.5rem;

  li {
    list-style: none;
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
    color: White;

    &:nth-child(2) {
      font-size: 1.2rem;
    }
  }

  a {
    color: white;
    font-weight: 300;
    font-size: 1rem;
  }

  @media screen and (max-width: 768px) {
    padding: 0.5rem;

    a {
      font-size: 1.2rem;
    }
  }
`;

export const AccountTitle = styled.span`
  @media screen and (max-width: 768px) {
    font-size: 1.25rem;
    color: white;
  }
`;
export const NavHeartIcon = styled(FavoriteBorderOutlinedIcon)`
  transition: 0.1s all;

  @media screen and (max-width: 768px) {
    scale: 1.1;
    color: #e8e8e8;
  }

  &:hover {
    color: #4b59f7;
  }
`;
export const NavCartIcon = styled(LocalMallOutlinedIcon)`
  transition: 0.1s all;
  font-size: 1.4rem;
  @media screen and (max-width: 768px) {
    scale: 1.1;
    color: #e8e8e8;
  }

  &:hover {
    color: #4b59f7;
  }
`;
export const NavQuestIcon = styled(AiOutlineQuestionCircle)`
  transition: 0.1s all;
  font-size: 1.4rem;

  &:hover {
    color: #4b59f7;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    font-weight: 500;
    font-size: 1.9rem;
    color: white;
  }
`;
export const MobileBars = styled(AiOutlineAlignRight)``;
export const MobileClose = styled(AiOutlineClose)``;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: auto;
  text-align: center;
  transition: all 0.5s ease;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 60px;
    background-color: #101522;
    left: ${({ click }) => (click ? 0 : "-100%")};
    transition: all 0.4s ease;
    opacity: 1;
    z-index: 99;
    padding-top: 30px;
  }
`;
export const NavItem = styled.li`
  height: 100%;
  align-items: center;
  border: 2px solid transparent;
  list-style: none;
  display: flex;
  transition: all 0.4s;

  &:nth-last-child(1) {
    display: none;
  }

  &:hover {
    border-bottom: 2px solid #4b59f7;
  }

  @media screen and (max-width: 960px) {
    justify-content: center;
    width: 100%;
    border-bottom: 2px solid #ccc;
    height: 70px;

    &:nth-last-child(1) {
      display: flex;
      border: none;
      margin-top: 20px;

      button {
        width: 90%;
        display: flex;
        justify-content: center;
      }
      button > a > div {
        margin-right: 5px;
      }
      a {
        display: flex;
      }
    }
  }
`;
export const NavLinks = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  text-align: center;
  padding: 0 1rem;
  color: black;

  &:hover {
    text-decoration: none;
  }

  @media screen and (max-width: 960px) {
    color: white;
    font-size: 1rem;
    width: 100%;
    padding: 0 0;
  }

  &:hover {
    color: #4b59f7;
  }
`;

export const IconLink = styled(Link)`
  color: black;

  &:hover {
    color: black;
  }
`;
