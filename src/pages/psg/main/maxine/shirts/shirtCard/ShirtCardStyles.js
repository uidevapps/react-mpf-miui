import { makeStyles } from "@material-ui/core/styles";
export const shirtCardStyles = makeStyles(theme => {
  return {
    card: {
      maxWidth: 345
    },
    media: {
      height: 140,
      paddingTop: "56.25%",// 16:9
      backgroundSize:'contain'
    },
    h6:{
      [theme.breakpoints.down("xs")]: {
        fontSize: "16px",
      },
    },
  };
});
