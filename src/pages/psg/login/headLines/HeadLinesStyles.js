import { makeStyles } from "@material-ui/core";

export const headLineStyles = makeStyles(theme => ({
  h3: {
    fontWeight: 300,
    fontSize: "2.8rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.6rem",
      fontWeight: 300,
      textAlign:'center'
    }
  },
  h5: {
    marginBottom: "3rem",
    textTransform: "uppercase",
    fontWeight: 300,
    fontSize: "1.5rem",
    letterSpacing: "2px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
      fontWeight: 300,
      letterSpacing: "3px",
      marginBottom: "2rem",
      textAlign:'center',
     
    }
  }
}));
