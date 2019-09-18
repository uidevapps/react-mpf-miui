import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles(theme => {
  return {
    card: {
      maxWidth: 345
    },
    media: {
      height: 140,
      paddingTop: "56.25%", // 16:9
      backgroundSize: "contain"
    },
    h6: {
      [theme.breakpoints.down("xs")]: {
        fontSize: "16px"
      }
    },
    qrcCode: {
      width: "100%",
      minHeight: "150px",
      textAlign: "center",
      overFlow: "hidden"
    },
    qrcImage: {
      width: "135px"
    },
    qrContent: {
      textAlign: "center"
    }
  };
});
