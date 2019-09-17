import { makeStyles } from "@material-ui/core/styles";
const drawerWidth = 240;
export const navBarStyles = makeStyles(theme => ({
  logo: {
    maxWidth: 210
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.grey["300"]}`,
    backgroundColor: "white",
    color: `${theme.palette.grey[900]}`,
    boxShadow: theme.shadows[0],
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
    marginRight:20,
    [theme.breakpoints.down("sm")]: {
      marginRight:0,
    }
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1
  },
  button: {
    margin: theme.spacing(1)
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth:'350px',
    minHeight:'350px'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
