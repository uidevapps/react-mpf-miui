import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";
import { styleViewStyles } from "./StylePageStyles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import brandLogo from "../../../../../assets/imgs/mpflogo.png";
import Typography from "@material-ui/core/Typography";
import StyleCardComponent from "./styleCard/StyleCard";
import { styleForYou, colorsData } from "../../../../../data/RawData";
import collerImage from "../../../../../assets/imgs/collers.png";
import lapel from "../../../../../assets/imgs/Lapel.jpg";
import Hidden from "@material-ui/core/Hidden";
import MaxineFooter from "../../../../../components/ui/maxineFooter/MaxineFooter";

class Styles extends Component {
  render() {
    const ref = React.createRef();
    const data = styleForYou;
    const colorData = colorsData;
    const { classes } = this.props;
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
                  STYLE
                </Typography>
                <Typography
                  variant="h2"
                  component="h2"
                  color="secondary"
                  className={classes.h2}
                >
                  RECOMMENDATIONS FOR YOU
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
                    name={item.type}
                    type={item.description}
                  />
                </Grid>
              ))}
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={6} sm={6}>
                <Paper className={classes.paper} elevation={0}>
                  <Typography variant="h6">Colour suits you most</Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                    Warm Colour Palatte
                  </Typography>
                  <Grid
                    container
                    spacing={1}
                    className={classes.colorContainer}
                  >
                    {colorData.warmColors.map(color => (
                      <Grid item xs={3} sm={3} lg={3} md={3} key={color.id}>
                        <div
                          className={classes.colorBox}
                          style={{ backgroundColor: color.colorValue }}
                        >
                          <div className={classes.colorName}>{color.name}</div>
                        </div>
                      </Grid>
                    ))}
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6} lg={6} sm={6}>
                <Paper className={classes.paper} elevation={0}>
                  <Typography variant="h6">Colors you should avoid</Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                    Avoid Colour Palatte
                  </Typography>
                  <Grid
                    container
                    spacing={1}
                    className={classes.colorContainer}
                  >
                    {colorData.avoidColors.map(color => (
                      <Grid item xs={3} sm={3} lg={3} md={3} key={color.id}>
                        <div
                          className={classes.colorBox}
                          style={{ backgroundColor: color.colorValue }}
                        >
                          <div className={classes.colorName}>{color.name}</div>
                        </div>
                      </Grid>
                    ))}
                  </Grid>
                </Paper>
              </Grid>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <div className={classes.shirtCollars}>
                    <Typography variant="h6">
                      Shirt Collars and cuffs Recommendations
                    </Typography>
                    <img
                      src={collerImage}
                      alt="coller"
                      className={classes.collerImg}
                    />
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div className={classes.shirtCollars}>
                    <Typography variant="h6">
                      Suit Lapels Recommendations for you
                    </Typography>
                    <img src={lapel} alt="suit" className={classes.lapelImg} />
                  </div>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <div className={classes.dividerLine}></div>
              </Grid>
            </Grid>
            <MaxineFooter pageNo="02"></MaxineFooter>
          </Paper>
        </div>
      </Container>
    );
  }
}
export default withStyles(styleViewStyles)(Styles);
