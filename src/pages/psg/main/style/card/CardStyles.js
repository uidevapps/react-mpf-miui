import { makeStyles } from "@material-ui/core/styles";

export const cardStyles = makeStyles(theme => ({
  card: {
    maxWidth:"100%",
    height:"100%"
  },
  media: {
    height: 160,
    objectFit: "contain",
    textAlign: "center",
    padding: 5
  },
  cardcontent:{
    padding: theme.spacing(1, 1),
  }
}));
