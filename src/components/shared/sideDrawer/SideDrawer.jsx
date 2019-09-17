import React from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import { sideDrawerStyles } from "./SideDrawerStyles";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import MenuItems from "./MenuList/MenuList";
import brandLogo from "../../../assets/imgs/MPF_logo.png";

const SideDrawer = props => {
  const classes = sideDrawerStyles();
  const [open, setOpen] = React.useState(true);
  function handleClick() {
    setOpen(!open);
  }
  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(
          classes.drawerPaper,
          !props.open && classes.drawerPaperClose
        )
      }}
      open={props.open}
    >
      <div className={classes.toolbarIcon}>
        {props.open && <img src={brandLogo} alt="logo" className={classes.logo} />}
        <IconButton onClick={props.handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <MenuItems handleExpandMenu={handleClick} expand={open} />
    </Drawer>
  );
};

export default SideDrawer;
