import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { aboutMeStyles } from "./aboutMeStyles";
const AboutMeComponent = (props) => {
  const classes = aboutMeStyles();
  return (
    <React.Fragment>
      <Paper elevation={0} className={classes.root}>
        <Typography variant="h5" component="h1" gutterBottom>
          About Me
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          {props.info}
        </Typography>
      </Paper>
    </React.Fragment>
  );
};

export default AboutMeComponent;
