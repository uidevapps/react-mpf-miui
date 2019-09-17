import { makeStyles } from "@material-ui/core/styles";
export const loginPageStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1541888627857-37d0cd590eca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(15, 8),
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(12, 4),
    }
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
}));
