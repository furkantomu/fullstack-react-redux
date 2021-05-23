import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ArrowRight from "@material-ui/icons/ArrowRight";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import PlaylistAddOutlinedIcon from "@material-ui/icons/PlaylistAddOutlined";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getCategory, getProducts } from "../../actions/prodcutAction";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function Filter() {
  const dispatch = useDispatch();
  const categoryListReducer = useSelector((state) => state.categoryListReducer);
  const { categories } = categoryListReducer;

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState();

  const handleClick = () => {
    setOpen(!open);
  };

  const handleListItemClick = (event, index, categoryName) => {
    setSelectedIndex(index);
    dispatch(getProducts(categoryName))
  };
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Filter Products
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <PlaylistAddOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Collections" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div">
          {categories &&
            categories.map((item, index) => (
              <ListItem
                key={index}
                button
                
                className={classes.nested}
                selected={selectedIndex === index}
                onClick={(event) => handleListItemClick(event, index,item.categoryName)}
              >
                <ListItemIcon>
                  <ArrowRight />
                </ListItemIcon>
                <CategoryLink
                  onClick={() => dispatch(getProducts(item.categoryName))}
                >
                  <ListItemText primary={item.categoryName} />
                </CategoryLink>
              </ListItem>
            ))}
        </List>
      </Collapse>
    </List>
  );
}

const CategoryLink = styled.button`
  text-decoration: none;
  color: black;
  border: none;
  background: transparent;

  &:hover {
    text-decoration: none;
  }
`;
