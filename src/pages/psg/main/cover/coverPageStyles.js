export const coverPageStyles = theme => ({
  root: {
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(0),
      paddingRight: theme.spacing(0)
    }
  },
  coverWrapper: {
    padding: theme.spacing(3, 3),
    border: `3px solid black`,
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0, 0),
      border: "none"
    }
  },
  paper: {
    padding: theme.spacing(3, 2),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0, 0)
    }
  },
  logoContainer: {
    textAlign: "center"
  },
  logo: {
    width: "45%",
    marginBottom: "1rem"
  },
  h5: {
    textTransform: "uppercase",
    fontWeight: 600,
    fontSize: "1.6rem",
    marginBottom: "2rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "2rem",
      marginBottom: "1rem"
    }
  },
  styledFontBold: {
    fontSize: "3.5rem",
    fontFamily: "ostrichdashed",
    textTransform: "uppercase",
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.2rem"
    }
  },
  styledFontLite: {
    fontSize: "3.5rem",
    fontFamily: "ostrich",
    textTransform: "uppercase",
    fontWeight: 500,
    marginRight: "0.5rem",
    color: "rgb(242, 180, 47)",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.2rem"
    }
  },
  styledFontBoldVrl: {
    writingMode: "vertical-rl",
    textOrientation: "mixed",
    textAlign: "center",
    // paddingRight: "1rem",
    marginRight: "0 !important",
    width: "100%"
  },
  styledFontBoldVlr: {
    writingMode: "vertical-lr",
    textOrientation: "mixed",
    textAlign: "center",
    // paddingRight: "1rem",
    marginRight: "0 !important",
    width: "100%"
  },
  coverImageContainer: {
    height: "325px",
    backgroundColor: "rgb(242, 180, 47)",
    backgroundSize: "cover",
    position: "relative",
    backgroundPosition: "top center",
    backgroundRepeat: "no-repeat",
    overflow: "hidden"
  },
  personlblBottom: {
    position: "absolute",
    backgroundColor: "rgb(242, 180, 47)",
    color: "white",
    textAlign: "center",
    left: 0,
    bottom: 0,
    clipPath: "polygon(13% 0px, 100% 0px, 100% 100%, 0% 100%)",
    padding: "1rem",
    width: "100%"
  },
  namelbl: {
    fontSize: "2rem",
    display: "block"
  },
  lblFor: {
    fontFamily: `Pacifico, cursive`
  },
  colorPallatte: {
    textAlign: "center"
  },
  colorPallatteImg: {
    width: "63%",
    marginBottom: "2rem",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    }
  },
  edition: {
    fontSize: "1rem",
    paddingLeft: "3rem",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "0rem",
      textAlign:'center'
    }
  },
  editionLblColor: {
    color: "rgb(242, 180, 47)"
  },
  website: {
    fontSize: "1rem",
    paddingRight: "3rem",
    textAlign: "right",
    [theme.breakpoints.down("xs")]: {
      paddingRight: "0rem",
      textAlign:'center',
      marginBottom:'2rem'
    }
  }
});
