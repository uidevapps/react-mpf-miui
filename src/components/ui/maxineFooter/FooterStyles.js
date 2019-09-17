import { makeStyles } from "@material-ui/core/styles";

export const footerStyles = makeStyles(theme => ({
  footerWrapper: {
    marginTop: "2rem"
  },
  item: {
    paddingTop: 0,
    paddingBottom: 0
  },
  editon: {
    width: "100%",
    textAlign: "left",
    fontSize: "1rem",
    fontWeight: 600,
    [theme.breakpoints.down("xs")]: {
      textAlign: "center"
    }
  },
  website: {
    width: "100%",
    textAlign: "center",
    fontSize: "1rem",
    fontWeight: 600,
    [theme.breakpoints.down("xs")]: {
      textAlign: "center"
    }
  },
  spanWebsite: {
    display: "block"
  },
  spanPsg: {
    fontSize: "0.9rem",
    display: "block",
    fontWeight: 600
  },
  pageNumber: {
    width: "100%",
    textAlign: "right",
    fontSize: "1rem",
    fontWeight: 600
  },
  sideBorder: {
    borderRight: "1px solid gray",
    [theme.breakpoints.down("xs")]: {
      borderRight: "none"
    }
  }
}));
