import { makeStyles } from "@material-ui/core/styles";

export const useStyles = () =>
  makeStyles(theme => {
    return {
      root: {
        [theme.breakpoints.down("xs")]: {
          paddingLeft: theme.spacing(0),
          paddingRight: theme.spacing(0)
        }
      }
    };
  });
