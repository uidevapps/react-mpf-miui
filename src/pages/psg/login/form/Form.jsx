import React, { Component } from "react";
import "react-responsive-ui/style.css";
import "react-phone-number-input/style.css";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import { loginFormStyles } from "./FormStyles";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { userLogin } from "./formActions";
import PhoneInput from "react-phone-number-input/react-responsive-ui";
import { isValidPhoneNumber, parsePhoneNumber } from "react-phone-number-input";
import flags from "react-phone-number-input/flags";
import axios from "axios";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const mapState = state => ({
  data: state.loginForm.data
});
const actions = {
  userLogin
};

class LoginForm extends Component {
  state = {
    mobile: null,
    open: false
  };
  gotoMainPage = () => {
    this.props.history.push("/main");
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmitForm = () => {
    const parseData = parsePhoneNumber(this.state.mobile);
    if (parseData) {
      const mobileNumber = parseData["nationalNumber"];
      axios
        .get(`http://15.206.16.194:3000/v2/api/psg/user/mobile/${mobileNumber}`)
        .then(response => {
          if (response["data"]["details"].length > 0) {
            this.props.history.push("/main");
          } else {
            this.setState({ open: true });
            console.log("NO PSG DATA AVAILABLE");
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <PhoneInput
          country="IN"
          limitMaxLength={true}
          placeholder="Enter Mobile Number"
          value={this.state.mobile}
          flags={flags}
          onChange={value => this.setState({ mobile: value })}
          error={
            this.state.mobile
              ? isValidPhoneNumber(this.state.mobile)
                ? undefined
                : "Please enter valid mobile number"
              : ""
          }
        />
        <Button
          type="submit"
          fullWidth
          size="large"
          variant="contained"
          color="primary"
          onClick={this.handleSubmitForm}
          disabled={!isValidPhoneNumber(this.state.mobile)}
          className={classes.submit}
        >
          LOGIN
        </Button>
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          message={<span id="message-id">No PSG Data Found</span>}
          action={[
            <IconButton
              key="close"
              aria-label="close"
              color="inherit"
              className={classes.close}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </React.Fragment>
    );
  }
}

export default withRouter(
  connect(
    mapState,
    actions
  )(reduxForm({ form: "loginForm" })(withStyles(loginFormStyles)(LoginForm)))
);
