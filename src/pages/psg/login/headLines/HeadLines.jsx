import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import { headLineStyles } from "./HeadLinesStyles";
const HeadLinesComponent = props => {
  const classes = headLineStyles();
  return (
    <Fragment>
      <Typography
        component="h3"
        variant="h3"
        gutterBottom
        align="left"
        className={classes.h3}
      >
        {props.title}
      </Typography>
      <Typography
        component="h3"
        variant="h5"
        color="secondary"
        align="left"
        className={classes.h5}
      >
        {props.subTitle}
      </Typography>
    </Fragment>
  );
};

export default HeadLinesComponent;
