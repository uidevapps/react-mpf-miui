import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { loginPageStyles } from "./LoginStyles";
import { withRouter } from "react-router-dom";
import LoginForm from "./form/Form";
import HeadLinesComponent from "./headLines/HeadLines";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const LoginPage = props => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const classes = loginPageStyles();
  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={false} sm={4} md={6} className={classes.image} />

      <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <HeadLinesComponent
            title="Welcome To Personal Style Guide"
            subTitle="Member Only Area"
          />
          <Paper square elevation={0}>
            <Tabs
              value={value}
              indicatorColor="primary"
              textColor="primary"
              onChange={handleChange}
              aria-label="disabled tabs example"
              style={{ marginBottom: "1.5rem" }}
            >
              <Tab label="Login" style={{ minWidth: "50%" }} />
              <Tab label="Sign up" style={{ minWidth: "50%" }} />
            </Tabs>
          </Paper>
          <LoginForm />
        </div>
      </Grid>
    </Grid>
  );
};

export default withRouter(LoginPage);
