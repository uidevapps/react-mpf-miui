import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { InfoCardStyles } from "./InforCardStyles";

const InfoCardComponent = props => {
  const classes = InfoCardStyles();
  return (
    <Grid item md={4} xs={6} sm={4} lg={4}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.imgUrl}
            title={props.type}
            component="img"
            height="165"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h6" align="center">
              {props.type}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" align="center">
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default InfoCardComponent;
