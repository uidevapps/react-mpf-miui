import React from "react";
import { dashBoardStyles } from "./DashBoardStyles";
import TopAppBar from "../../shared/navBar/NavBar";
import SideDrawer from "../../shared/sideDrawer/SideDrawer";
import Container from "@material-ui/core/Container";
function DashboardLayout(props) {
  const classes = dashBoardStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.appRoot}>
      <TopAppBar
        isNavOpen={!open}
        badgeCount={50}
        handleDrawerOpen={handleDrawerOpen}
        open={open}
      />
        <SideDrawer open={open} handleDrawerClose={handleDrawerClose} variant="permanent" />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="md" className={classes.root}>
          <div className={classes.container}>{props.children}</div>
        </Container>
      </main>
    </div>
  );
}
export default DashboardLayout;
