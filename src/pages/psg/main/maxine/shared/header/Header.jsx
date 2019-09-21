import React from "react";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./styles";

const MaxineHeaderComponent = props => {
  const classes = useStyles();
  let colSpace = 10;
  let header = null;
  if (props.isProfileHeader) {
    colSpace = 9;
    header = (
      <Grid item xs={false} lg={3} md={3} sm={3}>
        <Hidden xsDown>
          {" "}
          <div
            className={classes.profileImage}
            style={{
              backgroundImage: `url(${props.image})`
            }}
          >
            <div className={classes.logo}>
              <img
                src={props.brandLogo}
                alt="mpfLogo"
                className={classes.logoImg}
              />
            </div>
          </div>
        </Hidden>
      </Grid>
    );
  } else {
    colSpace=10;
    header = (
      <Grid item xs={false} lg={2} md={2} sm={2}>
        <Hidden xsDown>
          <div
            className={classes.brandLogo}
            style={{ backgroundImage: `url(${props.image})` }}
          ></div>
        </Hidden>
      </Grid>
    );
  }

  return (
    <Grid container spacing={props.gridItemSpacing}>
      {header}
      <Grid item xs={12} lg={colSpace} md={colSpace} sm={colSpace}>
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
