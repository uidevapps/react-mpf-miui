import { makeStyles } from "@material-ui/core/styles";

export const UiCardStyle = makeStyles(theme => ({
  root: {
    maxWidth: "100%"
  },
  cardContent: {
    root: {
      padding: 5
    }
  },
  media: {
    height: 185,
    objectFit: "contain",
    padding: 10
  },
  subtitle1: {
    fontWeight: 600,
    fontSize: "1rem"
  },
  subtitle2: {
    fontWeight: 600,
    fontSize: "1rem"
  }
}));
