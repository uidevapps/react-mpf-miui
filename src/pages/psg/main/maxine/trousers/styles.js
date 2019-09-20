import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles(theme => ({
  styleContainer: {
    marginBottom: "2rem",
    marginTop: "2rem",
    [theme.breakpoints.down("xs")]: {
      paddingTop: theme.spacing(0),
      paddingBottom: theme.spacing(0)
    }
  },
  paper: {
    padding: theme.spacing(3, 3),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(2, 2)
    }
  },

  mainContainer: {
    marginTop: "2rem"
  }
}));
