import React from "react";
import Container from "@material-ui/core/Container";
import { useStyles } from "./styles";
const MaxineContainer = props => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.root}>
      {props.children}
    </Container>
  );
};

export default MaxineContainer;
