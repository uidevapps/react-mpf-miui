import React from "react";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./styles";

const MaxineHeaderComponent = props => {
  const classes = useStyles();
  return (
    <Grid container spacing={props.gridItemSpacing}>
      <Grid item xs={false} lg={2} md={2} sm={2}>
        <Hidden xsDown>
          <div
            className={classes.brandLogo}
            style={{ backgroundImage: `url(${props.image})` }}
          ></div>
        </Hidden>
      </Grid>
      <Grid item xs={12} lg={10} md={10} sm={10}>
        <Typography variant="h2" component="h2" className={classes.h2}>
          {props.textPrimary}{" "}
          <span className={classes.brandFontColor}> {props.textSecondary}</span>
        </Typography>
        {props.children}
      </Grid>
    </Grid>
  );
};

export default MaxineHeaderComponent;
