export const shirtViewStyles = theme => ({
  root: {
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(0),
      paddingRight: theme.spacing(0)
    }
  },
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
  brandLogo: {
    width: "100px",
    minHeight: "100px",
    position: "relative",
    backgroundSize: "cover",
    marginRight: "2rem",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center top"
  },

  img: {
    width: "45px"
  },
  dividerLine: {
    minHeight: "3px",
    backgroundColor: "rgb(242, 180, 47)",
    marginTop: "1rem",
    marginButtom: "2rem"
  },
  h2: {
    textTransform: "uppercase",
    fontWeight: 600,
    fontSize: "2.3rem",
    marginBottom: "1rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.8rem",
      marginBottom: "0rem"
    }
  },
  brandFontColor: {
    color: "rgb(242, 180, 47)"
  },

  mainContainer: {
    marginTop: "2rem"
  },
  qrcCode: {
    width: "100%",
    minHeight: "150px",
    textAlign: "center",
    overFlow: "hidden"
  },
  qrcImage:{
    width:'135px'
  },
  qrContent:{
    textAlign:'center'
  }
});
