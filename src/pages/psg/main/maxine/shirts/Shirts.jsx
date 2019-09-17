import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";
import { shirtViewStyles } from "./ShirtsStyles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import brandLogo from "../../../../../assets/imgs/mpflogo.png";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import ShirtCard from "./shirtCard/ShirtCard";
import qrcCOde from "../../../../../assets/imgs/shirts-qr-code.png";
import MaxineFooter from "../../../../../components/ui/maxineFooter/MaxineFooter";

class Shirts extends Component {
  render() {
    const ref = React.createRef();
    const { classes } = this.props;
    const { data } = this.props;
    console.log("Maxine Shirts", data);
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
                  RECOMMENDED{" "}
                  <span className={classes.brandFontColor}> SHIRTS</span>
                </Typography>
                <Typography
                  variant="subtitle2"
                  component="p"
                  color="textSecondary"
                >
                  Here are our team of experts (Image Consultants, Stylists and
                  Master Tailors) curated an exclusive styling recommendation
                  and outfit collection that is just perfect for you.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <div className={classes.dividerLine}></div>
              </Grid>
            </Grid>
            <Grid container spacing={2} className={classes.mainContainer}>
              {data.map(item => (
                <Grid item xs={6} md={4} lg={4} sm={4} key={item._id}>
                  <ShirtCard imgUrl={item.image} productId={item.productId} />
                </Grid>
              ))}
              <Grid item xs={6} md={4} lg={4} sm={4}>
                <div className={classes.qrcCode}>
                  <img src={qrcCOde} alt="qrc" className={classes.qrcImage} />
                  <div className={classes.qrContent}>
                    <Typography
                      variant="subtitle2"
                      component="p"
                      color="textSecondary"
                    >
                      1. Open your app <br/>
                      2. Point your camera <br/>
                      3. Browser and shop
                    </Typography>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className={classes.dividerLine}></div>
              </Grid>
            </Grid>
            <MaxineFooter pageNo="03"/>
          </Paper>
        </div>
      </Container>
    );
  }
}

export default withStyles(shirtViewStyles)(Shirts);
