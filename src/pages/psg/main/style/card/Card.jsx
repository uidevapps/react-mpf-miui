import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { cardStyles } from "./CardStyles";
import Grid from "@material-ui/core/Grid";

const CardComponent = props => {
  const classes = cardStyles();
  return (
    <Grid item md={4} lg={4} xs={12} sm={4}>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.imgUrl}
          title={props.title}
          component="img"
          height="165"
        />
        <CardContent className={classes.cardcontent}>
          <Typography gutterBottom variant="h6" component="h6" align="center">
            {props.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            align="center"
          >
            {props.subTitle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
  );
};

export default CardComponent;
