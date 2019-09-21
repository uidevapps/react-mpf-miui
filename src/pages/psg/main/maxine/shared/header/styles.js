import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles(theme => ({
  profileImage: {
    width: "150px",
    minHeight: "175px",
    position: "relative",
    backgroundSize: "cover",
    marginRight: "2rem",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center top"
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
  logo: {
    position: "absolute",
    top: "0px",
    left: "0px",
    height: "45px",
    width: "45px"
  },
  logoImg: {
    height: "45px",
    width: "45px"
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
  dividerLine: {
    minHeight: "3px",
    backgroundColor: "rgb(242, 180, 47)",
    marginTop: "1rem",
    marginButtom: "2rem"
  }
}));
