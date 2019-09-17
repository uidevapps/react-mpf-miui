import React, { forwardRef } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import { NavLink as RouterLink, withRouter } from "react-router-dom";
import { menuListStyles } from "./MenuListStyles";

const NavRouterLink = forwardRef((props, ref) => (
  <div ref={ref}>
    <RouterLink {...props} />
  </div>
));

const MenuItems = props => {
 
  const classes = menuListStyles();
  return (
    <React.Fragment>
      <List component="nav" aria-label="main router links">
        <ListItem
          button
          divider={true}
          component={NavRouterLink}
          to="/main/cover"
          exact
        >
          <ListItemText primary="Cover Page" />
        </ListItem>
        <ListItem
          button
          divider={true}
          component={NavRouterLink}
          to="/main/profile"
        >
          <ListItemText primary="Profile" />
        </ListItem>

        <ListItem
          button
          divider={true}
          component={NavRouterLink}
          to="/main/style"
        >
          <ListItemText primary="Style" />
        </ListItem>

        <ListItem button divider={true}>
          <ListItemText
            primary="Recommendations"
            onClick={props.handleExpandMenu}
          />
          {props.expand ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={props.expand} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              className={classes.nested}
              divider={true}
              component={NavRouterLink}
              to="/main/shirts"
            >
              <ListItemText primary="Shirts" />
            </ListItem>
            <ListItem
              button
              className={classes.nested}
              divider={true}
              component={NavRouterLink}
              to="/main/trousers"
            >
              <ListItemText primary="Trousers" />
            </ListItem>
            <ListItem button className={classes.nested} divider={true}  component={NavRouterLink}
              to="/main/suits">
              <ListItemText primary="Suits" />
            </ListItem>
            <ListItem button className={classes.nested} divider={true} component={NavRouterLink}
              to="/main/accessories">
              <ListItemText primary="Accessories" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button divider={true} component={NavRouterLink}
              to="/main/contact">
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </React.Fragment>
  );
};

export default withRouter(MenuItems);
