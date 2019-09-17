import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Hidden from "@material-ui/core/Hidden";
import { withStyles } from "@material-ui/core/styles";
import { coverPageStyles } from "./coverPageStyles";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import brandLogo from "../../../../assets/imgs/MPF_logo.png";
import colorPallatte from "../../../../assets/imgs/colors_palet.jpg";

import axios from "axios";

class CoverPage extends React.Component {
  state = {
    profileImage: "",
    name: ""
  };
  componentDidMount() {
    axios
      .get("http://15.206.16.194:3000/v2/api/psg/user/mobile/9959475551")
      .then(data => {
        const profileData = { ...data["data"]["details"][0] };
        this.setState({
          profileImage: profileData["images"][0],
          name: profileData["firstName"]
        });
      })
      .catch(error => {});
  }

  render() {
    const { classes } = this.props;
    const ref = React.createRef();
    return (
      <React.Fragment>
        <Container maxWidth="lg" ref={ref} className={classes.root}>
          <Paper className={classes.paper}>
            <div className={classes.coverWrapper}>
              <Grid container spacing={3}>
                <Grid item xs={12} className={classes.logoContainer}>
                  <Hidden xsDown>
                    <img src={brandLogo} alt="logo" className={classes.logo} />
                  </Hidden>
                  <Typography
                    variant="h5"
                    component="h3"
                    className={classes.h5}
                  >
                    AN EXCLUSIVE GUIDE
                  </Typography>
                  <Hidden xsDown>
                    <Typography
                      variant="h5"
                      component="h3"
                      className={classes.styledFontBold}
                    >
                      <span className={classes.styledFontLite}>YOUR</span> COLOR
                      PALLETTE
                    </Typography>
                  </Hidden>
                </Grid>

                <Grid item xs={false} md={2} lg={2} sm={2}>
                  <Hidden xsDown>
                    <div className={classes.styledFontBoldVrl}>
                      <span className={classes.styledFontLite}>YOUR </span>
                      <span className={classes.styledFontBold}>
                        ACCESSORIES
                      </span>
                    </div>
                  </Hidden>
                </Grid>
                <Grid item xs={12} md={8} lg={8} sm={8}>
                  <div
                    className={classes.coverImageContainer}
                    style={{
                      backgroundImage: `url(${this.state.profileImage})`
                    }}
                  >
                    <div className={classes.personlblBottom}>
                      <span className={classes.namelbl}>
                        <span className={classes.lblFor}>For </span> Mr. {this.state.name}
                      </span>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={false} md={2} lg={2} sm={2}>
                  <Hidden xsDown>
                    <div className={classes.styledFontBoldVlr}>
                      <span className={classes.styledFontLite}>YOUR </span>
                      <span className={classes.styledFontBold}>WARDROBE</span>
                    </div>
                  </Hidden>
                </Grid>
                <Grid item xs={12} className={classes.logoContainer}>
                  <Typography
                    variant="h5"
                    component="h3"
                    className={classes.styledFontBold}
                  >
                    <span className={classes.styledFontLite}>
                      YOUR PERSONAL
                    </span>{" "}
                    STYLE GUIDE
                  </Typography>
                </Grid>
                <Grid item xs={12} className={classes.logoContainer}>
                  <div className={classes.colorPallatte}>
                    <img
                      className={classes.colorPallatteImg}
                      src={colorPallatte}
                      alt="cpallate"
                    />
                  </div>
                </Grid>
                <Grid item xs={12} md={6} lg={6} sm={6}>
                  <div className={classes.edition}>
                    <span className={classes.editionLblColor}>EDITION: </span>
                    <span>{new Date().getFullYear()}</span>
                  </div>
                </Grid>
                <Grid item xs={12} md={6} lg={6} sm={6}>
                  <div className={classes.website}>
                    <span>https://myperfectfit.co.in</span>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Paper>
        </Container>
      </React.Fragment>
    );
  }
}

export default withStyles(coverPageStyles)(CoverPage);
