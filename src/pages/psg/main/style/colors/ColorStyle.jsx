import { makeStyles } from "@material-ui/core/styles";

export const colorStyles = makeStyles(theme => ({
  colorBox: {
    padding: "5px",
    textAlign: "center",
    color: "white",
    minHeight:"45px",
    position: "relative"
  },
  colorName: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white"
  },
}));
