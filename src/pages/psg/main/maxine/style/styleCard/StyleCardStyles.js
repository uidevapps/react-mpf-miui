import { makeStyles } from "@material-ui/core/styles";
export const styleCardStyles = makeStyles(theme => {
  return {
    card: {
      maxWidth: 345,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    },
    media: {
      height: 140,
      width: 140,
      backgroundSize: "cover",
      borderRadius: "100px",
      [theme.breakpoints.down("xs")]: {
        height: 150,
        width: 150,
        paddingTop: "0%", // 16:9
      }
    }
  };
});
