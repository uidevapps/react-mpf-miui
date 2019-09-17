import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
const ProgressBar = props => {
  return (
    <React.Fragment>
      <LinearProgress variant="determinate" value={props.value} />
      <br />
    </React.Fragment>
  );
};

export default ProgressBar;
