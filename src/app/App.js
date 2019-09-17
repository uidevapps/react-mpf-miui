import React, { Component } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { Route, Switch, withRouter } from "react-router-dom";
import MainPage from "../pages/psg/main/Main";
import LoginPage from "../pages/psg/login/Login";
import SignupPage from "../pages/psg/signup/Signup";
import { theme } from "../theme/theme";
import CssBaseline from "@material-ui/core/CssBaseline";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <Route exact path="/" component={LoginPage}></Route>
          <Route
            path="/(.+)"
            render={() => (
              <React.Fragment>
                <Switch key={this.props.location.key}>
                  <Route path="/login" component={LoginPage}></Route>
                  <Route path="/signup" component={SignupPage}></Route>
                  <Route path="/main" component={MainPage}></Route>
                </Switch>
              </React.Fragment>
            )}
          ></Route>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
