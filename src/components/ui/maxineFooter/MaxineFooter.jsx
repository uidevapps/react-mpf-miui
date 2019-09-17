import React from "react";
import Grid from "@material-ui/core/Grid";
import { footerStyles } from "./FooterStyles";
import Hidden from "@material-ui/core/Hidden";

const MaxineFooter = (props) => {
  const classes = footerStyles();
  return (
    <Grid container spacing={3} className={classes.footerWrapper}>
      <Grid item xs={12} md={4} sm={4} lg={4} className={classes.sideBorder}>
        <div className={classes.editon}>
          <span>EDITION: {new Date().getFullYear()}</span>
        </div>
      </Grid>
      <Grid item xs={12} md={4} sm={4} lg={4} className={classes.sideBorder}>
        <div className={classes.website}>
          <span className={classes.spanWebsite}>http://myperfectfit.co.in</span>
          <span className={classes.spanPsg}>MPF Personal Style Guide</span>
        </div>
      </Grid>
      <Grid item xs={false} md={4} sm={4} lg={4}>
        <Hidden xsDown>
          <div className={classes.pageNumber}>
            <span>{props.pageNo}</span>
          </div>
        </Hidden>
      </Grid>
    </Grid>
  );
};

export default MaxineFooter;
