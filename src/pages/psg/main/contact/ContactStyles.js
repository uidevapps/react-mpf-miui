export const contactStyles = theme => ({
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
  dividerLine2: {
    minHeight: "3px",
    backgroundColor: "#bb8103",
    margin: "1rem auto",
    width: "35%"
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

  aboutContent: {
    marginTop: "2rem",
    backgroundColor: "rgb(242, 180, 47)",
    padding: theme.spacing(3, 3)
  },
  colorContainer: {
    marginTop: "1rem"
  },
  colorBox: {
    width: "100%",
    minHeight: "50px",
    backgroundColor: "red",
    position: "relative"
  },
  colorName: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white"
  },
  shirtCollars: {
    paddingLeft: "2rem",
    marginTop: "1rem",
    marginBottom: "1rem"
  },
  collerImg: {
    marginTop: "1rem",
    width: "50%",
    [theme.breakpoints.down("xs")]: {
      width: "100%"
    }
  },
  lapelImg: {
    marginTop: "1rem",
    width: "10%",
    [theme.breakpoints.down("xs")]: {
      width: "23%"
    }
  },
  subtitle2:{
      width:"50%",
      margin:'0 auto'
  },
  infoTiles:{
      width:"100%",
      height:'150px',
      position:'relative'
  },
  content:{
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  },
  h4:{
   fontWeight:600
  },
  h6:{
      marginTop:"2rem",
      marginButtom:"2rem"
  }
  
});
