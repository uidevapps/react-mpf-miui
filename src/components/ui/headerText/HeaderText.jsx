import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { headerTextStyles } from "./HeaderTextStyles";
import Divider from "@material-ui/core/Divider";

const HeaderTextComponent = props => {
  const classes = headerTextStyles();
  return (
    <Paper className={classes.root} elevation={0}>
      <Typography variant="h4" component="h2" className={classes.subtitle1}>
        {props.title}
      </Typography>
      <Typography
        variant="subtitle2"
        component="p"
        className={classes.subtitle2}
        gutterBottom
        color="secondary"
      >
        {props.subTitle}
      </Typography>
      <Divider />
    </Paper>
  );
};

export default HeaderTextComponent;
