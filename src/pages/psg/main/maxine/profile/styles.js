import { makeStyles } from "@material-ui/core/styles";
export const styles = makeStyles(theme => ({
  root:{
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(0),
      paddingRight: theme.spacing(0),
    },
  },
  profileWrapper: {
    marginBottom: "2rem",
    marginTop: "2rem"
  },
  paper: {
    padding: theme.spacing(3, 3),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(2, 2)

    },
  },
  profileImage: {
    width: "150px",
    minHeight: "175px",
    position: "relative",
    backgroundSize: "cover",
    marginRight: "2rem",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center top"
  },
  brandLogo:{
    position: "absolute",
    top: "0px",
    left: "0px",
    height: "45px",
    width: "45px"
  },
  img:{
    width:'45px'
  },
  dividerLine:{
    minHeight:'3px',
    backgroundColor:"rgb(242, 180, 47)",
    marginTop:'2rem',
    marginButtom:'2rem'
  },
  h2: {
    textTransform: "uppercase",
    fontWeight: 600,
    fontSize: "2.3rem",
    marginBottom: "2rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.8rem",
      lineHeight:'35px'
    }
  },
 
  brandFontColor:{
   color:"rgb(242, 180, 47)"
  },
  
  mainContainer: {
    marginTop:'2rem'
  },
  
}));
