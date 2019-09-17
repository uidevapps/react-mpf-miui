import React from "react";
// import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { PersonalInfoStyles } from "./PersonalInforStyles";
import InfoCardComponent from "./infoCard/InfoCard";
import { personalInfo } from "../../../../../data/RawData";

const PersonalInfoComponent = props => {
  const classes = PersonalInfoStyles();
  const data = personalInfo;
  return (
    // <Paper className={classes.root}>
    <Grid container spacing={2} className={classes.root}>
      {data.map(item => (
        <InfoCardComponent
          key={item.id}
          imgUrl={item.imgUrl}
          type={item.type}
          description={item.description}
        />
      ))}
    </Grid>
    // </Paper>
  );
};

export default PersonalInfoComponent;
