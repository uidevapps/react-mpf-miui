import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import { profileViewStyles } from "./profileStyles";
import Grid from "@material-ui/core/Grid";
import brandLogo from "../../../../../assets/imgs/mpflogo.png";
import Typography from "@material-ui/core/Typography";
import MaxineFooter from "../../../../../components/ui/maxineFooter/MaxineFooter";
import ProfileCardComponent from "./card/Card";
import { personalInfo } from "../../../../../data/RawData";
import Hidden from "@material-ui/core/Hidden";

class profile extends Component {
  render() {
    const data = personalInfo;
    const ref = React.createRef();
    const { classes, profile } = this.props;

    return (
      <Container maxWidth="lg" ref={ref} className={classes.root}>
        <div className={classes.profileWrapper}>
          <Paper className={classes.paper}>
            <Grid container spacing={3}>
              <Grid item xs={false} lg={3} md={3} sm={3}>
                <Hidden xsDown>
                  <div
                    className={classes.profileImage}
                    style={{
                      backgroundImage: `url(${profile.imageUrl})`
                    }}
                  >
                    <div className={classes.brandLogo}>
                      <img
                        src={brandLogo}
                        alt="mpfLogo"
                        className={classes.img}
                      />
                    </div>
                  </div>
                </Hidden>
              </Grid>
              <Grid item xs={12} lg={9} md={9} sm={9}>
                <Typography variant="h2" component="h2" className={classes.h2}>
                  MR. {profile.name}'S BRIEF{" "}
                  <span className={classes.brandFontColor}>PROFILE</span>
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  {this.props.profile.info}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <div className={classes.dividerLine}></div>
              </Grid>
            </Grid>
            <Grid container spacing={2} className={classes.mainContainer}>
              {data.map(item => (
                <Grid item xs={6} md={4} lg={4} sm={4} key={item.id}>
                  <ProfileCardComponent
                    imgUrl={item.imgUrl}
                    name={item.type}
                    type={item.description}
                  />
                </Grid>
              ))}
            </Grid>
            <div className={classes.dividerLine}></div>
            <MaxineFooter pageNo="01"></MaxineFooter>
          </Paper>
        </div>
      </Container>
    );
  }
}

export default withStyles(profileViewStyles)(profile);
