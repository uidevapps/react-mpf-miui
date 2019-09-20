import React from "react";
import Container from "@material-ui/core/Container";
import HeaderTextComponent from "../../../../components/ui/headerText/HeaderText";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./StylePageStyles";
import Typography from "@material-ui/core/Typography";
import CardsComponent from "./card/Cards";
import { styeData} from "../../../../data/RawData";
import collerImg from "../../../../assets/imgs/collers.png";
import ColorsComponent from "./colors/Colors";
import {colorsData} from "../../../../data/RawData";
const StylePage = () => {
  
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <HeaderTextComponent
          title="Style
          Recommendations For You"
          subTitle="My Perfect Fit Personal Style Guide"
        />

        <Grid container alignContent="stretch" spacing={1}>
          <Grid item md={12} lg={12} xs={12} sm={12}>
            <Paper className={classes.root}>
              <Grid>
                <Grid container alignContent="stretch" spacing={1}>
                  <CardsComponent data={styeData}></CardsComponent>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          <Grid item md={12} lg={12} xs={12} sm={12}>
            <Grid container alignContent="stretch" spacing={1}>
              <Grid item md={6} lg={6} xs={12} sm={6}>
                <Paper className={classes.root}>
                  <Typography variant="h6" component="h6">
                    Colour suits you most
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    component="p"
                    color="textSecondary"
                    gutterBottom
                  >
                    Warm Colour Palatte
                  </Typography>
                  <Grid container alignContent="stretch" spacing={1}>
                    <ColorsComponent colors={colorsData.warmColors} />
                  </Grid>
                </Paper>
              </Grid>
              <Grid item md={6} lg={6} xs={12} sm={6}>
                <Paper className={classes.root}>
                  <Typography variant="h6" component="h6" gutterBottom>
                    Colors you should avoid
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    component="p"
                    color="textSecondary"
                    gutterBottom
                  >
                    Avoid Colour Palatte
                  </Typography>
                  <Grid container alignContent="stretch" spacing={1}>
                    <ColorsComponent colors={colorsData.avoidColors} />
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.root}>
              <Typography variant="h6" component="h6" gutterBottom>
                Shirt Collars and cuffs Recommendations
              </Typography>
              <div>
                <img src={collerImg} alt="coller" className={classes.collerImg}/>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.root}>
              <Typography variant="h6" component="h6" gutterBottom>
                Shirt Collars and cuffs Recommendations
              </Typography>
              <div>
                <img src="https://mpf-public-data.s3.ap-south-1.amazonaws.com/Images/MPFTypeImages/Suit/Lapel1.jpg" alt="lepal"/>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default StylePage;
