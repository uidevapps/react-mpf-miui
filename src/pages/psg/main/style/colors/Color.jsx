import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { colorStyles } from "./ColorStyle";
const ColorComponent = props => {
  const classes = colorStyles();
  return (
    <Grid item md={3} lg={3} xs={3} sm={3}>
      <Paper
        elevation={0}
        className={classes.colorBox}
        style={{ backgroundColor: props.bgColor }}
      >
        <div className={classes.colorName}>{props.name}</div>
      </Paper>
    </Grid>
  );
};

export default ColorComponent;
