import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    height: "100%"
  },
  card: {
    maxWidth: 345
  },
  media: {
    height: 160,
    objectFit: "contain",
    textAlign: "center",
    padding: 5
  },
  cardcontent: {
    padding: theme.spacing(1, 1)
  },
  collerImg: {
    marginTop: "1rem",
    width: "50%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    }
  }

}));
