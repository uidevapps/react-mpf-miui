import { makeStyles } from "@material-ui/core/styles";

export const InfoCardStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 160,
    objectFit: "contain",
    textAlign: "center",
    padding:10
  }
}));
