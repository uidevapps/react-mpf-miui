import { makeStyles } from "@material-ui/core/styles";
export const headerTextStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    marginBottom: 25,
    backgroundColor: "transparent"
  },
  subtitle1: {
    fontWeight: 500
  },
  subtitle2: {
    fontWeight: 300,
    fontSize: "1.5rem",
    textTransform:'uppercase'
  }
}));
