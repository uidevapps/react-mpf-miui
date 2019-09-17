import { makeStyles } from "@material-ui/core/styles";
const drawerWidth = 240;
export const dashBoardStyles = makeStyles(theme => ({
  appRoot: {
    display: "flex"
  },
  root: {
    [theme.breakpoints.up("xs")]: {
      padding: "0 !important"
    }
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },

  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1
  },

  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.down("xs")]: {
      paddingTop: theme.spacing(0),
      paddingBottom: theme.spacing(0)
    }
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 240
  }
}));
