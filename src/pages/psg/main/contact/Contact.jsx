import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import brandLogo from "../../../../assets/imgs/mpflogo.png";
import Hidden from "@material-ui/core/Hidden";
import { withStyles } from "@material-ui/core/styles";
import { contactStyles } from "./ContactStyles";
import StyleCardComponent from "../maxine/style/styleCard/StyleCard";
import { teamData } from "../../../../data/RawData";
import google from "../../../../assets/imgs/google.png";
import jd from "../../../../assets/imgs/_jd.png";
import fb from "../../../../assets/imgs/facebook.png";

class Contact extends Component {
  render() {
    const { classes } = this.props;
    const ref = React.createRef();
    const data = teamData;
    return (
      <Container maxWidth="lg" ref={ref} className={classes.root}>
        <div className={classes.styleContainer}>
          <Paper className={classes.paper}>
            <Grid container spacing={3}>
              <Grid item xs={false} lg={2} md={2} sm={2}>
                <Hidden xsDown>
                  <div
                    className={classes.brandLogo}
                    style={{ backgroundImage: `url(${brandLogo})` }}
                  ></div>
                </Hidden>
              </Grid>
              <Grid item xs={12} lg={10} md={10} sm={10}>
                <Typography variant="h2" component="h2" className={classes.h2}>
                  MEET YOUR
                </Typography>
                <Typography
                  variant="h2"
                  component="h2"
                  color="secondary"
                  className={classes.h2}
                >
                  OWN PERSONAL STYLE TEAM
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <div className={classes.dividerLine}></div>
              </Grid>
            </Grid>
            <Grid container spacing={3} className={classes.mainContainer}>
              {data.map(item => (
                <Grid item xs={12} md={4} lg={4} sm={4} key={item.id}>
                  <StyleCardComponent
                    imgUrl={item.imgUrl}
                    name={item.name}
                    type={item.designation}
                  />
                </Grid>
              ))}
            </Grid>
            <div className={classes.aboutContent}>
              <Grid container spacing={3} alignContent="space-around">
                <Grid item xs={12}>
                  <Typography
                    variant="h5"
                    component="h5"
                    align="center"
                    className={classes.h4}
                  >
                    About My Perfect Fit
                  </Typography>
                  <div className={classes.dividerLine2}></div>
                  <Typography
                    variant="subtitle2"
                    component="p"
                    align="center"
                    className={classes.subtitle2}
                  >
                    My Perfect Fit is your clothing and styling partner. We
                    believe you are unique so your style and clothing should be.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4} sm={4} lg={4}>
                  <Paper className={classes.root}>
                    <div className={classes.infoTiles}>
                      <div className={classes.content}>
                        <Typography
                          variant="h4"
                          component="h4"
                          align="center"
                          className={classes.h4}
                        >
                          15000+
                        </Typography>
                        <Typography
                          variant="h6"
                          component="h6"
                          align="center"
                          color="secondary"
                          className={classes.h4}
                        >
                          Outfits
                        </Typography>
                      </div>
                    </div>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4} sm={4} lg={4}>
                  <Paper className={classes.root}>
                    <div className={classes.infoTiles}>
                      <div className={classes.content}>
                        <Typography
                          variant="h4"
                          component="h4"
                          align="center"
                          className={classes.h4}
                        >
                          2000+
                        </Typography>
                        <Typography
                          variant="h6"
                          component="h6"
                          align="center"
                          color="secondary"
                          className={classes.h4}
                        >
                          Client Served
                        </Typography>
                      </div>
                    </div>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4} sm={4} lg={4}>
                  <Paper className={classes.root}>
                    <div className={classes.infoTiles}>
                      <div className={classes.content}>
                        <Typography
                          variant="h4"
                          component="h4"
                          align="center"
                          className={classes.h4}
                        >
                          10+
                        </Typography>
                        <Typography
                          variant="h6"
                          component="h6"
                          align="center"
                          color="secondary"
                          className={classes.h4}
                        >
                          Cities Served
                        </Typography>
                      </div>
                    </div>
                  </Paper>
                </Grid>
              </Grid>
            </div>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="h6" align="center" className={classes.h6}>
                  Our Ratings
                </Typography>
              </Grid>
              <Grid
                item
                md={4}
                lg={4}
                sm={4}
                xs={12}
                style={{ textAlign: "center" }}
              >
                <img src={google} alt="google" />
              </Grid>
              <Grid
                item
                md={4}
                lg={4}
                sm={4}
                xs={12}
                style={{ textAlign: "center" }}
              >
                <img src={jd} alt="jd" />
              </Grid>
              <Grid
                item
                md={4}
                lg={4}
                sm={4}
                xs={12}
                style={{ textAlign: "center" }}
              >
                <img src={fb} alt="fb" />
              </Grid>
              <Grid item xs={12}>
                <div className={classes.dividerLine}></div>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <Typography
                  variant="h6"
                  align="left"
                  component="h6"
                  className={classes.h6}
                >
                  Address
                </Typography>
                <Typography
                  variant="subtitle2"
                  align="left"
                  component="p"
                  className={classes.h6}
                >
                  First Floor, Plot no 1108, Road no 55, Jubilee Hills,
                  Hyderabad- 500033, Landmark: Opposite Peddamma Temple Phone :
                  +91 8008329992
                </Typography>
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <Typography
                  variant="h6"
                  align="left"
                  component="h6"
                  className={classes.h6}
                >
                  Contact Us
                </Typography>
                <Typography
                  variant="subtitle2"
                  align="left"
                  component="p"
                  className={classes.h6}
                >
                  https://www.instagram.com/myperfectfitformen/
                </Typography>
                <Typography
                  variant="subtitle2"
                  align="left"
                  component="p"
                  className={classes.h6}
                >
                  https://www.instagram.com/myperfectfitformen/
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </Container>
    );
  }
}
export default withStyles(contactStyles)(Contact);
